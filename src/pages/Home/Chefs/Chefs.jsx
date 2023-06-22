import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://asia-garden-sakibiq001-gmailcom.vercel.app/chefcards')
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className='text-center mt-7 font-extrabold text-7xl font-Stylish'>
        Best chefs
      </h1>
      <div className='grid grid-cols-3 gap-5 mt-7 w-3/4 mx-auto font-Stylish text-center'>
        {chefs.map((chef) => (
          <div key={chef.id}>
            <div className='card w-60 glass'>
              <figure>
                <img className='w-96 h-60' src={chef.picture} />
              </figure>
              <div className='card-body'>
                <h2 className='card-title mx-auto'>{chef.name}</h2>
                <p>{chef.years_of_experience} years experience</p>
                <p>Numbers of recipes: {chef.num_recipes}</p>
                <p>Likes: {chef.likes}</p>
                <div className='card-actions justify-end pt-5'>
                  <button className='btn btn-primary mx-auto'>
                    <Link to={`/chefcards/${chef.id}`}> View recipes </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
