import React, { useState, useEffect } from 'react';
import APIUrl from "../Api";
import Carousel from 'react-bootstrap/Carousel';

const Homeslider = () => {
  const sliderImage = (APIUrl.defaults.assetsURL)
  const [sliderdata, setSlider] = useState([]);
  useEffect(async () => {
    const result = await APIUrl.get(`/get_sliders`)
    setSlider(result.data);
  }, []);
  return (
    <>
      <Carousel fade={true}>
        {sliderdata.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={`${sliderImage}/${item.image}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="container first-slid">
                <h1>{item.slide_title}</h1>
                <h3>{item.slide_content}</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
export default Homeslider;