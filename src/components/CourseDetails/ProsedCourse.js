import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProsedCourse = () => {
    const course = useLoaderData();
    const {name, price} = course ;
    console.log(course)
    return (
        <div className='flex h-[100vh] flex-col justify-center items-center text-center'>
            <h1 className='text-4xl font-mono'>WOW!!!! Congratulation You Buy The Course  <br /> Welcome to Our Community!!!
            </h1>
            <h4>You are Buying the {name} Course</h4>
            <h3>TOTAL Cost: $ {price} </h3>
        </div>
    );
};

export default ProsedCourse;