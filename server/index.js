const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const passport = require('passport');
const initializePassport = require('./passport-config');
const session = require('express-session');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const app = express();
const fs = require('fs'); // Import the fs module

initializePassport(passport);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const db = mysql.createPool({
    host: 'gearheadgarage1.mysql.database.azure.com',
    user: 'gearheadgarage@gearheadgarage1',
    password: 'ghg1234!',
    database: 'aps',
    ssl: {
        ca: fs.readFileSync('./DigiCertGlobalRootCA.crt.pem'), // Provide the path to the CA certificate
    },
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to Azure MySQL:', err);
        return;
    }
    console.log('Connected to Azure MySQL database');
    connection.release(); // Release the connection
});

var exists = "";
app.post('/register',  async (req,res)=>{
    const UserEmail = req.body.email
    const [existingUser] = await db.execute("SELECT User_Email FROM users WHERE User_Email = ?", [UserEmail]);
    if (existingUser.length > 0) {
      exists = 'User with this email already exists';
      res.send(exists);
    }
  else{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const sqlInsert = `INSERT INTO users (User_Email, User_Password) VALUES (?, ?)`;
    exists = "";
    db.execute(sqlInsert, [UserEmail, hashedPassword]);
    res.send("wo0rks");
  }


});
app.get("/register", (req, res, next) => {
  res.send(exists);
});

// app.post('/register',  async (req,res)=>{
//   try{
//   const UserEmail = req.body.email
//   const hashedPassword = await bcrypt.hash(req.body.password, 10)
//   const sqlInsert = `INSERT INTO users (User_Email, User_Password) VALUES (?, ?)`;
//   db.query(sqlInsert, [UserEmail, hashedPassword], (err, result) => {
//       if(err) {
//           console.log(err);
//           }
//   })
// } catch {
//   res.redirect('http://localhost:3000/register');
// }

// });


  var value;
  var incorrect = "";
  app.post("/login", (req, res, next) => {

    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) { 
        value = false;
        incorrect = "Incorrect Password or Email";
        res.send("Incorrect Password or Email");
      }
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send(req.user);
          value = true;
          incorrect = "";
        });
      }
    })(req, res, next);
  });



  app.get("/login", (req, res, next) => {
      res.send({value, incorrect});
  });

  app.delete("/logout", (req, res, next) => {
    
    req.logOut(() => {
      value = false;
    });

});

let globalVariable = "";

app.post('/Shop/searchWord', async (req, res) => {
    const word = req.body.searchWord;
    const sqlInsert = `
        SELECT * FROM rims WHERE Part_Name LIKE ? 
        UNION SELECT * FROM spoilers WHERE Part_Name LIKE ? 
        UNION SELECT * FROM intake WHERE Part_Name LIKE ? 
        UNION SELECT * FROM tail_lights WHERE Part_Name LIKE ? 
        UNION SELECT * FROM wheels WHERE Part_Name LIKE ? 
        UNION SELECT * FROM brakes WHERE Part_Name LIKE ? 
        UNION SELECT * FROM exhaust WHERE Part_Name LIKE ?;
    `;

    globalVariable = word;


    try {
        const [rows] = await db.execute(sqlInsert, [
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
        ]);

        res.send(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/Shop/searchWord', async (req, res) => {
    const word = globalVariable;
    const sqlInsert = `
        SELECT * FROM rims WHERE Part_Name LIKE ? 
        UNION SELECT * FROM spoilers WHERE Part_Name LIKE ? 
        UNION SELECT * FROM intake WHERE Part_Name LIKE ? 
        UNION SELECT * FROM tail_lights WHERE Part_Name LIKE ? 
        UNION SELECT * FROM wheels WHERE Part_Name LIKE ? 
        UNION SELECT * FROM brakes WHERE Part_Name LIKE ? 
        UNION SELECT * FROM exhaust WHERE Part_Name LIKE ?;
    `;


    try {
        const [rows] = await db.execute(sqlInsert, [
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
            `%${word}%`,
        ]);

        res.send(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


const port = process.env.PORT || 3000;
app.listen(443, () => {
console.log("running on port ${port}");

});