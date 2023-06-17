
const express = require('express');
const app = express();
const mysql = require('mysql');
// const cors = require('cors')
// app.use(cors());
app.use(express.json())

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'aps'
    
})
app.get("/", (req,res)=>{
    const sqlInsert = "SELECT * FROM vehicle"
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
