const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();


app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'YOUR_DB_PASSWORD',
    database: 'unifit'
});

app.post('/register', (request, response) => {

    const username = request.body.username;
    const password = request.body.password;

    db.query(
        'INSERT INTO user (name, password) VALUES (?, ?)', [username, password], (err, result) => {
            console.log(err);
            console.log(result)
        }
    )



});

app.post('/login', (request, response) => {
    const username = request.body.username;
    const password = request.body.password;


    db.query(
        'SELECT * FROM user WHERE name = ? AND password= ?', [username, password], (err, result) => {
            if (err) {
                response.send({ err: err })
            }
            if (result.length > 0) {
                response.send(result)
            } else {
                response.send({ message: 'yur password and username doest macctch' })
            }
        }
    )


});
app.get('/dashboard', (request, response) => {



    db.query(
        'SELECT * FROM user', (err, result) => {
            if (err) throw err;
            else {
                response.send(JSON.stringify(result))
            }

        }
    )



});

app.listen(9000, () => {
    console.log('running the server')
})