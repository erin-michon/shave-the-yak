import React from 'react';
import LevelList from '../components/LevelList';

function Dashboard() {
  return (
    <div className="flex justify-center text-center text-white">
      <div>
        <h1 className='pb-8 text-lg tracking-wide text-bold font-medium text-black'>Let's Play!</h1>
        <div>
          <LevelList></LevelList>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
