import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    // console.log(course)
    const {name,id} = course ;
    return (
        <div className=''>
           <Link to={`/course&details/${id}`} className='text-3xl'> 
            <p className='m-[20px] rounded-2xl hover:bg-blue-700 text-center py-1 bg-red-500'>{name}</p>
           </Link>
        </div>
    );
};

export default Course;