"use strict";

const express   = require('express')
    , router    = express.Router()
    , mongojs   = require('mongojs')
    , db        = mongojs('mongodb://localhost:27015/Testdb'); //job port 27015
let task;

//get all
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

//get one
router.get('/task/:id', (req, res, next) => {
    db.tasks.findOne(
        {_id: mongojs.ObjectID(req.params.id)},
        (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        }
);
});

//create
router.post('/task', (req, res, next) => {
    task = req.body;

    if(!task.title || task.isDone + '') {
        res.status(400);
        res.json({
            err: 'Bad data'
        });
    } else {
        db.tasks.save(task, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

// delete
router.delete('/task/:id', (req, res, next) => {
    db.tasks.remove(
        {_id: mongojs.ObjectID(req.params.id)},
        (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        }
    );
});

//update
router.put('/task/:id', (req, res, next) => {
    task = req.body;

    if(!task.title || task.isDone + '') {
        res.status(400);
        res.json({
            err: 'Bad data'
        });
    } else {
        db.tasks.update(
            {_id: mongojs.ObjectID(req.params.id)},
            task,

            (err, task) => {
                if (err) {
                    res.send(err);
                }
                res.json(task);
            }
        );
    }
});
module.exports = router;
