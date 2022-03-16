import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';

import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { DELETE_USER } from '../utils/mutations';


function MyScores(props) {
    const { username: userParam }  = useParams();

    const [deleteUser] = useMutation(DELETE_USER);
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {}

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Route to="/myscores" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                 sign up or log in!
            </h4>
        );
    }
    
    const handleClick = async () => {
        try {
            await deleteUser({
                variables: { ID: user._id},
            });
            Auth.logout();
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div>
            <div className='pb-8 pl-12'>
                <Link to="/dashboard" className="underline">
                    ← Back to Dashboard
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-20 mx-12">
            <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50">
               
                <div>
                    {/* <h2 className="text-2xl text-white pb-5">{capitalize(userData.me.username)}'s Best Score</h2> */}
                    <h2 className="text-2xl text-white pb-5"> {userParam ? `${user.username}'s` : 'Your'} Best Score</h2>
                        { user.gameScore ? (
                            <>
                                <div>
                                    <h3 className="text-base text-white pb-5">{user.gameScore}</h3>
                                </div>
                            </>
                            ) : (
                            <p className="text-white pb-5">You haven't posted a game score yet. Go shave your first Yak!</p>
                        )} 
                </div>
            </div>

            <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50">
                <h2 className="text-2xl text-white">Done Shaving Yaks?</h2>
                <br></br>
                <button type="submit" onClick={handleClick} className= 'border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2 text-white'>Delete Account</button>
            </div>
        </div>
        </div>
        
       
    );
  }
  
  export default MyScores;