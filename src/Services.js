import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import raw from 'raw.macro';

const Services = () => {
  const[pitch1, setPitch1] = useState('');
  const [pitch2, setPitch2] = useState('');
  const [pitch3, setPitch3] = useState('');

  useEffect(() => {
    const text1 = raw('./servicespitch1.txt');
    const text2 = raw('./servicespitch2.txt');
    const text3 = raw('./servicespitch3.txt');
      setPitch1(text1);
      setPitch2(text2);
      setPitch3(text3);
  }, []);

  useEffect(() => {
    console.log(pitch1)
  },[pitch1]);
  
  return (
    <div className='serviceswrapper'>
      <div className='contactheader'>
        <div className='contactheadertext'>services</div> 
        <div className='contactlinks'>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/services'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className='servicescontent' >
        <div className='servicespitch'>
          <p>{pitch1}</p>
          <p>{pitch2}</p>
          <p>{pitch2}</p>
        </div>
      </div>
    </div>
  )
}

export default Services;