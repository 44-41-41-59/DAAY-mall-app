import React, { useEffect, useState } from 'react';
import { socket } from '../../../service/socket';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MDBContainer, MDBModal, MDBModalBody } from 'mdbreact';
import {
  getAgents,
  addAgents,
  deleteAgents,
  agentMessage,
  resetToRespond,
} from '../../../store/actions/agent';
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
import './index.css';
export default function CustomerServiceAdmin() {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [agentId, setAgentId] = useState('');
  const [next, setNext] = useState(false);
  const user = useSelector((state) => state.user);
  const agent = useSelector((state) => state.agent);
  const dispatch = useDispatch();
  // {user.leged}

  setTimeout(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
    socket.on('agent message', ({ _id, avatar, username, message }) => {
      console.log('agent message');
      setMessages(messages);
      let toRespond = agentId === _id;
      dispatch(agentMessage({ _id, avatar, username, message, toRespond }));
    });
    socket.on('me agent message', ({ id, _id, avatar, username, message }) => {
      console.log('mme agent messages');
      setMessages(messages);
      let toRespond = agentId === id;
      dispatch(agentMessage({ id, _id, avatar, username, message, toRespond }));
    });
  }, 2000);
  function handelAdminClick(id) {
    setAgentId(id);
    dispatch(resetToRespond(id));
  }

  function handelKeyPress(e) {
    if (e.key === 'Enter') {
      if (agentId === '') {
        socket.emit('message', socket.query._id, message, socket.query._id);
      } else {
        socket.emit('agent message', agentId, message);
      }

      setMessage('');
    }
  }
  useEffect(() => {
    setTimeout(() => {
      socket.emit('admin');
    }, 2000);
    return;
  }, []);
  useEffect(() => {
    setTimeout(() => {
      // socket.on('message', (message) => {
      //   setMessages([...messages, message]);
      // });
      socket.on('available', () => {
        setNext(false);
        setMessages([]);
      });
      socket.on('next', async (room) => {
        setNext(true);
        setMessages([]);
      });
      // socket.on('agent message', ({ _id, avatar, username, message }) => {
      //   setMessages(messages);
      //   let toRespond = agentId === _id;
      //   dispatch(agentMessage({ _id, avatar, username, message, toRespond }));
      // });
      // socket.on(
      //   'me agent message',
      //   ({ id, _id, avatar, username, message }) => {
      //     setMessages(messages);
      //     let toRespond = agentId === id;
      //     dispatch(
      //       agentMessage({ id, _id, avatar, username, message, toRespond })
      //     );
      //   }
      // );
    }, 2000);
  }, [messages]);
  useEffect(() => {
    setTimeout(() => {
      socket.on('agents in service', (obj) => {
        let agentsinserver = [];
        for (const _id in obj) {
          if (_id !== '') {
            agentsinserver.push({
              _id: _id,
              avatar: obj[_id].avatar,
              username: obj[_id].username,
              messages: [],
              toRespond: 0,
            });
          }
        }
        dispatch(getAgents(agentsinserver));
      });

      socket.on('agents is enter', (obj) => {
        console.log('hello from new');
        dispatch(addAgents(obj));
      });

      socket.on('agents is out', (id) => {
        console.log('hello from out user ');
        dispatch(deleteAgents(id));
      });
    }, 2000);
  }, []);
  useEffect(() => {
    return () => {
      console.log('close');
      socket.emit('test delete');
    };
  }, []);
  return (
    <div style={{ margin: '2% 5%', maxHeight: '50%' }}>
      <MDBCard
        style={{ maxHeight: '520px' }}
        className="grey lighten-3 chat-room"
      >
        <MDBCardBody>
          <MDBRow className="px-lg-2 px-2">
            <MDBCol md="6" xl="4" className="px-0 mb-2 mb-md-0">
              <h6 className="font-weight-bold mb-3 text-lg-left">Member</h6>
              <div
                className="white z-depth-1 p-3"
                style={{ maxWidth: '250px' }}
              >
                <MDBListGroup
                  style={{ overflow: 'scroll', minHeight: '410px' }}
                  className="friend-list scrollcontanir"
                >
                  <Friend
                    key={'channel'}
                    friend={{
                      username: 'Channel',
                      // avatar,
                      // message,
                      // toRespond,
                      // seen,
                      _id: '',
                    }}
                    handelAdminClick={handelAdminClick}
                  />
                  {agent.agents.map((friend) => (
                    <Friend
                      key={friend.username}
                      friend={friend}
                      handelAdminClick={handelAdminClick}
                    />
                  ))}
                </MDBListGroup>
              </div>
            </MDBCol>
            <MDBCol
              md="6"
              xl="8"
              className="pl-md-3 px-lg-auto mt-2 mt-md-0 chatcontainr"
            >
              <MDBRow>
                <MDBListGroup
                  // style={{ overflow: 'scroll', maxHeight: '500px' }}
                  className="list-unstyled pl-3"
                >
                  <div
                    className="scrollcontanir"
                    style={{
                      overflow: 'scroll',
                      maxHeight: '350px',
                      minHeight: '350px',
                    }}
                  >
                    {agentId === '' &&
                      messages.map((message) => (
                        <ChatMessage
                          key={message.username + message.message}
                          message={{ ...message, user }}
                        />
                      ))}
                    {agentId !== '' &&
                      agent.agents
                        .filter((item) => item._id === agentId)[0]
                        .messages.map((message) => (
                          <ChatMessage
                            key={message.username + message.message}
                            message={{ ...message, user }}
                          />
                        ))}
                  </div>
                  <li>
                    <div
                      style={{ display: 'flex' }}
                      className="form-group basic-textarea"
                    >
                      <textarea
                        className="form-control pl-2 my-0"
                        id="exampleFormControlTextarea2"
                        rows="3"
                        value={message}
                        style={{
                          minWidth: '700px',
                          maxHeight: '71',
                          marginBottom: '-60px!important',
                        }}
                        placeholder="Type your message here..."
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => handelKeyPress(e)}
                      />
                      <MDBBtn
                        color="info"
                        rounded
                        size="sm"
                        className="float-right mt-4 rudios"
                        onClick={() => handelKeyPress({ key: 'Enter' })}
                      >
                        <MDBIcon icon="paper-plane" />
                      </MDBBtn>
                    </div>
                  </li>
                </MDBListGroup>
                <MDBModal isOpen={next} frame position="bottom">
                  <MDBModalBody className="text-center">
                    the user has left the chat do u want to take the next one
                    plzzzz 🙏🏻
                    <MDBBtn
                      color="secondary"
                      onClick={() => {
                        socket.emit('admindisconecct', user._id);
                        history.push('/break');
                      }}
                    >
                      NO
                    </MDBBtn>
                    <MDBBtn
                      onClick={() => socket.emit('next', user._id)}
                      color="primary"
                    >
                      Yes
                    </MDBBtn>
                  </MDBModalBody>
                </MDBModal>
                {/* <li>
                  <div className="form-group basic-textarea">
                    <textarea
                      className="form-control pl-2 my-0"
                      id="exampleFormControlTextarea2"
                      rows="3"
                      value={message}
                      placeholder="Type your message here..."
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => handelKeyPress(e)}
                    />
                    <MDBBtn
                      color="info"
                      rounded
                      size="sm"
                      className="float-right mt-4"
                      onClick={() => handelKeyPress({ key: 'Enter' })}
                    >
                      Send
                    </MDBBtn>
                  </div>
                </li>
                {next && (
                  <div>
                    <p>
                      the user has left the chat do u want to take the next one
                      plzzzz 🙏🏻
                    </p>
                    <MDBBtn
                      color="info"
                      rounded
                      size="sm"
                      className="float-right mt-4"
                      onClick={() => socket.emit('next', user._id)}
                    >
                      yes
                    </MDBBtn>
                    <MDBBtn
                      color="info"
                      rounded
                      size="sm"
                      className="float-right mt-4"
                      onClick={() => {
                        socket.emit('admindisconecct', user._id);
                        history.push('/break');
                      }}
                    >
                      no
                    </MDBBtn>
                  </div>
                )} */}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

