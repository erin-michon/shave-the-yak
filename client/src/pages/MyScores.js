import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import { capitalize } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function MyScores() {
    const { data: userData } = useQuery(QUERY_ME);
    const loggedIn = Auth.loggedIn();
    
    return (
        <div>
            <div>
                <Link to="/dashboard">
                    <h1>Back to Dashboard</h1>
                </Link>
            </div>
            <h2>USERNAME's Best Score</h2>
            {loggedIn && userData ? (
                <>
                    <div>
                        <h3>{userData.me.gameScore}</h3>
                    </div>
                </>
            ) : (
            <p>You haven't posted a game score yet!</p>
            )} 
        </div>
    );
  }
  
  export default MyScores;