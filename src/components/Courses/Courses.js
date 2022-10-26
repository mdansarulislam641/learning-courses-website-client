
import CourseLeft from './CourseLeftSide/CourseLeft';
import CourseRight from './CourseRightSide/CourseRight';

const Courses = () => {

    return (
        <div className='grid w-[1300px] mx-auto gap-5 bg-red-600 md:grid-cols-[200px_minmax(1100px,_1fr)] '>
            <CourseLeft></CourseLeft>
            <CourseRight></CourseRight>
        </div>
    );
};

export default Courses;