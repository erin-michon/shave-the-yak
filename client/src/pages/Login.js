import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  return (

    <div>
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login Below</h2>

      <form>

        <div>
          <label htmlFor="email">Email address:</label>
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
  );
};

export default Login;
