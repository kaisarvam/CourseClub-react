import React from 'react';
import './Teachers.css';

const Teachers = (props) => {
    const {name,description,image} = props.teacher;
    return (
        <div className="col-sm-12  col-md-4 ">
        <div className="card new-card  img-sizing">
  <img src={image} className="card-img-top img-thumbnail  " alt="..."/>
  <div className="card-body bg-dark text-light pt-4 ">
    <h5 className="card-title "><strong>{name}</strong></h5>
    </div>
    <div className="card-footer footer-size">
   <strong> <p className="card-text">"{description}"</p> </strong>
    </div>
  
</div>
</div>
    );
};

export default Teachers;