import React from 'react';
import LevelList from '../components/LevelList';

function Dashboard() {
  return (
    <div className="flex text-center justify-center text-white">
      <div>
        <h1 className="pb-8 text-2xl tracking-wide text-bold font-medium text-black">
          Do you have what it takes?
        </h1>
        <div>
          <LevelList></LevelList>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
