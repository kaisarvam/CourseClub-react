import React from 'react';

const Faq = () => {
    return (
        <div className="mb-0 pb-0 mt-5 pt-5">
                <section className="container mt-5 mb-0 pb-0" id="fa-q">
        <h1 className="text-center font-weight-bold pb-5 my-5">Frequently <span className="text-warning"> Asked </span> Questions   </h1>
        <div className="row g-5">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="d-flex justify-content-center" >
         <img className="img-fluid w-75 h-25" src="./faq.png" alt="" />
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item  mb-2">
                      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                           <strong>How Does Course Club Work?  </strong>
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                        Course Club's mission is to create new possibilities for people and organizations everywhere. Our global marketplace features an extensive, multi-language library, which includes thousands of courses taught by real-world experts. You can take courses across a wide range of categories, some of which include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music and much more!Below are answers to some of the frequently asked questions we receive about how Course Club works.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item pb-2 mb-2">
                      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                           <strong> What do Course Club courses include? </strong>
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                        Each Course Club course is created, owned and managed by the instructor(s). The foundation of each Course Club course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. 
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item pb-2 mb-2">
                      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                          <strong>  How do I take a Cource club course? </strong>
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                        Cource club courses are entirely on-demand. You can begin the course whenever you like, and there are no deadlines to complete it.Cource club courses can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app. 
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item pb-2 mb-2">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                           <strong> Do I have to start my Course Club course at a certain time? And how long do I have to complete it? </strong>
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                          <div className="accordion-body">
                          As noted above, there are no deadlines to begin or complete the course. Even after you complete the course you will continue to have access to it, provided that your account’s in good standing, and Udemy continues to have a license to the course.
                          </div>
                        </div>
                      </div>
                  </div>
            </div>

        </div>

    </section>
    <br/>
    <br/>
    <br/>
    <br/>
        </div>
    );
};

export default Faq;