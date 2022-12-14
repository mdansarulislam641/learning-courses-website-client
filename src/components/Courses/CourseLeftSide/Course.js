import React from 'react';
import { Link } from 'react-router-dom';
import '../Courses.css';
const Course = ({course}) => {
    // console.log(course)
    const {name,id} = course ;
    return (
        <div className='sidenav-header'>
          <Link to={`/course&details/${id}`} className='md:text-3xl text-2xl font-bold '> 
            <p className='rounded-2xl m-3 py-2 bg-blue-500 text-[#f1f1f1]'>{name}</p>
           </Link>
        </div>
    );
};

export default Course;