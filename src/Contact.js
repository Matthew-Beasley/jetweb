import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ri, setRi] = useState('');
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('form.current: ', form.current)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className='contactwrapper'>
      <div className='contactheader'>
        <div className='contactheadertext'>Contact Info</div> 
        <div className='contactlinks'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/profile'>Profile</Link>
        </div>
      </div>
      <div className='contactcontent'>
        <div className='emailphone'>
          <div className='phone'>
            (425)-328-8161
          </div>
          <div className='email'>
            matt@jetweb.systems
          </div>
        </div>
        <form ref={form} id="contactform" onSubmit={(ev) => sendEmail(ev)}>
          <input type="text" id="name" name="name" placeholder="name" onChange={(ev) => setName(ev.target.value)}></input>
          <input type="text" id="phone" name="phone" placeholder="phone" onChange={(ev => setPhone(ev.target.value))}></input>
          <input type="text" id="email" name="email" placeholder="email" onChange={(ev) => setEmail(ev.target.value)}></input> <br/>
          <textarea id="ri" name="ri" placeholder='Ralative Information' value={ri} onChange={(ev) => setRi(ev.target.value)}></textarea>
          <input id='submitbutton' type="submit" />
        </form>
      </div>
    </div>
  )
};

export default Contact;