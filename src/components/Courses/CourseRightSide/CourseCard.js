import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    // console.log(course)
    const { img, name, title, id, price } = course;
    return (
        <div className="bg-violet-300 shadow-xl rounded-lg">
            <figure><img className='w-full h-[200px] object-fill' src={img} alt="course img" /></figure>
            <div className="p-5">
                <div className='h-[180px]'>
                    <h2 className="text-3xl font-extrabold font-mono mb-3">
                        {name}
                    </h2>
                    <p className='font-semibold mb-3'>{title}</p>
                    <p className='text-2xl font-mono '>Price:<span>$</span><span className='text-red-500 font-extrabold'>{price}</span></p>
                </div>

                <div className='text-center text-2xl text-white font-mono font-bold '>
                    <Link to={`/course&details/${id}`}>
                        <div className="bg-blue-500 py-3 rounded-lg">
                            <button>Details</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;