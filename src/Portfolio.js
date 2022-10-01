import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Portfolio = () => {

  const data = [
    {
     image: require('./images/thwartmehome.png'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:require('./images/thwartmegamepage.png'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('./images/ThwartMe.mp4'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
       image:require('./images/adoptpet.png'), 
       caption:"Caption",
       description:"Description Here"
      },
      {
       image:require('./images/map.png'), 
       caption:"Caption",
       description:"Description Here"
      },
      {
        image:require('./images/climbs.png'), 
        caption:"Caption",
        description:"Description Here"
       }
    ]
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='portfoliowrapper'>
      <div className='contactheader'>
        <div className='contactheadertext'>Portfolio</div> 
        <div className='contactlinks'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/profile'>Profile</Link>
        </div>
      </div>
      <div className='carousel' >
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>  
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
              </Carousel.Caption>      
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />  
            </Carousel.Item>
          )
        })} 
      </Carousel>
      </div>
    </div>
  )
}

export default Portfolio;