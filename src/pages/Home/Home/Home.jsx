import React from 'react';
import Banner from '../../../layouts/Banner/Banner';
import Chefs from '../Chefs/Chefs';
import Testimonials from '../../Testimonials/Testimonials';
import Foods from '../../Foods/Foods';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <Testimonials></Testimonials>
      <Foods></Foods>
    </div>
  );
};

export default Home;
