import React from 'react';

const Faq = () => {
    return (
      <div className='my-2'>
        <div className='text-center text-4xl font-bold mb-5'>
            <p>FAQ</p>
        </div>
          <div className="collapse lg:w-9/12 mx-5 lg:mx-auto mb-2">
        <input type="checkbox" className="peer" /> 
        <div className="text-3xl text-center collapse-title bg-violet-500 text-primary-content peer-checked:bg-blue-400 peer-checked:text-secondary-content">
         What do we Provide
        </div>
        <div className="collapse-content text-primary-content "> 
          <p className='text-2xl text-black'>We are provide a big future and we carefully handle to all student , we are different others,if you join our community we will give you a power full knowledge,</p>
        </div>
      </div>

      
          <div className="collapse lg:w-9/12 mx-5 lg:mx-auto">
        <input type="checkbox" className="peer" /> 
        <div className="text-3xl text-center collapse-title bg-violet-500 text-primary-content peer-checked:bg-blue-400 peer-checked:text-secondary-content">
         Why can join you our community
        </div>
        <div className="collapse-content  text-primary-content "> 
          <p className='text-2xl text-black'>Junior hero is the one of the most popular community in bangladesh IT training center,our student success rate is more then 80% out of 100% ,because we are provide a good training all of student ,we are give assignment at some module finished and we trying to every day give all student home work</p>
        </div>
      </div>


          <div className="collapse lg:w-9/12 mx-5 lg:mx-auto mt-2">
        <input type="checkbox" className="peer" /> 
        <div className="text-3xl text-center collapse-title bg-violet-500 text-primary-content peer-checked:bg-blue-400 peer-checked:text-secondary-content">
            Some More Information with us
        </div>
        <div className="collapse-content  text-primary-content "> 
          <p className='text-2xl text-black'>Junior hero is the one of the most popular community in bangladesh IT training center,our student success rate is more then 80% out of 100% ,because we are provide a good training all of student ,we are give assignment at some module finished and we trying to every day give all student home work</p>
        </div>
      </div>
      </div>
    );
};

export default Faq;