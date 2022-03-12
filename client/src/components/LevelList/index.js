import React from 'react';
import { Link } from 'react-router-dom';

function LevelList() {
    
    return (
        <div>
            <div>
                <h3>LEVEL 1</h3>
                <img></img>
                <p>Foundation: HTML, CSS, Git, JavaScript, Web and Third Party APIs</p>
             </div>
            <div>
                <h3>LEVEL 2</h3>
                <img></img>
                <p>Technical: Node.js, OOP, Express.js, SQL, ORM, MVC</p>
            </div>
            <div>
                <h3>LEVEL 3</h3>
                <img></img>
                <p>Performance: Computer Science, NoSQL, PWAs, React, MERN, State</p>
            </div>
            <div>
            <Link to="/quiz">
                <h1>Let's Get Shaving...</h1>
            </Link>
            </div>
        </div>
    );
}
  
export default LevelList;

