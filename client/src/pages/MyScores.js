import React from 'react';
import { Link } from 'react-router-dom';

function MyScores() {
    return (
        <div>
            <div>
                <Link to="/dashboard">
                    <h1>Back to Dashboard</h1>
                </Link>
            </div>
 
            <h2>USERNAME's Best Scores</h2>
            <div>
                <ul>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                    <li> Score | Level | Date </li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default MyScores;