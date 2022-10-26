import React, { useContext } from 'react';
import { CourseContext } from '../../../Layout/Main';
import CourseCard from './CourseCard';

const CourseRight = () => {
    const courses = useContext(CourseContext)
    // console.log(courses)
    return (
        <div className='w-[1050px] grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1'>
           {
            courses.map(singleCourse=><CourseCard
                key={singleCourse.id}
                course={singleCourse}
            ></CourseCard>)
           }
        </div>
    );
};

export default CourseRight;