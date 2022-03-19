import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex justify-center h-screen items-center text-center text-white">
      <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-center">
        <h1 className="text-center text-3xl text-white">
          It is time to Start!
        </h1>
        <p className="text-center text-xl text-white">
          Are you looking for something to distract you from what you really
          should be doing?
        </p>
        <div className='mt-6'>
        <Link to="/signup" className="white-underline text-3xl">
          Click here to get started.
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
