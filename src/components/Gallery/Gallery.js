import React from 'react';
import {useState,useEffect} from 'react';
import Teachers from '../Teachers/Teachers';

const Gallery = () => {
    const [teachers,setTeachers] = useState([]);
    useEffect(()=>{
        fetch('../teachers.json')
        .then(response => response.json())
        .then(data => setTeachers(data))
    },[])
    console.log("teachers are",teachers);
    return (
        <div className="mt-5 pt-5">
        <div className="container">
            <h1 className="m-5"> <strong> Our <span className="text-warning"> Instructors </span> </strong> </h1>
            <hr/>
            <div className="row g-4 ">
            {
                teachers.map((teacher)=>{
                 return(

                     <Teachers teacher={teacher} key={teacher.id}> </Teachers>
                 )
                })
            }
            </div>
        </div>
        </div>
    );
};

export default Gallery;