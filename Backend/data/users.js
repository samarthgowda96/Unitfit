const { ObjectId } = require('mongodb');
const mongoCollection = require('../config/mongoCollections');
const users = mongoCollection.users;
const bcrypt = require('bcrypt');
const saltRounds = 12;

let exportedMethods = {
    //get all user data
    async getAllUsers() {
        const userCollection = await users();
        const userList = await userCollection.find().toArray();
        if (!userList) throw 'No users in system';
        return userList;
    },
    
    //get user data by id
    async getUserById(id) {
        let newId = id.toString();

        let parsedId;
        try {
            parsedId = ObjectId(newId);
        }catch (e) {
            throw 'Id is not a valid ObjectId';
        }
        const userCollection = await users();
        const user = await userCollection.findOne({_id: parsedId});
        if (!user) throw 'No user with that id';
        return user;
    },

    //login
    async login(email, password) {
        let loginResult = false;
        const userCollection = await users();
        const user = await userCollection.findOne({email:email.toLowerCase()});
        if (user===null) throw 'Email Address or Password is invalid';
        user._id = user._id.toString();
        //loginResult = await bcrypt.compare(password,user.password);
        //if(loginResult) return user;
        //else throw 'Email address or Password is invalid';
        if (user.password === password) return user;
        else throw 'Email address or Password is invalid';
    },

    //create user
    async create(email, password) {

        const hash = await bcrypt.hash(password,saltRounds);

        const userCollection = await users();
        let newUser = {
            email: email,
            password: password
        };

        const newInsertInfo = await userCollection.insertOne(newUser);
        return await this.getUserById(newInsertInfo.insertedId.toString());
    },

    async update(id, updatedUser) {
        const userCollection = await users();

        let parsedId;
        try {
            parsedId = ObjectId(id);
        }catch(e) {
            throw 'Id is not a valid ObjectId';
        }
        await userCollection.updateOne({_id:parsedId},{$set:updatedUser});

        return await this.getUserById(id);
    },

    async deleteUser(id) {
        const userCollection = await users();
        let user = null;
        try {
            user = await this.getUserById(id);
        } catch(e) {
            console.log(e)
            return;
        }
        let parsedId;
        try{
            parsedId = ObjectId(id);
        }catch(e) {
            throw 'Id is not a valid ObjectId';
        }
        const deletedInfo = await userCollection.removeOne({_id: parsedId});
        if(deletedInfo.deletedCount === 0) {
            throw 'Could not delete user';
        }
        return 'Deleted successfully';
    }
}

module.exports = exportedMethods;