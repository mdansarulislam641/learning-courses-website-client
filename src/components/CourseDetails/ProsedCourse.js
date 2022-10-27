import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvier/AuthProvider';

const ProsedCourse = () => {
    const {user} = useContext(AuthContext)
    const course = useLoaderData();
    const {name, price} = course ;
    console.log(course)
    return (
        <div className='flex h-[100vh] flex-col justify-center items-center text-center'>
            <h1 className='text-4xl font-mono'>WOW!!!! Congratulation {user?.displayName} You Buy The  {name} Course  <br /> Welcome to Our Community!!!
            </h1>
            <h4 className='text-3xl'>Your Course Name {name}</h4>
            <h3 className='text-2xl'>TOTAL Cost: $ {price} </h3>
            <Link to='/' className='underline text-2xl text-blue-800'>Go back to home</Link>
        </div>
    );
};

export default ProsedCourse;