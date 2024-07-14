const express = require('express')
const router = express.Router()
const { Types } = require("mongoose");
const User = require('./models/user');

router.use(express.json());

  //consulta estatus de serivicio
router.get('/health', (req, res, next) =>{
    const date = new Date()
    const statusService = {
                "status": "OK",
                "timestamp": date
                }
    res.send(statusService)
})
// generate new user
router.post('/users', async (req, res) =>{

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
    const customerId = new Types.ObjectId(req.params.id)
    const users = await User.find(customerId);

    res.json(users)
})

module.exports = router ;