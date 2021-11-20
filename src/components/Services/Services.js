import React from 'react';
import useServices from '../../Hooks/useServices';
import ServicesforHome from '../ServicesForHome/ServicesforHome';


const Services = (props) => {
    const [services,setServices] = useServices();
    return (
        <div className="container">
            <div className="row g-3 ">
            {
                services.slice(0,4).map(service=>{
                return(
                    <div className="col-md-6 col-sm-12 bg-light rounded shadow-lg " key={service.serviceId}>
                        <ServicesforHome service={service} key={service.serviceId}> </ServicesforHome>
                        </div>)
            })
        }
            
                
            
            </div>
        </div>
    );
};

export default Services;