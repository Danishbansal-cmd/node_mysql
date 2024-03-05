const express = require('express')
const mysql = require('mysql')

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2020',
    database: 'mysql'
})

// connection.connect( (error) => {
//     if (error) throw error;
//     console.log("successfully connected")
// })

app.get('/mysqlData',(res, req, next) => {
    connection.query("select  Host,User,Select_priv,Insert_priv,Update_priv,Delete_priv,Create_priv,Drop_priv,Reload_priv,Shutdown_priv,Process_priv from mysql.user;", (error, result, fields) => {
        if(error) throw error;
        console.log("result")
        console.log(result)
        let text = "<table style='1px solid black;'><tr><th>Host</th><th>User</th></tr>";
        for(let i = 0; i < result.length; i++){
            text += "<tr><td>" + result[i]['RowDataPacket']['host'] + "</td></tr><td><tr>" + result[i]['RowDataPacket']['user'] + "</td></tr>"
        }
        text += "</table>"
        res.send(result[i]['RowDataPacket']['host'] + "</td></tr><td><tr>" + result[0]['RowDataPacket'])
        // res.send(text)
    })
})

const port_number = process.env.PORT || 3000

app.get('/',(req, res) => {
    res.send('GET request to the homepage')
})

app.listen(port_number, () => {
    console.log("response from the application")
})