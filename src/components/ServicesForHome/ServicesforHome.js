import React from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const ServicesforHome = (props) => {
    const {id,image,author,authorImage,title,description,rating,rated,price,discount} = props.service;
    return (
        
       <div className="card  setup m-3 pb-0 custom-height">
           <img src={image} alt=""  className="img-fluid"/>
           <h5 className="mt-3"> <strong> {title} </strong> </h5>
           <div className="card-body">
           <p className="text-center">{description.substring(0,250)}</p>
           <div className="d-flex justify-content-center align-items-center bg-warning rounded-3 p-5">
               <img  className="rounded-circle img-width " src={authorImage} alt="" />
               <div className="ps-3">
                   <h4>Instructor</h4>
                   <h3> {author}</h3>
               </div>
           </div>
           </div>
           <div className="card-footer custom-footer-fix pt-5">
           <h5 className="text-center">Total Rated :<strong> {rated} </strong> <i className="fas fa-user-friends"></i> </h5>
           <h5 className="text-center">Avarage Rating : <strong> {rating} </strong> </h5>
          
         <h3>  <Rating 
                readonly
            fullSymbol="fas fa-star star-color"
            emptySymbol="far fa-star star-color"
           initialRating={rating}>
               </Rating>
               </h3>
               <div>
                   <h5>Old price : <span className="text-decoration-line-through"> <strong> {price.toFixed(2)}$ </strong> </span></h5>
                   <h5>Discount : <span > <strong> {discount}% </strong> </span></h5>
                   <h5> Current price : <span className="fw-bold"> <strong> {(price - price*(discount/100)).toFixed(2)}</strong>$ </span></h5>

               </div>
               

          <NavLink to={`/course/${id}`}> <button className=" btn btn-warning shadow-lg border-class mx-2 mt-2" > <i className="fas fa-info-circle"></i>  View Details </button> </NavLink>

           </div>
       </div>
    );
};

export default ServicesforHome;