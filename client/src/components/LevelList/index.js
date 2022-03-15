import React from 'react';
import { Link } from 'react-router-dom';

function LevelList() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mx-4">
        <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-center">
          <h3 className='pb-8'>LEVEL 1</h3>
          <img></img>
          <p>
            Foundation: HTML, CSS, Git, JavaScript, Web and Third Party APIs
          </p>
        </div>
        <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-center">
          <h3 className='pb-8'>LEVEL 2</h3>
          <img></img>
          <p>Technical: Node.js, OOP, Express.js, SQL, ORM, MVC</p>
        </div>
        <div className="my-25 p-4 border rounded border-4 bg-slate-600 bg-opacity-50 justify-center">
          <h3 className='pb-8'>LEVEL 3</h3>
          <img></img>
          <p>Performance: Computer Science, NoSQL, PWAs, React, MERN, State</p>
        </div>
      </div>
      <div className='mt-28'>
      <Link to="/quiz" className="border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2">
        🪒-Let's Get Shaving...
      </Link>
      </div>
    </div>
  );
}

export default LevelList;
