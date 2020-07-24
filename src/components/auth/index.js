import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import Login from './login';
import SignUp from './signup';

function Auth(props) {
  const [body, setBody] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    props.signUpRemoteUser(body.username, body.email, body.password);
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();
    props.loginRemoteUser(body.email, body.password);
  }

  function handelChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }
  return (
    <>
      <SignUp
        handelChange={handelChange}
        body={body}
        handleSubmit={handleSubmit}
      />
      <Login
        handelChange={handelChange}
        body={body}
        handleSubmitLogin={handleSubmitLogin}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return { user: state.user };
};
const actionCreater = (dispatch) => ({
  loginRemoteUser: (email, password) =>
    dispatch(actions.loginRemoteUser(email, password)),
  signUpRemoteUser: (username, email, password) =>
    dispatch(actions.signUpRemoteUser(username, email, password)),
});
export default connect(mapStateToProps, actionCreater)(Auth);
