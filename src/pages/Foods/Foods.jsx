import React from 'react';

const Foods = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-Stylish'>Our Best Foods</h1>
      <section className='mx-auto w-fit p-12 flex gap-10'>
        <div className='w-72 h-fit group'>
          <div className='relative overflow-hidden'>
            <img
              className='h-96 w-full object-cover'
              src='https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
              alt=''
            />
            <div className='absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
              <button className='bg-black text-white py-2 px-5'>Sushi</button>
            </div>
          </div>
        </div>
        <div className='w-72 h-fit group'>
          <div className='relative overflow-hidden'>
            <img
              className='h-96 w-full object-cover'
              src='https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              alt=''
            />
            <div className='absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
              <button className='bg-black text-white py-2 px-5'>Ramen</button>
            </div>
          </div>
        </div>
        <div className='w-72 h-fit group'>
          <div className='relative overflow-hidden'>
            <img
              className='h-96 w-full object-cover'
              src='https://images.unsplash.com/photo-1558220831-9ad8f955fb9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              alt=''
            />
            <div className='absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
              <button className='bg-black text-white py-2 px-5'>Soup</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foods;
