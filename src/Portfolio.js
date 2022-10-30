import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Portfolio = () => {

  const data = [
   /* {
      image: require('./images/jetweb-search-api.png'), 
      caption:'https://jetweb-search.cyclic.app/search?term=yamaha%20xt%20600&pages=3',
      description:'Description Here'
    },
    {
      image: require('./images/jetweb-search.png'), 
      caption:'https://www.npmjs.com/package/jetweb-search',
      description:'Description Here'
    },*/
    {
      image: require('./images/thwartmehome.png'), 
      caption:'https://www.thwartme.com/#/',
      description:'Description Here'
    },
    {
      image:require('./images/thwartmegamepage.png'), 
      caption:'https://www.thwartme.com/#/gamepage',
      description:'Description Here'
    },
    {
      image:require('./images/ThwartMe.mp4'), 
      caption:'https://www.thwartme.com/#/rules',
      description:'Description Here'
    },
    {
      image:require('./images/adoptpet.png'), 
      caption:'Adopt-a-pet.surge.sh',
      description:'Description Here'
    },
    {
      image:require('./images/map.png'), 
      caption:'http://trail-finder.surge.sh',
      description:'Description Here'
    },
    {
      image:require('./images/climbs.png'), 
      caption:'http://trail-finder.surge.sh',
      description:'Description Here'
    }
  ]
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='portfoliowrapper'>
      <div className='portfolioheader'>
        <div className='portfolioheadertext'>Portfolio</div> 
        <div className='portfoliolinks'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className='carousel' >
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>  
              <Carousel.Caption>
                <a href={slide.caption}><div className='slidecaption'>{slide.caption}</div></a>
              </Carousel.Caption>      
              <img
                className='d-block w-100'
                src={slide.image}
                alt='slider image'
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