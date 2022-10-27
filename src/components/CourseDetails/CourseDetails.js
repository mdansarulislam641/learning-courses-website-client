import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {  FaDownload} from 'react-icons/fa';
import './CourseDetails.css';
import CourseLeft from '../Courses/CourseLeftSide/CourseLeft';
import ReactToPdf from "react-to-pdf";


const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const ref = useRef()
    const { name, id,description_title,description_img, description_header, description, price } = courseDetails;
    // console.log(courseDetails)
    
    return (
        <div ref={ref} className='course-sidenav-course-card-container bg-violet-300 '>
             <div className='bg-violet-300 md:mt-[80px]'>
             <CourseLeft ></CourseLeft>
             </div>
            <div className=" borer-2 bg-violet-200">
           <div className='bg-violet-300 py-3 md:text-3xl text-xl font-mono md:font-bold text-center'>
               <h1>{description_header}</h1>
           </div>
               <div className='text-center mt-5 flex items-center justify-between mx-5'>
             

           <div><button className='border-2 flex items-center py-2 px-2 btn-outline text-2xl bg-violet-200 rounded-lg'>
           <ReactToPdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => (
                            <button className='flex items-center' onClick={toPdf}><FaDownload className='text-red-500 mr-1'/><span>Download pdf</span></button>
                        )}
                    </ReactToPdf>
           
           </button></div>
           
               <h2 className='md:text-2xl text-xl font-bold'>Total Price:{price}</h2>
               </div>
         <div  className='grid mx-auto details-container'>
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
            <div className='h-[300px] mt-[35px]  block course-details-cart'>
                <h2 className='text-2xl text-center font-extrabold underline mb-5 text-red-700'>Course Information</h2>
                   <div className='bg-red-500 border-2 mr-5 '>
                   <img className='w-full h-[200px] object-fill'  src={description_img} alt="" />
                    <div className='p-5'>
                    <h2 className='text-4xl font-extrabold'>Course: {name}</h2>
                    <p className='text-3xl font-bold'>Price:$ {price}</p>
                    </div>
                   </div>

            </div>
           
         </div>
         <Link to={`/course&prosed/${id}`} className=' mx-auto md:text-3xl text-2xl font-mono font-bold rounded-lg hover:bg-blue-600 text-black text-center'>
            <p className='bg-blue-400 md:w-1/2 mx-auto mb-5 md:py-5  md:mt-[50px]'>
            Get Premium 
            </p>
        </Link>
        </div>
     
        </div>
        
    );
};

export default CourseDetails;