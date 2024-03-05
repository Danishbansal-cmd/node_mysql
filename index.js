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
    })
})

const port_number = process.env.PORT || 3000

app.get('/',(res, req, next) => {
    res.setEncoding("hi this is response page")
})

app.listen(port_number, () => {
    console.log("response from the application")
})