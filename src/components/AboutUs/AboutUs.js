import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
      <div className="mt-5 pt-5">
        <div className="container">
            <h1><strong> About <span className="text-warning"> Us  </span></strong></h1>
            <p>
            Whether you are looking to enhance your skills, improve your team or pursue a professional education, the Online Business School’s learning pathways can provide you with all you need.The Online Business School delivers online university pathway programmes with full Undergraduate and Postgraduate Diploma Awards to learners from all corners of the world. Learners can fast track their way through to a UK University Qualification on campus or by distance learning.Our web based modules allow students to learn what they want, when they want and how they want and have been designed to facilitate a much faster, more affordable and engaging way to learn. With a 24/7 student networking platform, personal dashboards, 1-2-1 online tutorials, group webinars and bank of pre-recorded group webcasts, the Online Business School provides students with all the support that they need to succeed in developing their professional skill base .
            </p>
            <br/>
            <h3>What's Standing in Your Way?</h3>
            <p>   
What's Standing in Your Way? We all have obstacles in our lives, and usually it's these obstacles that keep us from living a full life.Our mission at Lifehack is to help you overcome your obstacles and turn them into opportunities so that you can lead a purposeful, healthier and more productive life.Through our 30,000 + articles, newsletter, and our new Expert Course "Life Above Limitations", we have helped millions of people worldwide transform their lives.Our articles will inspire you, and our course will show you how to tackle your limitations head on and live the life you truly want.
            </p>
            <br/>
            <h3>Keep It Simple</h3>
            <p>
            Our goal is to help as many people as possible live a full life, and I developed a simple framework that will help you overcome just about any limitation that stands in your way.It's called the Breakthrough Framework, and it will give you the power to turn any limitation you may be facing into an opportunity that is achievable. With this framework I was able to change my life so that I'm living it on my terms, and my goal is to teach you how to do the very same.
            </p>
            <br/>
            <hr/>
            <br/>
            <div className="container-fluid w-75 bg-warning pb-3 pt-3">
            <h2><strong>Contact Form </strong></h2>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <select id="country" name="country" >
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something."></textarea>
    <button className="btn btn-primary">Submit</button>
    
  </form>

  </div>   

        </div>
        </div>
    );
};

export default AboutUs;