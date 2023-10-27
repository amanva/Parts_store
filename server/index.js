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
        ca: fs.readFileSync('C:/Users/pandh/GitHub/Parts_store/server/DigiCertGlobalRootCA.crt.pem'), // Provide the path to the CA certificate
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

let exists = ""; // Declare the variable

app.post('/register', async (req, res) => {
    const UserEmail = req.body.email;
    const [existingUser] = await db.execute("SELECT User_Email FROM users WHERE User_Email = ?", [UserEmail]);
    if (existingUser.length > 0) {
        exists = 'User with this email already exists';
        res.send(exists);
    } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const sqlInsert = `INSERT INTO users (User_Email, User_Password) VALUES (?, ?)`;
        exists = "";
        db.execute(sqlInsert, [UserEmail, hashedPassword]);
        res.send("works");
    }
});

app.get("/register", (req, res, next) => {
    res.send(exists);
});

// ... Your login and other routes ...

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});