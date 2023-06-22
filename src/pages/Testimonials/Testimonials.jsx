import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-Stylish mt-10'>
        What People Say About Us
      </h1>
      <div className='mx-auto max-w-5xl px-4 py-8'>
        <section className='rounded-lg bg-gray-100 p-8'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
            <img
              alt='Man'
              src='https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              className='aspect-square w-full rounded-lg object-cover'
            />

            <blockquote className='sm:col-span-2'>
              <p className='text-xl font-medium sm:text-2xl'>
                I am thrilled to share my experience at your restaurant! From
                the moment I walked in, I was impressed by the warm and
                welcoming atmosphere. The staff went above and beyond to ensure
                that my dining experience was nothing short of exceptional.
              </p>

              <cite className='mt-8 inline-flex items-center not-italic'>
                <span className='hidden h-px w-6 bg-gray-400 sm:inline-block'></span>
                <p className='text-sm uppercase text-gray-500 sm:ms-3'>
                  <strong>Justin Harrison</strong>, Beatle Inc.
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
