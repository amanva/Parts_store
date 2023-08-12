
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
