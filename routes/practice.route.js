const express = require('express');
const { getUserFromStatus } = require('../controller/practice.controller');

const router = express.Router();

router.get('/users', getUserFromStatus);
// router.delete('/users/:id', deleteUserFromStatus);

module.exports = {
    router
}