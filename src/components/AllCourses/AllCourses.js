import React from 'react';
import useServices from '../../Hooks/useServices';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';

const AllCourses = (props) => {
    const [services,setServices] = useServices();
    return (
        <div className="mt-5 pt-5">
            <h1 className="m-5"> <strong > All <span className="text-warning"> Courses </span> </strong> </h1>
            <hr/>
            <br/>
             <div className="container">
            <div className="row g-3 ">
            {
                services.map(service=>{
                return(
                    <div className="col-md-4 col-sm-12 bg-light rounded shadow-lg " key={service.id} >
                        <ServiceDisplay service={service} key={service.id} handleCart={props.handleCart}> </ServiceDisplay>
                        </div>)
            })
        }
        
        <hr/>
  
            </div>
        </div>
        </div>
    );
};

export default AllCourses;