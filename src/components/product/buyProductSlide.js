import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './buyProduct.scss';

export default function buyProduct(props) {
  return (
    <div class="slider">
      <Carousel>
        {props.product.images.map((item) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.tribaeast.com/wp-content/uploads/2017/04/Korea-Busan-Gyeongjy-Yellow-Rape-Flower-800x400.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

{
  /* <Carousel.Item>
  <img
    className="d-block w-100"
    src="https://www.tribaeast.com/wp-content/uploads/2017/04/Korea-Busan-Gyeongjy-Yellow-Rape-Flower-800x400.png"
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://smilepolitely.com/images/sized/images/sized/remote/www-smilepolitely-com-splog_uploads-20567-screen_shot_2018-05-21_at_2.34.43_pm-800x400.png"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://a0.cdn.japantravel.com/photo/13444-78014/800x400!/hyogo-kasai-flower-center-78014.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://anthuriuminfo.com/wp-content/uploads/2018/08/stijltrends-van-2019-bloemen-en-plantensector-soft-landing-800x400.png"
    alt="Forth slide"
  />
  <Carousel.Caption>
    <h3>forth slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item> */
}
