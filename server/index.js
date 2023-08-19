
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(express.json())

app.use(cors());

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'aps'
    
})

app.post('/login/go', (req,res)=>{
    const sqlInsert = "SELECT * FROM vehicle"
    const UserEmail = req.body.userEmail
    const UserPass = req.body.userPass
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err)
            } 
                
        res.send(result); 
        console.log(UserEmail);
    })
});
let globalVariable = "";
app.post('/Shop/searchWord', (req,res)=>{
    const word = req.body.searchWord
    const sqlInsert = "SELECT * FROM vehicle"
    globalVariable =word
    console.log("Confirmed");
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err)
            } 
        console.log(word);
        res.send(result); 
    })
});

app.get('/Shop/searchWord', (req,res)=>{
    const word = globalVariable
    const sqlInsert = "SELECT * FROM vehicle Where VehMake LIKE '%" + word + "%'"
    console.log("Confirmed1");
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log(err)
            } 
        console.log(word);
        // console.log(result);
        console.log(result);
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
