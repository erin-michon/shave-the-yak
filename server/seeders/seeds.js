const { faker }  = require('@faker-js/faker');

const db = require('../config/connection');
const { User, GameSession } = require('../models');

db.once('open', async () => {
    await GameSession.deleteMany({});
    await User.deleteMany({});
    
    // create user data
    const userData = [];

    for (let i = 0; i < 10; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);

    let gameSession = []

    for (let i = 0; i < 100; i += 1) {
        const date = faker.date.recent();
        const score = faker.datatype.number();

        const randomUserIndex = faker.helpers.randomize(userData);
        const { username, _id: userId } = randomUserIndex;

        const createdGameSession = await GameSession.create({ date, score, username});

        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { gameSession: createdGameSession._id} }
        );

        gameSession.push(createdGameSession);
    }

    console.log('all done!');
    process.exit(0);

});