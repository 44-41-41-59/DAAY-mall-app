import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'holderjs';

function MainCrousel(props) {
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
