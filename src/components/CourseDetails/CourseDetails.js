import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {  FaDownload} from 'react-icons/fa';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { name, id,description_title,description_img, description_header, description, price } = courseDetails;
    // console.log(courseDetails)
    
    return (
        <div className=" w-9/12 mx-auto mt-[70px]">
           <div className='bg-violet-300 py-3 text-3xl font-mono font-bold text-center'>
               <h1>{description_header}</h1>
           </div>
                <h1 className='flex justify-end mt-5 mr-4'> <button className='w-1/6 flex  items-center text-center border-2 py-2 px-2 btn-outline text-2xl bg-violet-200 rounded-lg'><FaDownload className='text-red-500 mr-1'/>download</button></h1>
         <div className='grid mx-auto   lg:grid-cols-[700px_minmax(400px,_1fr)]'>
            <div className="card-body">
                  <h1 className='text-2xl text-red-700 underline font-extrabold'>{description_title}</h1>
                {
                    description.map((des,idx)=><p className='text-2xl'
                     key={idx}>
                    <span className='text-red-800'>{idx+1 +'. '}</span> {des}
                     </p>
                     )
                    }    

            </div>
            <div className='h-[300px] mt-[35px]  block'>
                <h2 className='text-2xl text-center font-extrabold underline mb-5 text-red-700'>Course Information</h2>
                   <div className='bg--500 border-2'>
                   <img className='w-full h-[200px] object-fill'  src={description_img} alt="" />
                    <div className='p-5'>
                    <h2 className='text-4xl font-extrabold'>Course: {name}</h2>
                    <p className='text-3xl font-bold'>Price:$ {price}</p>
                    </div>
                   </div>

            </div>
           
         </div>
         <Link to={`/course&prosed/${id}`} className=' mt-5 mx-auto py-3 text-3xl font-mono font-bold rounded-lg hover:bg-blue-600 text-black text-center'>
            <p className='bg-blue-400 w-1/2 mx-auto'>
            Get Premium 
            </p>
        </Link>
        </div>
    );
};

export default CourseDetails;