const Friend = ({
  friend: { username, avatar, message, toRespond, seen, _id },
  handelAdminClick,
}) => (
  <MDBListGroupItem
    href="#!"
    className="d-flex justify-content-between p-2 border-light"
    onClick={() => {
      handelAdminClick(_id);
    }}
    // style={{ backgroundColor: active ? '#eeeeee' : '' }}
  >
    <div style={{ fontSize: '0.95rem' }}>
      <strong>{username}</strong>
      <p className="text-muted">{message}</p>
    </div>
    <div>
      {/* <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>
        {when}
      </p> */}
      {seen ? (
        <span className="text-muted float-right">
          <MDBIcon className="fa-check" aria-hidden="true" />
        </span>
      ) : toRespond ? (
        <MDBBadge color="danger" className="float-right">
          {toRespond}
        </MDBBadge>
      ) : (
        <span className="text-muted float-right">
          <MDBIcon icon="reply" aria-hidden="true" />
        </span>
      )}
    </div>
  </MDBListGroupItem>
);

const ChatMessage = ({ message: { username, avatar, message, user, _id } }) => (
  <li
    className={`${
      _id === user._id ? 'chat-message' : ''
    }  d-flex justify-content-between mb-4`}
  >
    {/* <MDBAvatar
      tag="img"
      src={avatar}
      alt="avatar"
      circle
      className="mx-2 z-depth-1"
    /> */}
    <MDBCard>
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
 *  {agentId === '' &&
          messages.map((message) => {
            let tt = message._id === user._id;
            console.log(tt, message._id, user._id);
            return (
              <div className={tt ? 'sender' : 'receiver'}>
                {!tt && (
                  <img className="receiverimg" src={message.avatar}></img>
                )}{' '}
                <p>{message.message}</p>
                <p>{message.username}</p>
              </div>
            );
          })}
        {agentId !== '' &&
          messages.map((message) => {
            let tt = message._id === user._id;
            console.log(tt, message._id, user._id);
            return (
              <div className={tt ? 'sender' : 'receiver'}>
                {!tt && (
                  <img className="receiverimg" src={message.avatar}></img>
                )}{' '}
                <p>{message.message}</p>
                <p>{message.username}</p>
              </div>
            );
          })}
        <input
          type="text"
          onKeyPress={(e) =>
            e.key === 'Enter'
              ? agentId === ''
                ? socket.emit(
                    'message',
                    socket.query._id,
                    message,
                    socket.query._id
                  )
                : socket.emit('agent message', agentId, message)
              : console.log(message)
          }
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        {next && (
          <div>
            <p>
              the user has left the chat do u want to take the next one plzzzz
              🙏🏻
            </p>
            <button onClick={() => socket.emit('next', user._id)}>yes</button>
            <button onClick={() => socket.emit('admindisconecct', user._id)}>
              no
            </button>
          </div>
        )}
        <button onClick={() => socket.emit('admindisconecct')}>Leave</button>
        {agent.agents.map((item) => {
          return (
            <div
              onClick={() => {
                setAgentId(item._id);
                console.log(agentId !== '');
              }}
              key={item._id}
            >
              <p>{item.username}</p>
              <p>{item.avatar}</p>
            </div>
          );
        })}

        {agentId !== '' &&
          agent.agents
            .filter((item) => item._id === agentId)[0]
            .messages.map((agent) => {
              console.log('from map', agent);
              return (
                <div>
                  <p>{agent.message}</p>
                </div>
              );
            })}
 */
