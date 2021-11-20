
import {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import useReviews from '../../Hooks/useReviews';
import './DetailCourse.css'

const DetailCourse = () => {

    
    const {courseId} = useParams();
    console.log(courseId);
   const [services,setServices] = useState([]);
   const [reviews] = useReviews();

   useEffect(()=>{
    fetch('../services.json')
    .then(response => response.json())
    .then(data => setServices(data))
   },[])
   const filtered = services.filter(service =>{ 
    return (service.serviceId === Number(courseId))
} )

let reviewItem =[];
   
 reviews?.forEach(item => {
       if(item.serviceId === Number(courseId)){
          reviewItem.push(item);
       }
   })

   console.log("review item is :",reviewItem);



   if(filtered[0]){
    return (
        <div className="mt-5 pt-5">
        <div className="container">
        <div className="card border border-0 setup m-3 pb-0 custom-height">
           <img src={filtered[0].image} alt=""  className="img-fluid"/>
           <h1 className="mt-3"> <strong> {filtered[0].title} </strong> </h1>
           <div className="card-body">
           <h5 className="text-center">{filtered[0].description}</h5>
           <div className="d-flex justify-content-center align-items-center bg-warning rounded-3 p-5">
               <img  className="rounded-circle img-width " src={filtered[0].authorImage} alt="" />
               <div className="ps-3">
                   <h4>Instructor</h4>
                   <h3> {filtered[0].author}</h3>
               </div>
           </div>
           </div>
           <div className="card-footer d-flex justify-content-around align-items-center border border-2">
           <div className="bg-warning rounded-3 p-4">
               <h2 className="p-4 "> <strong> Old Price </strong></h2>
               <h1 className="text-decoration-line-through text-danger"> <strong> {(filtered[0].price).toFixed(2)} $ </strong></h1>
           </div>
               <div>
           <h4 className="text-center">Total Rated :<strong> {filtered[0].rated} </strong> <i className="fas fa-user-friends"></i> </h4>
           <h4 className="text-center">Avarage Rating : <strong>{filtered[0].rating} </strong> </h4>
          
         <h2>  <Rating 
               readonly
            fullSymbol="fas fa-star star-color"
            emptySymbol="far fa-star star-color"
           initialRating={filtered[0].rating}>
               </Rating>
               </h2>
          <NavLink to={`/courses`}> <button className=" btn btn-dark " >See All courses </button> </NavLink>
          </div>
          <div className="bg-warning rounded-3 m-1 p-2">
          <h2 className="p-4 "> <strong> Current Price </strong> </h2>
               <h1 className=" "> <strong> {(filtered[0].price - filtered[0].price*(filtered[0].discount/100)).toFixed(2)}$ only </strong></h1>
               <p> {(filtered[0].discount)}% discount On Limited time offer</p>
           </div>
           </div>
       </div>
       <h3 className="text-center bg-warning"><strong> Reviews </strong> </h3>
       <div className="d-flex">
           {
               reviewItem.map((review)=>{
                return (
                    <div className=" p-4" key={review.id}>
                        <h5> " {review.review} "</h5>
                        <div className="d-flex justify-content-center align-items-center custom-bg rounded-3 shadow">
                            <img src={review.image} alt={review.username}  className="rounded-circle image-custom-width p-3 m-2"/>
                         <h4 className="pt-3"> <strong>{review.username} </strong> </h4>
                        </div>
                        <hr/>
                    </div>
                )
               })
           }

       </div>
       </div>
       </div>
    );
   }
   else {
       return (
           <div>
               <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>
           </div>
       )
   }
   
};

export default DetailCourse;