
import CourseLeft from './CourseLeftSide/CourseLeft';
import CourseRight from './CourseRightSide/CourseRight';
import './Courses.css'
const Courses = () => {

    return (
        <div className='bg-violet-100  shadow-lg course-sidenav-course-card-container'>
            <CourseLeft></CourseLeft>
            <CourseRight></CourseRight>
        </div>
    );
};

export default Courses;