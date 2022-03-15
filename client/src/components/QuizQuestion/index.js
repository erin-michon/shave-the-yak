import React from 'react';

const quizQuestions = [
    // LEVEL 1 QUESTIONS START
    /*
        ==================
        HTML, CSS, and git
        ==================
    */
    {
        question: 'Which of the following is NOT a description of what git is?',
        opt1: 'a tool to easily create new versions of code base',
        opt2: 'an IDE (integrated development environment) for code editing',
        opt3: 'tool that gives developers the ability store code in cloud using services like GitHub',
        opt4: 'option to easy to easily share code and collaborate with other developers',
        correctOpt: 'an IDE (integrated development environment) for code editing',
        points: 100,
        level: 1
    },
    {
        question: 'Which of the following tags does NOT typically go inside the <body> element in an HTML file?',
        opt1: '<header>',
        opt2: '<HEAD>',
        opt3: '<script>',
        opt4: '<nav>',
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
        question: 'Choose the common name used to declare variables as well as the name\'s type descriptor for a variable declared in a CSS file.',
        opt1: ':base | pseudo-class',
        opt2: ':global | global',
        opt3: ':root | pseudo-class',
        opt4: ':local | declarative',
        correctOpt: ':root | pseudo-class',
        points: 100,
        level: 1
    },
    {
        question: 'Which of the following is NOT something a pseudo-class can target?',
        opt1: 'history of navigation',
        opt2: 'name of a file',
        opt3: 'status of an element\'s content',
        opt4: 'position of the mouse cursor',
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
        question: 'Which of the following would NOT evaluate to "falsy"?',
        opt1: '0',
        opt2: 'NaN',
        opt3: '"0"',
        opt4: 'Null',
        correctOpt: '"0"',
        points: 100,
        level: 1
    },
    {
        question: 'Which of the following is NOT a method you can use on an array?',
        opt1: 'pluck()',
        opt2: 'isArray()',
        opt3: 'splice()',
        opt4: 'slice()',
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
        question: 'Which of the following statements is UNTRUE?',
        opt1: 'API stands for Application Programming Interface',
        opt2: 'APIs turn complex code into simpler syntax for easier usage',
        opt3: 'the DOM (Document Object Model) is a Web API',
        opt4: 'APIs are not widely used in the software industry',
        correctOpt: 'APIs are not widely used in the software industry',
        points: 100,
        level: 1
    },
    {
        question: 'Select the item that is NOT a good way to learn more about Web APIs.',
        opt1: 'Ask your peers',
        opt2: 'Read the documentation',
        opt3: 'Review previous code',
        opt4: 'Suffer in silence',
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
        question: 'Which of the following is NOT something a server is used for?',
        opt1: 'as the means of communication between the client and a database',
        opt2: 'to deliver content in response to a request from the client',
        opt3: 'provide an eye-catching front-end for users to interact with',
        opt4: 'customize a user\'s experience',
        correctOpt: 'provide an eye-catching front-end for users to interact with ',
        points: 100,
        level: 1
    },
    {
        question: 'Which of the following is NOT an example of how a server might use a session?',
        opt1: 'to allow a user to change the code of a page with developer tools',
        opt2: 'to change the visibility or interactivity options on a page for logged in users',
        opt3: 'to track how many times a user has visited the site without subscribing',
        opt4: 'to save a user\'s progress in a game or contents of a cart',
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
        question: 'Which of the following is NOT considered a popular Third-Party API?',
        opt1: 'Bootstrap',
        opt2: 'PartyPartyParty',
        opt3: 'jQuery',
        opt4: 'Moment.js',
        correctOpt: 'PartyPartyParty',
        points: 100,
        level: 1
    },
    {
        question: 'Which of the following is NOT something jQuery is known for?',
        opt1: 'finding and manipulating DOM elements',
        opt2: 'adding event listeners',
        opt3: 'providing longer syntax to accomplish the same things JavaScript does',
        opt4: 'allows for more general selectors instead of specific DOM paths to elements',
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
        question: 'Which item below is NOT something relevant to Node.js?',
        opt1: 'can be used to create interactive command-line applications',
        opt2: 'requires all applications to be modularized',
        opt3: 'was initially used as the runtime environment for V8 (Google Chrome\'s JavaScript engine)',
        opt4: 'can utilize Node packages and modules for applications',
        correctOpt: 'requires all applications to be modularized',
        points: 200,
        level: 2
    },
    {
        question: 'Which of the following is NOT a file utilized for Node.js package implementation?',
        opt1: 'node-package.manager',
        opt2: 'node_modules',
        opt3: 'package.json',
        opt4: 'package-lock.json',
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
        question: 'Which of the following is NOT one of the four main principles of Object-Oriented Programming?',
        opt1: 'Iteration',
        opt2: 'Encapsulation',
        opt3: 'Polymorphism',
        opt4: 'Abstraction',
        correctOpt: 'Iteration',
        points: 200,
        level: 2
    },
    {
        question: 'Which of the following is NOT something you would typically include when setting up an object?',
        opt1: 'Methods',
        opt2: 'Properties',
        opt3: 'Class',
        opt4: 'Version',
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
        question: 'Which of the following is UNTRUE in regards to Express.js?',
        opt1: 'it\'s a popular server framework for Node.js',
        opt2: 'it allows you to quickly set up API routes and HTTP request methods',
        opt3: 'it can accept requests and ideally sends back responses to them',
        opt4: 'Express.js routes can be tested with a program called AlwaysAwake',
        correctOpt: 'Express.js routes can be tested with a program called AlwaysAwake',
        points: 200,
        level: 2
    },
    {
        question: 'Which of the following is NOT a type of request you can use with Express.js?',
        opt1: 'POST',
        opt2: 'PUT',
        opt3: 'PLEASE',
        opt4: 'DELETE',
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
        question: 'Which of the following is NOT relevant to SQL?',
        opt1: 'SQL allows for the usage of plant.js files to plant fake data for testing',
        opt2: 'SQL commands can be run in the Command Line Interface',
        opt3: 'SQL is a relational database',
        opt4: 'SQL stands for Structured Query Language',
        correctOpt: 'SQL allows for the usage of plant.js files to plant fake data for testing',
        points: 200,
        level: 2
    },
    {
        question: 'Select the option that is NOT one of the four basic CRUD operations in regards to database data.',
        opt1: 'Delete',
        opt2: 'Read',
        opt3: 'Update',
        opt4: 'Change',
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
        question: 'Which of the following is NOT relevant to ORMs?',
        opt1: 'ORM stands for Object-Relational Mapping',
        opt2: 'jQuery is an ORM library',
        opt3: 'Sequelize is an ORM library',
        opt4: 'ORMs translate information from one source to another to facilitate conversations between sources',
        correctOpt: 'jQuery is an ORM library',
        points: 200,
        level: 2
    },
    {
        question: 'Which of the following is NOT an ability of the Sequelize ORM library?',
        opt1: 'Sequelize can use hooks to manipulate data before it is sent to the database',
        opt2: 'Sequelize methods cannot make exclusions when returning data from a database',
        opt3: 'Sequelize can use CRUD methods to make adjustments to data',
        opt4: 'Sequelize translates your code into database schema and queries using SQL',
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
        question: 'Which of the following does NOT apply to the Model-View-Controller (MVC) paradigm?',
        opt1: 'MVC follows a codebase structure based on separation of concerns',
        opt2: 'Benefits from modularization of code',
        opt3: 'The Controller portion involves working directly with SQL database data',
        opt4: 'Users interact with the Controller and provide it input to manipulate data or change the View',
        correctOpt: 'The Controller portion involves working directly with SQL database data',
        points: 200,
        level: 2
    },
    {
        question: 'Which of the following is NOT a benefit to applying the MVC paradigm to a codebase?',
        opt1: 'Making sure all codebase files have fewer than 100 lines of code',
        opt2: 'Following the Separation of Concerns coding principle',
        opt3: 'Making the codebase easier for others to read and maintain',
        opt4: 'Supports test-driven development',
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
        question: 'Which of the following is NOT considered one of the building blocks of JavaScript?',
        opt1: 'Call Stack',
        opt2: 'Memory Heap',
        opt3: 'Callback Queue',
        opt4: 'Function Pile',
        correctOpt: 'Function Pile',
        points: 300,
        level: 3
    },
    {
        question: 'Which of the following is NOT a good use of a regular expression?',
        opt1: 'To check if an input value is properly formatted',
        opt2: 'To search for a specific value',
        opt3: 'To send data to a server',
        opt4: 'To practice explaining computer science topics',
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
        question: 'Which of the following is NOT a benefit of a NoSQL database?',
        opt1: 'Evolving data structures',
        opt2: 'Consistent dataset size',
        opt3: 'Rapid prototyping of data for new projects',
        opt4: 'Increased scalability',
        correctOpt: 'Consistent dataset size',
        points: 300,
        level: 3
    },
    {
        question: 'Which of the following tools would NOT be useful to an application using NoSQL?',
        opt1: 'MongoDB',
        opt2: 'IndexedDB',
        opt3: 'Mongoose',
        opt4: 'Sequelize',
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
        question: 'Which of the following steps is NOT something you would do when creating a Progressive Web Application?',
        opt1: 'Maximize image files so they look better on smaller screens',
        opt2: 'Cache assets for offline functionality using service workers',
        opt3: 'Audit the application\'s performance measurements',
        opt4: 'Define a dependency graph to track all of a file\'s dependencies',
        correctOpt: 'Maximize image files so they look better on smaller screens',
        points: 300,
        level: 3
    },
    {
        question: 'Which of the following is NOT considered functionality of a service-worker?',
        opt1: 'Reducing response times by using cached items instead of items directly on the server',
        opt2: 'Hashing a user\'s password to protect it',
        opt3: 'Providing custom images or messages as responses to requests',
        opt4: 'Communicating to a user when they\'re offline',
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
        question: 'Which of the following is UNTRUE regarding React?',
        opt1: 'React is a JavaScript library useful for building user interfaces',
        opt2: 'React is part of the MERN stack',
        opt3: 'React is component-based',
        opt4: 'React is a CSS library used to change how a webpage looks',
        correctOpt: 'React is a CSS library used to change how a webpage looks',
        points: 300,
        level: 3
    },
    {
        question: 'Which of the following is NOT relevant to React components?',
        opt1: 'React components take in parameters called props',
        opt2: 'React components cannot be updated once initially rendered',
        opt3: 'React components can be customized',
        opt4: 'React components are like JavaScript functions',
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
        question: 'Which of the following items is UNTRUE in regards to the MERN stack?',
        opt1: 'It\'s made up of Mongoose, Express.js, React, and Node.js components',
        opt2: 'It\'s useful in creating Single-Page Applications',
        opt3: 'It involves both front and back-end development',
        opt4: 'It can be used with cloud-based databases',
        correctOpt: 'It\'s made up of Mongoose, Express.js, React, and Node.js components',
        points: 300,
        level: 3
    },
    {
        question: 'Which of the following is NOT a tool specifically used for a MERN application?',
        opt1: 'GraphQL',
        opt2: 'JSON Web Token',
        opt3: 'Google\'s Lighthouse auditor',
        opt4: 'React Router',
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
        question: 'Which of the following is UNTRUE regarding the Redux library?',
        opt1: 'It centralizes data for an app to make it predictable and easy to use',
        opt2: 'It changes State by creating new versions instead of direct manipulation',
        opt3: 'It follows the Single Source of Truth principle',
        opt4: 'It relies on reductions in application functionality and complexity to work',
        correctOpt: 'It relies on reductions in application functionality and complexity to work',
        points: 300,
        level: 3
    },
    {
        question: 'Which of the following is NOT considered one of the pieces of the Redux flow?',
        opt1: 'Reducers',
        opt2: 'Styles',
        opt3: 'Store',
        opt4: 'Actions',
        correctOpt: 'Styles',
        points: 300,
        level: 3
    }
    // LEVEL 3 QUESTIONS END
]

function QuizQuestion() {
    return (
        <div className="px-32 py-40 flex justify-center text-center">
            <div className="p-4 bg-cover bg-[url('./assets/images/yak-hair.jpg')]">
            <div>
                <h2>QUESTION</h2>
                <ul>
                    <li>Choice 1</li>
                    <li>Choice 2</li>
                    <li>Choice 3</li>
                    <li>Choice 4</li>
                </ul>
                <button>Next Question</button>
            </div>
            <div>
                <h2> Your Score</h2>
                <h3> Current Score Shown Here</h3>
                <button>Submit Score</button>
            </div>
            </div>
        </div>
    );
  }
  
  export default QuizQuestion;
