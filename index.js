const express = require('express');
const app = express()
const db = require('./db')
const Accounts = require('./modle/Accounts');

const port = process.env.PORT || 3000

db.connect()

app.get('/', async (req, res, next) => {
    try {
        const a = await Accounts.find();

        res.json({
            a: a
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})