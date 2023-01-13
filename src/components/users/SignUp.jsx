import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      return;
    }

    // Perform sign-up logic, e.g. send a request to the server with the username and password
    // and handle the response
    SignUp(username,password)
    .then( response => {
        // handle success
    }).catch(error => {
        setError('Error during sign up')
    });
  }

  return (
    <section className="signin-container">
    <img
          src="./images/james9876_beautiful_login_page_for_an_online_grocery_website_wh_c635d628-3c57-436e-82f6-6c844b467da4 (1) (1).png"
          className="card-img"
          alt="background"
          height={1000}

        />
    <form onSubmit={handleSubmit} className="form-group
    position-absolute top-50 start-50 translate-middle"
    >
      <img
          src="./images/gro-kart-logo.png"
          className="card-img mb-5 w-50 position-relative start-50 translate-middle top-0"
          alt="banner"
          height={100}
          width={50}
          />
      <label>
        <input className='form-control mb-5 text-warning form-control-lg mx-auto d-block position-absolute start-50 mt-5 translate-middle'
          type="text"
         placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input className='form-control mb-5 text-warning form-control-lg mt-5
        '
        placeholder='Password'
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input className='form-control mb-5 text-warning pl-3 form-control-lg
        '
        placeholder='Confirm password'
          type="password"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className="btn btn-primary btn-lg position-absolute start-50 translate-middle mt-5 text-warning"
      type="submit">Sign Up</button>
    </form>
    <a href="/login" className="text-warning position-absolute start-50 translate-middle mt-5">Already have an account? Sign in here!</a>
    </section>
  );
}

export default SignUp;