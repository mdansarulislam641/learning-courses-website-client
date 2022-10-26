import React from 'react';
import { useContext } from 'react';
import { CourseContext } from '../../../Layout/Main';
import Course from './Course';
const CourseLeft = () => {
    const courses = useContext(CourseContext);
    // console.log(courses)
    return (
        <div className='bg-orange-500'>
            {
                courses.map(singleCourse=><Course
                    key={singleCourse.id}
                    course={singleCourse}
                ></Course>)
            }
        </div>
    );
};

export default CourseLeft;