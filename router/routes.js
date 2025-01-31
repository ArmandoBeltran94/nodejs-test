const express = require('express')
const router = express.Router()
const { Types } = require("mongoose");
const User = require('../models/user');
const { validateCreate, validateUserSearch } = require('../validator/user')

router.use(express.json());

router.get('/health', (req, res) => {
    try {
        const date = new Date();
        const statusService = {
            "status": "OK",
            "timestamp": date
        };
        res.send(statusService);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
// generate new user
router.post('/users', validateCreate, async (req, res) =>{

    const {name, email, password} = req.body

    try {
        const user = new User({ name, email, password });
        await user.save();
        res.send(user);
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

//search a user
router.get('/users/:id', async (req, res) =>{
    try {
        const customerId = new Types.ObjectId(req.params.id);
        const users = await User.find(customerId);
    
        res.json(users)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

module.exports = router ;