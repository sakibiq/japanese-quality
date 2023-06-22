import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast('nice');
};

const Chefcards = () => {
  const { id } = useParams();
  const eachChefcards = useLoaderData();

  const [isDisabled, setIsDisabled] = useState(false);

  const notify = () => {
    setIsDisabled(true);
    toast.success('Recipe added');
  };

  return (
    <div>
      <div className='flex flex-row w-full  bg-gray-100'>
        <div className='flex flex-col gap-3 text-center w-1/4  shadow-md p-8 bg-orange-300 '>
          <img
            src={eachChefcards.picture}
            alt='User Photo'
            className='w-32 h-32 rounded-full mx-auto mb-4'
          />
          <h2 className='text-lg font-medium text-gray-800 text-center'>
            {eachChefcards.name}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            impedit vitae quo quisquam, nostrum ipsum distinctio modi eaque
            neque ad
          </p>
          <p>Experience: {eachChefcards.years_of_experience} Years</p>
          <p>Number of Recipes: {eachChefcards.num_recipes}</p>
          <p>Likes: {eachChefcards.likes}</p>
        </div>

        <div className='flex-1 bg-purple-200 p-8'>
          <div className='max-w-lg mx-auto'>
            <div className='bg-gray-200 w-auto rounded-lg text-center'>
              <h3 className='text-4xl text-center font-medium text-gray-800 mb-6'>
                Best 3 Recipe from {eachChefcards.name}
              </h3>
              {eachChefcards.recipes &&
                eachChefcards.recipes.map((eachcard) => (
                  <div key={eachChefcards.id}>
                    <div className='flex flex-col gap-5'>
                      <h1 className='text-center text-3xl font-Stylish'>
                        {eachcard.name}
                      </h1>
                      <button
                        onClick={notify}
                        disabled={isDisabled}
                        className='mx-auto rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300 '
                      >
                        {isDisabled ? 'Added' : 'Favourite'}
                      </button>
                      <ToastContainer></ToastContainer>
                    </div>
                    <p className='text-gray-700 pt-5 w-96 mx-auto font-Stylish'>
                      Ingredients: <br />
                      {eachcard.ingredients}
                    </p>
                    <p className='text-gray-700 pt-5 pb-6 w-96 mx-auto font-Stylish'>
                      cooking method: <br />
                      {eachcard.cooking_method}
                    </p>
                    <div className='h-4 bg-purple-200 w-screen p-7 '></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefcards;
