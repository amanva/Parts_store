const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const passport = require('passport');
const initializePassport = require('./passport-config');
const session = require('express-session');
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const app = express();


initializePassport(passport)

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors()); 
app.use(session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false
  }))
  app.use(cookieParser("secretcode"));
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'aps'
    
})
app.post('/register',  async (req,res)=>{
    try{
    const UserEmail = req.body.email
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const sqlInsert = `INSERT INTO users (User_Email, User_Password) VALUES (?, ?)`;
    db.query(sqlInsert, [UserEmail, hashedPassword], (err, result) => {
        if(err) {
            console.log(err);
            }   
        res.redirect('http://localhost:3000/login');
    })
} catch {
    res.redirect('http://localhost:3000/register');
}

});


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
app.post('/Shop/searchWord', (req,res)=>{
    const word = req.body.searchWord
    const sqlInsert = "SELECT rims.Part_Name, spoilers.Part_Name FROM rims, spoilers";

    globalVariable = word
    console.log("Confirmed");
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err)
            } 
        res.send(result); 
    })
});

app.get('/Shop/searchWord', (req,res)=>{
    const sqlInsert = "SELECT rims.Part_Name, spoilers.Part_Name FROM rims, spoilers";

    console.log("Confirmed1");
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err)
            } 
        res.send(result); 
    })
});



app.listen(3001, () => {
console.log("running on port 3001");

});