
// const db = require('../config/connection');
// const { User, GameSession } = require('../models');

// db.once('open', async () => {

//     await GameSession.deleteMany();

//     const gameSessions = await GameSession.insertMany([
//         {
//             date: "2022-03-13T20:12:23.616Z",
//             score: 300,
//         },
//         {
//             date: "2022-03-11T20:12:23.616Z",
//             score: 500,
//         },
//         {
//             date: "2022-03-08T20:12:23.616Z",
//             score: 1000,
//         },
//         {
//             date: "2022-03-13T08:20:38.613Z",
//             score: 400,
//         },
//         {
//             date: "2022-03-13T08:20:38.613Z",
//             score: 600,
//         },
//         {
//             date: "2022-03-13T08:20:38.613Z",
//             score: 6000,
//         },
//     ])

//     console.log('game sessions seeded')
//     console.log(gameSessions);

//     await User.deleteMany();

//     const users = await User.insertMany([
//         {
//             username: "georgew",
//             email: "georgewashington@test.com",
//             password: "password1234",
//             gameSession: [gameSessions[0]._id,gameSessions[1]._id,gameSessions[2]._id]
//         },
//         {
//             username: "johna",
//             email: "johnadams@test.com",
//             password: "password1234",
//             gameSession: [gameSessions[3]._id,gameSessions[4]._id,gameSessions[5]._id]

//         }
//     ]);

//     console.log('users seeded')
//     console.log(users)

//     process.exit();

// })


const { faker }  = require('@faker-js/faker');

const db = require('../config/connection');
const { User, GameSession } = require('../models');
const { create } = require('../models/GameSession');

db.once('open', async () => {
    await GameSession.deleteMany({});
    await User.deleteMany({});
    
    // create user data
    let userData = [];

    for (let i = 0; i < 4; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);
    console.log(createdUsers);

    let gameSession = []

    for (let i = 0; i < 10; i += 1) {
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
    console.log(gameSession)
    console.log('all done!');
    process.exit(0);

});

