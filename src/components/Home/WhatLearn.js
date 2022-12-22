import React from 'react';
import javaLogo from '../../assets/courseLogo/java.png';
import C from '../../assets/courseLogo/ccc.jpg';
import CPlus from '../../assets/courseLogo/c+++.jpg';
import python from '../../assets/courseLogo/python.jpg';
import js from '../../assets/courseLogo/js.png';
import reactJs from '../../assets/courseLogo/react.jpg';
const WhatLearn = () => {
    const cardItem = [
        {
            name: "java",
            image: javaLogo
        },
        {
            name: "c",
            image: C
        },
        {
            name: "c++",
            image: CPlus
        },
        {
            name: "js",
            image: js
        },
        {
            name: "python",
            image: python
        },
        {
            name: "React Js ",
            image: reactJs
        },
    ]
    return (
        <section className='bg-[#f1f1f1] py-20 max-w-screen-xl mx-auto'>
            <div>
                <h1 className='text-3xl md:text-5xl text-center text-black  font-extrabold font-mono '>What Will You Learn?_</h1>
            </div>
            <div className='grid grid-cols-2 pt-20 text-center md:grid-cols-4 lg:grid-cols-6 gap-5'> 
                {
                    cardItem.map((item, idx) => <div key={idx} className="shadow-lg shadow-black hover:scale-105  transition-all duration-500  overflow-hidden overflow-x-hidden py-5 rounded-lg">
                        <img className='w-1/2  mx-auto rounded-lg' src={item.image} alt="images" />
                        <h2 className='text-tenter text-xl md:text-3xl '>{item.name}</h2>
                    </div>)
                }
            </div>

        </section>
    );
};

export default WhatLearn;