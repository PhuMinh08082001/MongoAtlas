const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async(req, res) => {

    try {
        const { firstName, lastName } = req.body;
        console.log(req.body)
        console.log(firstName + ' ' + lastName)
        let user = {};
        user.firstName = "dads";
        user.lastName = lastName;
        let userModel = new User(user);
        await userModel.save();
        res.json(userModel);
    } catch (err) { console.log(err); }
});

module.exports = route;