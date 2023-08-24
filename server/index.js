const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;

app.use(express.json())

app.use(cors());

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'aps'
    
})

app.post('/register', (req,res)=>{
    try{
    const UserEmail = req.body.userEmail
    const UserPass = req.body.userPass
    const sqlInsert = `INSERT INTO users (User_Email, User_Password) VALUES (?, ?)`;
    db.query(sqlInsert, [UserEmail, UserPass], (err, result) => {
        if(err) {
            console.log(err);
            } 
            console.log("f9o");
        res.redirect('http://localhost:3000/login');
    })  
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