import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'holderjs';

function MainCrousel(props) {
  return (
    <Carousel interval="5000">
      {props.ads.ads.map((item) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={item.image} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default MainCrousel;
