import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/3784896.jpg';
const Banner = () => {
    return (
        <div className=''>
        <div className="hero  relative h-[80vh]" style={{ backgroundImage: `url(${bannerImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center' }}>
<div className=" absolute w-full h-full opacity-50 bg-gray-900"></div>
<div className="hero-content text-center text-neutral-content">
<div className="">
  <h1 className="mb-5 max-w-xl mx-auto text-2xl md:text-3xl  lg:text-5xl font-bold">Learn Coding Online With Professional Instructors</h1>
  <p className="mb-5 md:w-3/5 mx-auto">We Are Provided good service and all time we carefully handle all student, We Are Provide a job placement team for every Batch ,So A Good Student Getting a job we are support for them</p>
  <Link to='/courses'>
  <button className="btn btn-primary">Go to Courses </button>
  </Link>
</div>
</div>
</div>


    </div>
    );
};

export default Banner;