import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center text-white">
      <div className="p-4 border rounded border-4 bg-slate-600 bg-opacity-50 place-content-center">
        <Link to="/signup" className="underline">
          ← Go to Signup
        </Link>
        <h2 className="mt-4">Login Below</h2>
        <form>
          <div className="mt-4">
            <label htmlFor="email">Email address:</label>
            <input
              className="placeholder-gray-900 bg-slate-600 bg-opacity-50 border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="pwd">Password:</label>
            <input
              className="placeholder-gray-900 bg-slate-600 bg-opacity-50 border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className='border-transparent rounded border-4 bg-slate-600 hover:bg-slate-800 py-1 px-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
