import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Banner from '../layouts/Banner/Banner';
import Login from '../pages/Home/Login/Login';
import Register from '../pages/Register/Register';

import Chefcards from '../pages/Chefcards/Chefcards';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Blog from '../pages/Blog/Blog';
import Error from '../pages/Error/Error';
import Reservation from '../pages/Reservation/Reservation';
import Order from '../pages/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/reservation',
        element: <Reservation></Reservation>,
      },
      {
        path: '/order',
        element: <Order></Order>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/chefcards/:id',
        element: (
          <PrivateRoute>
            <Chefcards></Chefcards>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://asia-garden-sakibiq001-gmailcom.vercel.app/chefcards/${params.id}`
          ),
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
