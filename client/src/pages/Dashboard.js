import React from 'react';
import LevelList from "../components/LevelList";
import LeaderBoard from "../components/LeaderBoard";

function Dashboard() {
    return (
        <div>
            <h2>Let's Play</h2>
            <div>
                <LevelList></LevelList>
            </div>
            <div>
                <LeaderBoard></LeaderBoard>
            </div>
        </div>
    );
  }
  
  export default Dashboard;