const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/coursemgModel');

// const db = require('.../config/db/connectToPostgresql');

class HomeController {
    index(req, res, next) {
        // res.json({test: "test"});

        Course.find({})
            .then((course) => {
                course = mutipleMongooseToObject(course);
                res.render('home', { course });
            })
            .catch(next);
        res.render('home');
        // db.connectToPostgresql();
    }
}

module.exports = new HomeController();
