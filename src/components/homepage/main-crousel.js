import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'holderjs';

function MainCrousel(props) {
  console.log(props.ads, 'main');
  return (
    <Carousel interval="5000">
      {props.ads.ads.map((item) => {
        return (
          <Carousel.Item id='crItem'>
            <img className="d-block w-100" src={item.image} alt="First slide" id="imgCr" />
            <Carousel.Caption>
              <h3>SHOP NOW FROM OUR WEBSITE</h3>
              <p>If you look for the best place to shop or present your store; you're in the RIGHT PLACE!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MainCrousel;
