const express = require('express')
const { Client } = require('pg')
const app = express()

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'art_work',
    password: '@#_Hardin_#$',
    port: 5432,
}) 

client.connect()

app.get('/', (reg, res) => {
    client.query('SELECT NOW()', (err, result) => {
        if (err) { 
            console.error(err)
            res.status(500).send('error')
        } else {
            res.send(result.rows[0])
        }
    })
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})
