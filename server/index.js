const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const passport = require("passport");
// const initializePassport = require('./passport-config');
// initializePassport(
//     passport,
//     email => getEmail(email),
//     id => getId(id),
//     pass => getPassword(pass)
//   )


app.use(express.json())

app.use(cors());

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'aps'
    
})

const getEmail = (email) =>{
    const sqlInsert = `SELECT User_Email FROM users WHERE User_Email = ?`;
    let emailVal = "";
    db.query(sqlInsert, [email], (err, result) => {
        if(err) {
            console.log(err);
            } 
            emailVal = result.UserEmail;
            console.log(emailVal);
    })

    return emailVal;

}

const getPassword = (email) =>{
    const sqlInsert = `SELECT User_Password FROM users WHERE User_Email = ${email}`;
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err);
            } 
            console.log(result);
    })  
}

const getId = (id) =>{
    const sqlInsert = `SELECT ID FROM users WHERE ID = ${id}`;
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err);
            } 
            console.log("got ID");
    })  
}

app.post('/register', (req,res)=>{
    try{
    const UserEmail = req.body.userEmail
    const UserPass = req.body.userPass
    const sqlInsert = `INSERT INTO users (User_Email, User_Password) VALUES (?, ?)`;
    db.query(sqlInsert, [UserEmail, UserPass], (err, result) => {
        if(err) {
            console.log(err);
            } 
            
        res.redirect('http://localhost:3000/login');
    })
    console.log(getEmail(UserEmail));
    
} catch {
    console.log("asd");
    res.redirect('/register');
}
    
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
    const word = globalVariable;
    const sqlInsert = "SELECT rims.Part_Name, spoilers.Part_Name FROM rims, spoilers";

    console.log("Confirmed1");
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err)
            } 
        res.send(result); 
    })
});


 
// app.get('/login', function(req, res) {
//     // Get sent data.
//     var user = req.body;
//     // Do a MySQL query.
//     var query = db.query("SELECT * FROM vehicle", user, function(err, result) {
//       // Neat!
//     });
    
//     res.end('Success');
//   });


app.listen(3001, () => {
console.log("running on port 3001");

});