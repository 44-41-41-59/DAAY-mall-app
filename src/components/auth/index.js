import React, { useState } from 'react';
import axios from 'axios';
import base64 from 'base-64';
// require('dotenv').config();

function Auth() {
  const [body, setBody] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const record = await axios.post('http://localhost:3001/auth', body, {
      headers,
    });
    console.log(record);
    // console.log(user, password);
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();
    console.log('jlkfjdsl', body);
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      authorization: `Basic ${base64.encode(`${body.email}:${body.password}`)}`,
    };
    const record = await axios.get('http://localhost:3001/auth', {
      headers,
    });
    console.log(record);
    // console.log(user, password);
  }

  function handelChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
    console.log(body);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input
            name="username"
            type="text"
            value={body.username}
            onChange={handelChange}
          />
        </label>
        <label>
          email:
          <input
            name="email"
            type="text"
            value={body.email}
            onChange={handelChange}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            type="text"
            value={body.password}
            onChange={handelChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={handleSubmitLogin}>
        <label>
          email:
          <input
            name="email"
            type="text"
            value={body.email}
            onChange={handelChange}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            type="text"
            value={body.password}
            onChange={handelChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Auth;
