import React, { useEffect, useState } from 'react';
import { socket } from '../../../service/socket';
import { useSelector } from 'react-redux';
import '../index.css';
export default function CustomerServiceClient() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState('');
  const user = useSelector((state) => state.user);
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
    <>
      {room === '' && (
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
    </>
  );
}
