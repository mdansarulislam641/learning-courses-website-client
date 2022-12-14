import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
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
                <Footer></Footer>
            </CourseContext.Provider>
        </div>
    );
};

export default Main;