import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import { Outlet } from 'react-router-dom';
import Chefs from '../pages/Home/Chefs/Chefs';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
