import React from 'react';

function Scorecard() {
    return (
        <div>
            <div>
                <h2>Your Score</h2>
                <h3>#########</h3>
            </div>
            <button className='mt-5 border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2'>Submit</button>
        </div>
    );
  }
  
  export default Scorecard;