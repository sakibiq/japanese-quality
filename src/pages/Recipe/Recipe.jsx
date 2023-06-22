import React, { useEffect, useState } from 'react';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://asia-garden-sakibiq001-gmailcom.vercel.app/chefcards')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <div>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className='flex flex-row w-full h-screen bg-gray-100'
          >
            <div className='flex-none w-1/4 bg-white shadow-md p-8'>
              <img
                src='https://via.placeholder.com/150'
                alt='User Photo'
                className='w-32 h-32 rounded-full mx-auto mb-4'
              />
              <h2 className='text-lg font-medium text-gray-800 text-center'>
                {recipe.name}
              </h2>
            </div>

            <div className='flex-1 bg-white p-8'>
              <div className='max-w-lg mx-auto'>
                <div className='bg-gray-200 rounded-lg p-6'>
                  <h3 className='text-lg font-medium text-gray-800 mb-4'>
                    Bio
                  </h3>
                  <p className='text-gray-700'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor. Cras elementum
                    ultrices diam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
