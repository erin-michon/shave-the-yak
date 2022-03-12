import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className=''>
      <h1>WELCOME TO SHAVE THE YAK!</h1>
      <h2>It is time to start.</h2>
      <Link to="/dashboard">
          <h1>Click here to get started.</h1>
      </Link>
    </div>
  );
}

export default Home;
