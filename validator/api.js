const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateWeather = [
    check('city')
    .exists()
    .not()
    .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateWeather }