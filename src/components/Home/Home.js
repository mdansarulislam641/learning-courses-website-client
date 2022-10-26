import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/mzXHhhc/images.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">WellCome To Our Community</h1>
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

export default Home;