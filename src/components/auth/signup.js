import React from 'react';

function Signup(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        username:
        <input
          name="username"
          type="text"
          value={props.body.username}
          onChange={props.handelChange}
        />
      </label>
      <label>
        email:
        <input
          name="email"
          type="text"
          value={props.body.email}
          onChange={props.handelChange}
        />
      </label>
      <label>
        password:
        <input
          name="password"
          type="text"
          value={props.body.password}
          onChange={props.handelChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Signup;
