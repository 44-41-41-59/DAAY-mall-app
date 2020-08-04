import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { socket } from '../../../service/socket';
import { useSelector } from 'react-redux';
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  //   MDBAvatar,
  MDBBadge,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';
import '../index.css';
export default function CustomerServiceClient() {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const user = useSelector((state) => state.user);
  function handelKeyPress(e) {
    if (e.key === 'Enter') {
      socket.emit('message', room, message, socket.query._id);

      setMessage('');
    }
  }
  useEffect(() => {
    setTimeout(() => {
      socket.emit('userConnected');
      socket.on('wait', () => {
        console.log('Please wait, one of our agents will be with you soon.');
      });
      socket.on('joinded', (currentRoom) => {
        setRoom(currentRoom.room);
        console.log(room, currentRoom);
        setMessages([...messages, currentRoom]);
        console.log(messages);
      });
    }, 1300);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      socket.on('message', (message) => {
        setMessages([...messages, message]);
        console.log(messages);
      });
    }, 1300);
  }, [messages]);
  return (
    <div style={{ margin: '2% 5%', maxHeight: '50%' }}>
      <MDBCard className="grey lighten-3 chat-room">
      {room !== '' && (
                  // <MDBBtn
                  //   style={{ margin: '0 0 !important',maxWidth:'50px' }}
                  //   color="info"
                  //   rounded
                  //   size="sm"
                  //   className="float-right mt-4 leavebutton"
                  //   onClick={() => {
                  //     socket.emit('userDisconnected', { room });
                  //     history.push('/');
                  //   }}
                  // >
                    <MDBIcon onClick={() => {
                          socket.emit('userDisconnected', { room });
                          history.push('/');
                        }}
                      style={{fontSize:'25px',color:'#5ab6e5',margin:'5px 0 0 15px'}} icon="arrow-alt-circle-left" />
                  // </MDBBtn>
                )}
        <MDBCardBody>
          <MDBRow className="px-lg-2 px-2">
            <MDBCol md="6" xl="8" className="pl-md-3 px-lg-auto mt-2 mt-md-0">
              <MDBRow>
                <MDBListGroup className="list-unstyled pl-3 chat2 ">
                  <div
                    className="scrollcontanir"
                    style={{
                      overflow: 'scroll',
                      maxHeight: '350px',
                      minHeight: '350px',
                    }}
                  >
                    {room === '' &&
                      Test(
                        {
                          message: 'Please wait will be with u soon',
                          username: 'Daay-mall team',
                        },
                        user
                      )}
                    {messages.map((message) => (
                      <ChatMessage
                        key={message.author + message.when}
                        message={{ ...message, user }}
                      />
                    ))}
                  </div>
                </MDBListGroup>
                {/* {room !== '' && (
                  <MDBBtn
                    style={{ marginLeft: '40px' }}
                    color="info"
                    rounded
                    size="sm"
                    className="float-right mt-4"
                    onClick={() => {
                      socket.emit('userDisconnected', { room });
                      history.push('/');
                    }}
                  >
                    Leave
                  </MDBBtn>
                )} */}
                <div className="form-group basic-textarea">
                  <div style={{ display: 'flex' }}>
                    <textarea
                      className="form-control pl-2 my-0"
                      id="exampleFormControlTextarea2"
                      rows="3"
                      value={message}
                      placeholder="Type your message here..."
                      onKeyPress={(e) => handelKeyPress(e)}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ minWidth: '80vw', margin: '0 17px' }}
                    />
                    <MDBBtn
                      color="info"
                      rounded
                      size="sm"
                      style={{paddingLeft:'15px'}}
                      className="float-right mt-4 rudios"
                      onClick={() => handelKeyPress({ key: 'Enter' })}
                    >
                      <MDBIcon style={{fontSize:'20px'}} icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </div>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
const Test = (message, user) => (
  <>
    {' '}
    <ChatMessage key="test" message={{ ...message, user }} />
  </>
);

const ChatMessage = ({ message: { username, avatar, message, user, _id } }) => (
  <li
    className={`${
      _id === user._id ? 'chat-message' : ''
    }  d-flex justify-content-between mb-4`}
  >
    {console.log(message, _id, user._id)}
    {/* <MDBAvatar
      tag="img"
      src={avatar}
      alt="avatar"
      circle
      className="mx-2 z-depth-1"
    /> */}
    <MDBCard>
      {/* <img
        className="receiverimg"
        src="https://miro.medium.com/proxy/1*8mpWApzQD5gZZlnYYUkbcA.png"
      ></img> */}
      <MDBCardBody>
        <div>
          <strong className="primary-font">{username}</strong>
          <small className="pull-right text-muted">
            {/* <i className="far fa-clock" /> {when} */}
          </small>
        </div>
        <hr />
        <p className="mb-0">{message}</p>
      </MDBCardBody>
    </MDBCard>
  </li>
);
/**
 *       {room === '' && (
        <div className="receiver">
          <div className="receiverl">
            <img
              className="receiverimg"
              src="https://miro.medium.com/proxy/1*8mpWApzQD5gZZlnYYUkbcA.png"
            ></img>

            <p>Please wait will be with u soon</p>
          </div>
          <p className="p">Daay-mall team</p>
        </div>
      )}
      {messages.map((message) => {
        let tt = message._id === user._id;
        console.log(tt, message._id, user._id);
        return (
          <div className={tt ? 'sender' : 'receiver'}>
            <div className={tt ? 'senderl' : 'receiverl'}>
              {!tt && <img className="receiverimg" src={message.avatar}></img>}{' '}
              <p>{message.message}</p>
            </div>
            <p className="p">{message.username}</p>
          </div>
        );
      })}
      <input
        type="text"
        onKeyPress={(e) =>
          e.key === 'Enter'
            ? socket.emit('message', room, message, socket.query._id)
            : null
        }
        onChange={(e) => setMessage(e.target.value)}
      ></input>

      {room !== '' && (
        <button onClick={() => socket.emit('userDisconnected', { room })}>
          Leave
        </button>
      )}
      <div>HELLO LADIES I'm the client</div>
 */
