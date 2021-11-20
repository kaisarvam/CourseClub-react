import React from 'react';
import Services from '../Services/Services';
import './Home.css'


const Home = (props) => {
  console.log("from home",props);
   
    return (
        <div className="m-5 pt-5">
          <div className="px-4 py-3 mt-3 text-center">
    <h1 className="display-5 mb-5 fw-bold">Course <span className="text-warning">Club</span></h1>
    <hr/>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 ">Learn Courses online at your own pace. Start today and improve your skills. Join millions of learners from around the world already learning on Course Club. 30-Day Money Guarantee. Over 183,000 Courses. Lifetime Access. Expert Instructors. Courses in 60+ Languages.</p>
      <hr/>
    </div>
  </div>
  <h1> <strong> Our Featured Courses </strong></h1>
  <hr></hr>
  <br/>
            <Services handleCart={props.handleCart}> </Services>  
          
    </div>
    );

};

export default Home;