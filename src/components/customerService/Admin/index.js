import React, { useEffect, useState } from 'react';
import { socket } from '../../../service/socket';
import { useSelector } from 'react-redux';

export default function CustomerServiceAdmin() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [next, setNext] = useState(false);
  const user = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      socket.emit('admin');
    }, 1300);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      socket.on('message', (message) => {
        setMessages([...messages, message]);
        console.log(messages);
      });
      socket.on('next', async (room) => {
        setNext(true);
        setMessages([]);
      });
    }, 1300);
  }, [messages]);
  return (
    <>
      <div>HELLO LADIES I'm the admin</div>
      {messages.map((message) => {
        let tt = message._id === user._id;
        console.log(tt, message._id, user._id);
        return (
          <div className={tt ? 'sender' : 'receiver'}>
            {!tt && <img className="receiverimg" src={message.avatar}></img>}{' '}
            <p>{message.message}</p>
            <p>{message.username}</p>
          </div>
        );
      })}
      <input
        type="text"
        onKeyPress={(e) =>
          e.key === 'Enter'
            ? socket.emit(
                'message',
                socket.query._id,
                message,
                socket.query._id
              )
            : null
        }
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      {next && (
        <div>
          <p>
            the user has left the chat do u want to take the next one plzzzz 🙏🏻
          </p>
          <button onClick={() => socket.emit('next', user._id)}>yes</button>
          <button onClick={() => socket.emit('admindisconecct', user._id)}>
            no
          </button>
        </div>
      )}
    </>
  );
}
