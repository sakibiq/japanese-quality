import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Activelink from '../../ActiveLink/Activelink';

const Header = () => {
  return (
    <div>
      <div className='flex items-center space-x-16 justify-center'>
        <p className='font-bold'>81 3-3669-3855</p>
        <img
          className='h-40 mx-auto m-10'
          src='https://i.ibb.co/xJBxHvT/logo.png'
          alt=''
        />
        <p className='font-bold'> 315, Chen Street</p>
      </div>
      <div>
        <hr />

        <div className='navbar bg-base-100  flex flex-col'>
          <div className='mx-auto'>
            <ul className='menu menu-horizontal font-Stylish'>
              <li>
                <Activelink to='/'>Home</Activelink>
              </li>
              <li>
                <Activelink to='/blog'>Blog</Activelink>
              </li>
              <li>
                <Activelink to='/reservation'>Reservation</Activelink>
              </li>
              <li>
                <Activelink to='/order'>Order Online</Activelink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
