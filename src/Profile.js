import React from 'react';
import { Link } from 'react-router-dom';
import headshot from './images/head-shot.jpg';

const Profile = () => {
  const pitch1 = 'I provide freelance full stack web development services with 12 years experience in software development and testing.'
  const pitch2 = 'By leveraging the capabilities of modern components and frameworks I can bring your ideas to life. From compelling responsive web sites that will delight your audience to high performance backend components like API’s and Databases.'
  const qualification1 = 'I have been involved in software development for 12 years, 2 years as a full stack web developer and 10 years as a software test automation engineer. During that time I have worked for top tier companies like Getty Images, Real Networks, and as a contractor to Google and Microsoft.';
  const qualification2 = 'I currently specialize in React Hooks and JavaScript for frontend development, as well as HTML5 and CSS. I use JavaScript, ExpressJS server, Mongo, Redis, and Postgres databases on the backend. When creating API’s I use ExpressJS, Axios, and JSON objects. To handle Ecommerce credit card services and shopping cart I use Foxycart services. For email services I work with Mailgun smpt mail provider and emailJS. I deploy to Heroku and DigitalOcean hosting services, and use Google Domains to purchase domain names and handle DNS services.';

  return (
    <div className='profilewrapper'>
      <div className='contactheader'>
        <div className='contactheadertext'>Profile</div> 
        <div className='contactlinks'>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/profile'>Profile</Link>
        </div>
      </div>

      <p className='profilephone'>
        (425)-328-8161
        <a className='profileemail' href="mailto:matt@jetweb.systems">matt@jetweb.systems</a>
      </p>

      <img className='profileheadshot' src={headshot} />

      <div className='profilecontent' >
        <div className='profilepitch'>
          <p>{pitch1}</p>
          <p>{pitch2}</p>
        </div>
        <div className='profilequalifications'>
          <p>{qualification1}</p>
          <p>{qualification2}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;