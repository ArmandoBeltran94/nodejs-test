const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
    check('name')
    .exists()
    .not()
    .isEmpty(),
    check('email')
    .exists()
    .not()
    .isEmpty()
    .isEmail(),
    check('password')
    .exists()
    .not()
    .isEmpty()
    .isStrongPassword(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateUserSearch = [
    check('id')
    .exists()
    .not()
    .isEmpty(),,
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate, validateUserSearch }