import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../shared/Header';
export const CourseContext = createContext([])
const Main = () => {
    const course = useLoaderData() 
    // console.log(course)
    return (
        <div>
            <CourseContext.Provider value={course}>
                <Header></Header>
                <Outlet></Outlet>
            </CourseContext.Provider>
        </div>
    );
};

export default Main;