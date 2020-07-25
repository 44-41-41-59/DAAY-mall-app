import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import Login from './login';
import SignUp from './signup';
import Button from 'react-bootstrap/Button';
import './auth.css';

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
      <div id="authcontainer">
        <Login
          handelChange={handelChange}
          body={body}
          handleSubmitLogin={handleSubmitLogin}
        />
        <SignUp
          handelChange={handelChange}
          body={body}
          handleSubmit={handleSubmit}
        />
      </div>
      <hr></hr>
      <div id="authbuttons">
        <h3 id="or">OR</h3>
        <hr></hr>
        <Button className="authbuttons" variant="primary">
          FACEBOOK
        </Button>{' '}
        <Button className="authbuttons" variant="danger">
          GOOGLE
        </Button>
      </div>
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
