import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import raw from 'raw.macro';
import raw from './servicespitch.txt';

const Services = () => {
  const [introHeader, setIntroHeader] = useState('');
  const [intro, setIntro] = useState('');
  const [frontEndHeader, setFrontEndHeader] = useState(''); 
  const [frontEnd, setFrontEnd] = useState('');
  const [backEndHeader, setBackEndHeader] = useState('');
  const [backEnd, setBackEnd] = useState('');

  useEffect(() => {
    fetch(raw)
    .then(r => r.text())
    .then(text => {
      const lines = text.split('newline');
      setIntroHeader(lines[0]);
      setIntro(lines[1]);
      setFrontEndHeader(lines[2]);
      setFrontEnd(lines[3]);
      setBackEndHeader(lines[4])
      setBackEnd(lines[5]);
      console.log('text decoded:', text);
    });
  },[]);

  const test = ''
  
  return (
    <div className='serviceswrapper'>
      <div className='contactheader'>
        <div className='contactheadertext'>services</div> 
        <div className='contactlinks'>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className='servicescontent' >
        <h2><b>{introHeader}</b></h2>
        <p>{intro}</p>
        <h2><b>{frontEndHeader}</b></h2>
        <p>{frontEnd}</p>
        <h2><b>{backEndHeader}</b></h2>
        <p>{backEnd}</p>
      </div>
    </div>
  )
}

export default Services;