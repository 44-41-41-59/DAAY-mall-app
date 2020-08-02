import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { socket } from '../../service/socket';
import 'holderjs';

function MainCrousel(props) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     socket.emit('next');
  //     socket.on('test2', () => console.log('secodnd compo'));
  //   }, 500);
  // }, []);

  return (
    <Carousel interval="5000">
      {props.ads.ads.map((item) => {
        return (
          <Carousel.Item id='crItem'>
            <img className="d-block w-100" src={item.image} alt="First slide" id="imgCr" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MainCrousel;
