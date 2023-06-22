import React, { useRef } from 'react';

const Blog = () => {
  const reportTemplatePdf = useRef();

  function handleDownload() {
    console.log(reportTemplatePdf.current);
    window.html2pdf(reportTemplatePdf.current).save();
  }

  return (
    <div ref={reportTemplatePdf}>
      <section className='font-Stylish'>
        <div className='container flex flex-col justify-center p-4 mx-auto md:p-8'>
          <h2 className='mb-12 text-4xl font-bold leading-none text-center sm:text-5xl'>
            Asked Questions
          </h2>
          <div className='flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700'>
            <button
              className='rounded-lg px-4 py-2 bg-orange-600 text-red-100 hover:bg-red-700 duration-300'
              onClick={handleDownload}
            >
              Download as Pdf
            </button>
          </div>
        </div>
      </section>
      <div class='container mx-auto flex flex-col gap-[50px] sm:gap-[55px] md:gap-[60px] lg:gap-[70px] xl:gap-[75px] py-[30px] sm:py-[35px] md:py-[40px] lg:py-[45px] xl:py-[50px] px-[15px] sm:px-[30px] md:px-[45px] lg:px-[60px] xl:px-[75px]'>
        <div class='cards flex flex-col sm:flex-row flex-wrap justify-center gap-y-[35px] sm:gap-y-[40px] md:gap-y-[45px] lg:gap-y-[50px] gap-x-[35px]'>
          <div class='card'>
            <div class='icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                />
              </svg>
            </div>
            <div class='title text-orange-700'>
              Tell us the differences between uncontrolled and controlled
              components.
            </div>
            <div class='description text-black'>
              Uncontrolled components manage their own state, while controlled
              components are managed by their parent component.
            </div>
          </div>
          <div class='card'>
            <div class='icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>
            </div>
            <div class='title text-orange-700'>
              How to validate React props using PropTypes?
            </div>
            <div class='description text-black'>
              To validate React props using PropTypes, import PropTypes and
              declare the expected prop types in the component's propTypes
              object.
            </div>
          </div>
          <div class='card'>
            <div class='icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                />
              </svg>
            </div>
            <div class='title text-orange-700'>
              Tell us the difference between nodejs and express js.
            </div>
            <div class='description text-black'>
              Node.js is a runtime environment for executing JavaScript code,
              while Express.js is a web application framework built on top of
              Node.js.
            </div>
          </div>
          <div class='card'>
            <div class='icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
            </div>
            <div class='title text-orange-700'>
              What is a custom hook, and why will you create a custom hook?
            </div>
            <div class='description text-black'>
              A custom hook is a reusable piece of logic that can be shared
              across components, and it is created to avoid code repetition and
              make code more reusable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
