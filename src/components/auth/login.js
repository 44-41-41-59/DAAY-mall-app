import React from 'react';

function Login(props) {
  return (
    <form onSubmit={props.handleSubmitLogin}>
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

export default Login;
