import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='px-32 py-40 flex justify-center'>
      <div className='my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-center'>
      <h1 className='text-center text-3xl text-white'>It is time to Start!</h1>
      <p className='text-center text-lg text-white'>Are you looking for something to distract you from what you really should be doing?</p>
      <Link to="/dashboard">
          <h1 className='text-center text-white'>Click here to shave the yak.</h1>
      </Link>
      </div>
    </div>
  );
}

export default Home;
