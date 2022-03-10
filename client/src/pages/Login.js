import React from 'react';

function Login() {
  return (
    <div>
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
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
        {error ? (
          <div>
            <p>The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
