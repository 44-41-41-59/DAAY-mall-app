import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../../store/actions/auth';
import Login from './login';
import SignUp from './signup';
import Button from 'react-bootstrap/Button';
import './auth.css';
import { useHistory, Redirect } from 'react-router-dom';

function Auth(props) {
  const logedin = useSelector((state) => state.user.logedin);
  const history = useHistory();
  const [body, setBody] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    props.signUpRemoteUser(body.username, body.email, body.password, history);
  }
  async function handleSubmitLogin(e) {
    e.preventDefault();
    // history.push('/');
    props.loginRemoteUser(body.email, body.password, history);
  }

  function handelChange(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  return (
    <>
      {logedin && <Redirect to="/" />}
      <div id="authcontainer">
        <Login
          handelChange={handelChange}
          body={body}
          handleSubmitLogin={handleSubmitLogin}
          fetch={props.fetch}
        />
        <SignUp
          handelChange={handelChange}
          body={body}
          handleSubmit={handleSubmit}
          fetch={props.fetch}
        />
      </div>
      <hr></hr>
      <div  >
        <h3 id="or">OR <br/> Sign with</h3>
        {/* <hr></hr> */}
        <div id="authbuttons">
          <Button id='loginbuttonfacebook' className="authbuttons" variant="primary">
          FACEBOOK
          </Button>{' '}
          <Button id='authbuttonsgoogle' className="authbuttons" variant="danger">
          GOOGLE
          </Button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return { user: state.user, fetch: state.fetching };
};
const actionCreater = (dispatch) => ({
  loginRemoteUser: (email, password, history) =>
    dispatch(actions.loginRemoteUser(email, password, history)),
  signUpRemoteUser: (username, email, password, history) =>
    dispatch(actions.signUpRemoteUser(username, email, password, history)),
});
export default connect(mapStateToProps, actionCreater)(Auth);
