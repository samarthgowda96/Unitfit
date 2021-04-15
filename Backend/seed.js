const dbConnection = require('./config/mongoConnection');
const data = require('./data');
const users = data.users;

async function main() {
    const db = await dbConnection();

    try {
        const userOne = await users.deleteUser('606ceef3e0afd21001a75bdd');
        console.log(userOne);
    } catch (err) {
        console.log(err);
    }

    await db.serverConfig.close();
}

main();