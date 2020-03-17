const express = require("express");

const db = require("../data/dbConfig.js");
const accountRouter = require('../router/accountRouter')

const server = express();

server.use(express.json());

server.use('/api/accounts', accountRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        db: "Building DataBase so excited !!!!"
    })
})



module.exports = server;
