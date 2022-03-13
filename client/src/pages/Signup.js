import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
   <div className='flex justify-center'> 
    <div className='p-4 border rounded border-4 bg-slate-600 bg-opacity-50 place-content-center'>
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;