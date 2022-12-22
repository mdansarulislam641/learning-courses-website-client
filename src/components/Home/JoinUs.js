import React from 'react';
import joinUsImage from '../../assets/20944119.jpg';
const JoinUs = () => {
    return (
        <section className='py-20 bg-[#ffff]'>
            <h2 className='text-4xl font-mono text-extrabold md:text-6xl text-center'>JOIN US</h2>
            <div className='flex max-w-screen-xl mx-auto items-center'>
                <div className='flex-1'>
                    <img src={joinUsImage} alt="" />
                </div>
                <div className='flex-1 text-left'>
                    <h1 className='text-5xl font-extrabold '>We are provide very exited course curriculum</h1>
                        <h2 className='text-xl'>We are provide a good qualification online courses , if you are a technology learner so you can add our community for know next updated and our course update </h2>
                        <div>
                            <button className='btn btn-primary px-10 text-xl mt-5'>JOin us</button>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;