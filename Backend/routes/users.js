const express = require('express');
const router = express.Router();
const userData = require('../data/users');

//get user by id
router.get('/:id', async (req, res) => {
    try {
        let user = await userData.getUserById(req.params.id);
        res.json(user);
    } catch (e) {
        res.status(404).send(e);
    }
});

//get all user
router.get('/', async (req, res) => {
    try{
        let userList = await userData.getAllUsers();
        res.json(userList);
    } catch(e) {
        res.sendStatus(500);
    }
});

//create user
router.post('/register', async (req, res) => {
    let userInfo = req.body;
    console.log(userInfo);

    try {
        const newUser = await userData.create(userInfo.email, userInfo.password);
        res.json(newUser);
    } catch(e) {
        res.status(404).send(e);
    }
});

//login 
router.post('/login', async (req, res) => {
    let userInfo = req.body;
    console.log(userInfo);

    try {
        const user = await userData.login(userInfo.email, userInfo.password);
        res.json(user);
    } catch(e) {
        //res.status(404).send(e);
        console.log(e)
        res.send('Invalid creds')
    }
})

//update user
router.put('/:id', async (req, res) => {
    const updateUser = req.body;

    try {
        const updatedUser = await userData.update(req.params.id,updateUser);
        res.json(updatedUser);
        //res.send('Email and Password Updated')
    } catch(e) {
        console.log(e)
        //res.status(500).json({error:e});
        res.send(' Email and Password Updated')
    }
});

//delete user
router.delete('/:id', async (req, res) => {
    try { 
        await userData.getUserById(req.params.id);
    } catch(e) {
        res.status(400).json({error: 'User not found'});
        res.send('user deleted')

        return;
    }

    try {
        const deletedUser = await userData.deleteUser(req.params.id);
        res.status(200).send(deletedUser);
        res.send('user deleted')
    } catch(e) {
        res.status(500).json({error: e})
        res.send('user deleted')
    }
})
module.exports = router;