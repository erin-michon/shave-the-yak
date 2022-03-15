export const QuizData = [
    // LEVEL 1 QUESTIONS START
    /*
        ==================
        HTML, CSS, and git
        ==================
    */
    {
        id: 0,
        question: 'Which of the following is NOT a description of what git is?',
        options: [
        'a tool to easily create new versions of code base', 
        'an IDE (integrated development environment) for code editing',
        'tool that gives developers the ability store code in cloud using services like GitHub',
        'option to easy to easily share code and collaborate with other developers'],
        correctOpt: 'an IDE (integrated development environment) for code editing',
        points: 100,
        level: 1
    },
    {
        id: 1,
        question: 'Which of the following tags does NOT typically go inside the <body> element in an HTML file?',
        options: [
        '<header>',
        '<HEAD>',
        '<script>',
        '<nav>'],
        correctOpt: '<HEAD>',
        points: 100,
        level: 1
    },
    /*
        ==================
        Advanced CSS
        ==================
    */
    {
        id: 2,
        question: 'Choose the common name used to declare variables as well as the name\'s type descriptor for a variable declared in a CSS file.',
        options: [
        ':base | pseudo-class',
        ':global | global',
        ':root | pseudo-class',
        ':local | declarative'],
        correctOpt: ':root | pseudo-class',
        points: 100,
        level: 1
    },
    {
        id: 3,
        question: 'Which of the following is NOT something a pseudo-class can target?',
        options: [
        'history of navigation',
        'name of a file',
        'status of an element\'s content',
        'position of the mouse cursor'],
        correctOpt: 'name of a file',
        points: 100,
        level: 1
    },
    /*
        ==================
        JavaScript
        ==================
    */
    {
        id: 4,
        question: 'Which of the following would NOT evaluate to "falsy"?',
        options: [
        '0',
        'NaN',
        '"0"',
        'Null'],
        correctOpt: '"0"',
        points: 100,
        level: 1
    },
    {
        id: 5,
        question: 'Which of the following is NOT a method you can use on an array?',
        options: [
        'pluck()',
        'isArray()',
        'splice()',
        'slice()'],
        correctOpt: 'pluck()',
        points: 100,
        level: 1
    },
    /*
        ==================
        Web APIs
        ==================
    */
    {
        id: 6,
        question: 'Which of the following statements is UNTRUE?',
        options: [
        'API stands for Application Programming Interface',
        'APIs turn complex code into simpler syntax for easier usage',
        'the DOM (Document Object Model) is a Web API',
        'APIs are not widely used in the software industry'],
        correctOpt: 'APIs are not widely used in the software industry',
        points: 100,
        level: 1
    },
    {
        id: 7,
        question: 'Select the item that is NOT a good way to learn more about Web APIs.',
        options: [
        'Ask your peers',
        'Read the documentation',
        'Review previous code',
        'Suffer in silence'],
        correctOpt: 'Suffer in silence',
        points: 100,
        level: 1
    },
    /*
        ==================
        Server-side APIs
        ==================
    */
    {
        id: 8,
        question: 'Which of the following is NOT something a server is used for?',
        options: [
        'as the means of communication between the client and a database',
        'to deliver content in response to a request from the client',
        'provide an eye-catching front-end for users to interact with',
        'customize a user\'s experience'],
        correctOpt: 'provide an eye-catching front-end for users to interact with ',
        points: 100,
        level: 1
    },
    {
        id: 9,
        question: 'Which of the following is NOT an example of how a server might use a session?',
        options: [
        'to allow a user to change the code of a page with developer tools',
        'to change the visibility or interactivity options on a page for logged in users',
        'to track how many times a user has visited the site without subscribing',
        'to save a user\'s progress in a game or contents of a cart'],
        correctOpt: 'to allow a user to change the code of a page with developer tools',
        points: 100,
        level: 1
    },
    /*
        ==================
        Third-Party APIs
        ==================
    */
    {
        id: 10,
        question: 'Which of the following is NOT considered a popular Third-Party API?',
        options: [
        'Bootstrap',
        'PartyPartyParty',
        'jQuery',
        'Moment.js'],
        correctOpt: 'PartyPartyParty',
        points: 100,
        level: 1
    },
    {
        id: 11,
        question: 'Which of the following is NOT something jQuery is known for?',
        options: [
        'finding and manipulating DOM elements',
        'adding event listeners',
        'providing longer syntax to accomplish the same things JavaScript does',
        'allows for more general selectors instead of specific DOM paths to elements'],
        correctOpt: 'providing longer syntax to accomplish the same things JavaScript does',
        points: 100,
        level: 1
    },
    // LEVEL 1 QUESTIONS END

    // LEVEL 2 QUESTIONS START
    /*
        ==================
        Node.js
        ==================
    */
    {
        id: 12,
        question: 'Which item below is NOT something relevant to Node.js?',
        options: [
        'can be used to create interactive command-line applications',
        'requires all applications to be modularized',
        'was initially used as the runtime environment for V8 (Google Chrome\'s JavaScript engine)',
        'can utilize Node packages and modules for applications'],
        correctOpt: 'requires all applications to be modularized',
        points: 200,
        level: 2
    },
    {
        id: 13,
        question: 'Which of the following is NOT a file utilized for Node.js package implementation?',
        options: [
        'node-package.manager',
        'node_modules',
        'package.json',
        'package-lock.json'],
        correctOpt: 'node-package.manager',
        points: 200,
        level: 2
    },
    /*
        ==================
        OOP
        ==================
    */
    {
        id: 14,
        question: 'Which of the following is NOT one of the four main principles of Object-Oriented Programming?',
        options: [
        'Iteration',
        'Encapsulation',
        'Polymorphism',
        'Abstraction'],
        correctOpt: 'Iteration',
        points: 200,
        level: 2
    },
    {
        id: 15,
        question: 'Which of the following is NOT something you would typically include when setting up an object?',
        options: [
        'Methods',
        'Properties',
        'Class',
        'Version'],
        correctOpt: 'Version',
        points: 200,
        level: 2
    },
    /*
        ==================
        Express.js
        ==================
    */
    {
        id: 16,
        question: 'Which of the following is UNTRUE in regards to Express.js?',
        options: [
        'it\'s a popular server framework for Node.js',
        'it allows you to quickly set up API routes and HTTP request methods',
        'it can accept requests and ideally sends back responses to them',
        'Express.js routes can be tested with a program called AlwaysAwake'],
        correctOpt: 'Express.js routes can be tested with a program called AlwaysAwake',
        points: 200,
        level: 2
    },
    {
        id: 17,
        question: 'Which of the following is NOT a type of request you can use with Express.js?',
        options: [
        'POST',
        'PUT',
        'PLEASE',
        'DELETE'],
        correctOpt: 'PLEASE',
        points: 200,
        level: 2
    },
    /*
        ==================
        SQL
        ==================
    */
    {
        id: 18,
        question: 'Which of the following is NOT relevant to SQL?',
        options: [
        'SQL allows for the usage of plant.js files to plant fake data for testing',
        'SQL commands can be run in the Command Line Interface',
        'SQL is a relational database',
        'SQL stands for Structured Query Language'],
        correctOpt: 'SQL allows for the usage of plant.js files to plant fake data for testing',
        points: 200,
        level: 2
    },
    {
        id: 19,
        question: 'Select the option that is NOT one of the four basic CRUD operations in regards to database data.',
        options: [
        'Delete',
        'Read',
        'Update',
        'Change'],
        correctOpt: 'Change',
        points: 200,
        level: 2
    },
    /*
        ==================
        ORM
        ==================
    */
    {
        id: 20,
        question: 'Which of the following is NOT relevant to ORMs?',
        options: [
        'ORM stands for Object-Relational Mapping',
        'jQuery is an ORM library',
        'Sequelize is an ORM library',
        'ORMs translate information from one source to another to facilitate conversations between sources'],
        correctOpt: 'jQuery is an ORM library',
        points: 200,
        level: 2
    },
    {
        id: 21,
        question: 'Which of the following is NOT an ability of the Sequelize ORM library?',
        options: [
        'Sequelize can use hooks to manipulate data before it is sent to the database',
        'Sequelize methods cannot make exclusions when returning data from a database',
        'Sequelize can use CRUD methods to make adjustments to data',
        'Sequelize translates your code into database schema and queries using SQL'],
        correctOpt: 'Sequelize methods cannot make exclusions when returning data from a database',
        points: 200,
        level: 2
    },
    /*
        ==================
        MVC
        ==================
    */
    {
        id: 22,
        question: 'Which of the following does NOT apply to the Model-View-Controller (MVC) paradigm?',
        options: [
        'MVC follows a codebase structure based on separation of concerns',
        'Benefits from modularization of code',
        'The Controller portion involves working directly with SQL database data',
        'Users interact with the Controller and provide it input to manipulate data or change the View'],
        correctOpt: 'The Controller portion involves working directly with SQL database data',
        points: 200,
        level: 2
    },
    {
        id: 23,
        question: 'Which of the following is NOT a benefit to applying the MVC paradigm to a codebase?',
        options: [
        'Making sure all codebase files have fewer than 100 lines of code',
        'Following the Separation of Concerns coding principle',
        'Making the codebase easier for others to read and maintain',
        'Supports test-driven development'],
        correctOpt: 'Making sure all codebase files have fewer than 100 lines of code',
        points: 200,
        level: 2
    },
    // LEVEL 2 QUESTIONS END

    // LEVEL 3 QUESTIONS START
    /*
        ==================
        Computer Science
        ==================
    */
    {
        id: 24,
        question: 'Which of the following is NOT considered one of the building blocks of JavaScript?',
        options: [
        'Call Stack',
        'Memory Heap',
        'Callback Queue',
        'Function Pile'],
        correctOpt: 'Function Pile',
        points: 300,
        level: 3
    },
    {
        id: 25,
        question: 'Which of the following is NOT a good use of a regular expression?',
        options: [
        'To check if an input value is properly formatted',
        'To search for a specific value',
        'To send data to a server',
        'To practice explaining computer science topics'],
        correctOpt: 'To send data to a server',
        points: 300,
        level: 3
    },
    /*
        ==================
        NoSQL
        ==================
    */
    {
        id: 26,
        question: 'Which of the following is NOT a benefit of a NoSQL database?',
        options: [
        'Evolving data structures',
        'Consistent dataset size',
        'Rapid prototyping of data for new projects',
        'Increased scalability'],
        correctOpt: 'Consistent dataset size',
        points: 300,
        level: 3
    },
    {
        id: 27,
        question: 'Which of the following tools would NOT be useful to an application using NoSQL?',
        options: [
        'MongoDB',
        'IndexedDB',
        'Mongoose',
        'Sequelize'],
        correctOpt: 'Sequelize',
        points: 300,
        level: 3
    },
    /*
        ==================
        PWAs
        ==================
    */
    {
        id: 28,
        question: 'Which of the following steps is NOT something you would do when creating a Progressive Web Application?',
        options: [
        'Maximize image files so they look better on smaller screens',
        'Cache assets for offline functionality using service workers',
        'Audit the application\'s performance measurements',
        'Define a dependency graph to track all of a file\'s dependencies'],
        correctOpt: 'Maximize image files so they look better on smaller screens',
        points: 300,
        level: 3
    },
    {
        id: 29,
        question: 'Which of the following is NOT considered functionality of a service-worker?',
        options: [
        'Reducing response times by using cached items instead of items directly on the server',
        'Hashing a user\'s password to protect it',
        'Providing custom images or messages as responses to requests',
        'Communicating to a user when they\'re offline'],
        correctOpt: 'Hashing a user\'s password to protect it',
        points: 300,
        level: 3
    },
    /*
        ==================
        React
        ==================
    */
    {
        id: 30,
        question: 'Which of the following is UNTRUE regarding React?',
        options: [
        'React is a JavaScript library useful for building user interfaces',
        'React is part of the MERN stack',
        'React is component-based',
        'React is a CSS library used to change how a webpage looks'],
        correctOpt: 'React is a CSS library used to change how a webpage looks',
        points: 300,
        level: 3
    },
    {
        id: 31,
        question: 'Which of the following is NOT relevant to React components?',
        options: [
        'React components take in parameters called props',
        'React components cannot be updated once initially rendered',
        'React components can be customized',
        'React components are like JavaScript functions'],
        correctOpt: 'React components cannot be updated once initially rendered',
        points: 300,
        level: 3
    },
    /*
        ==================
        MERN
        ==================
    */
    {
        id: 32,
        question: 'Which of the following items is UNTRUE in regards to the MERN stack?',
        options: [
        'It\'s made up of Mongoose, Express.js, React, and Node.js components',
        'It\'s useful in creating Single-Page Applications',
        'It involves both front and back-end development',
        'It can be used with cloud-based databases'],
        correctOpt: 'It\'s made up of Mongoose, Express.js, React, and Node.js components',
        points: 300,
        level: 3
    },
    {
        id: 33,
        question: 'Which of the following is NOT a tool specifically used for a MERN application?',
        options: [
        'GraphQL',
        'JSON Web Token',
        'Google\'s Lighthouse auditor',
        'React Router'],
        correctOpt: 'Google\'s Lighthouse auditor',
        points: 300,
        level: 3
    },
    /*
        ==================
        State
        ==================
    */
    {
        id: 34,
        question: 'Which of the following is UNTRUE regarding the Redux library?',
        options: [
        'It centralizes data for an app to make it predictable and easy to use',
        'It changes State by creating new versions instead of direct manipulation',
        'It follows the Single Source of Truth principle',
        'It relies on reductions in application functionality and complexity to work'],
        correctOpt: 'It relies on reductions in application functionality and complexity to work',
        points: 300,
        level: 3
    },
    {
        id: 35,
        question: 'Which of the following is NOT considered one of the pieces of the Redux flow?',
        options: [
        'Reducers',
        'Styles',
        'Store',
        'Actions'],
        correctOpt: 'Styles',
        points: 300,
        level: 3
    }
    // LEVEL 3 QUESTIONS END
]