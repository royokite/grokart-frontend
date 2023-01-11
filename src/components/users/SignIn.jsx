import React, { useState } from 'react';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the username and password to the server for authentication
    // For example, you might use the fetch API to send a POST request to your server:
    // fetch('/api/sign-in', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       // Sign in succeeded, navigate to the homepage
    //       window.location.href = '/';
    //     } else {
    //       // Sign in failed, show an error message
    //       alert('Incorrect username or password.');
    //     }
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignInPage;