const express = require('express');

const db = require('../data/dbConfig.js');


const router = express.Router();


router.get('/', (req, res) => {

    db.select('*').from('accounts').then(rows => {

            res.status(200).json({
                info: rows
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "sorry no account info found"
            })
        })

})







router.get('/:id', (req, res) => {
    db('accounts').where({
            id: req.params.id
        })

        .first()
        .then(account => {
            if (account) {
                res.status(200).json({
                    info: account
                })
            } else {
                res.status(404).json({
                    message: "Account missing, can't found any account"
                })
            }

        })

        .catch(error => {

            res.status(500).json({
                mesage: "Sorry, ran into an error"
            })

        })

});


router.post('/', (req, res) => {

    db('accounts').insert(req.body, "id").then(ids => {
            res.status(201).json({
                results: ids
            });
        })

        .catch(error => {
            res.statys(500).json({
                message: "sorry, there was an error"
            })
        });

});


router.put('/:id', (req, res) => {
    const acctUpdate = req.body
    db('accounts').where({
            id: req.params.id
        }).update(acctUpdate).then(count => {
            if (count > 0) {
                res.status(200).json({
                    message: "account updated successfully"
                })
            } else {

                res.status(404).json({
                    message: "Account not found"
                })


            }



        })

        .catch(error => {
            res.status(500).json({
                message: "sorry ran into an error"
            })
        });


});


router.delete('/:id', (req, res) => {

    db('accounts').where({
            id: req.params.id
        }).del().then(account => {
            if (account > 0) {
                res.status(200).json({
                    message: "account deleted successfully"
                })
            } else {
                res.status(404).json({
                    message: "Account not found, can't delete"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Sorry, ran into an error"
            })
        })

})

module.exports = router;
