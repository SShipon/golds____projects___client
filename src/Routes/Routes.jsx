import { createBrowserRouter } from 'react-router-dom';
import About from '../component/About/About';
import Cart from '../component/Cart/Cart';
import Contact from '../component/Contact/Contact';
import AddJewellary from '../component/Dashboard/AddJewellary/AddJewellary';
import Dashboard from '../component/Dashboard/Dashboard';
import MyOrder from '../component/Dashboard/MyOrder/MyOrder';
import Review from '../component/Dashboard/Review/Review';
import DetailPage from '../component/DetailsPage/DetailPage';
import Jewellary from '../component/Jewellary/Jewellary';
import Pearl from '../component/Pearl/Pearl';
import Login from '../component/Shared/Login/Login';
import RequireAuth from '../component/Shared/Login/RequireAuth';
import Signup from '../component/Shared/Signup/Signup';

import Wedding from '../component/Wedding/Wedding';
import Main from '../Layout/Main';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Jewellary></Jewellary>,
      },
      {
        path: '/wedding',
        element: <Wedding></Wedding>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/pearl',
        element: (
          <RequireAuth>
            <Pearl></Pearl>
          </RequireAuth>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/dashboard',
        element: (
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        ),
        children: [
          {
            path: '/dashboard/myorder',
            element: <MyOrder></MyOrder>,
          },
          {
            path: '/dashboard/addjewellary',
            element: <AddJewellary></AddJewellary>,
          },
          {
            path: '/dashboard/review',
            element: <Review></Review>,
          },
        ],
      },

      {
        path: '/detailPage/:id',
        element: <DetailPage></DetailPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/golds/${params.id}`),
      },
      {
        path: '/detailsPage/:id',
        element: <DetailPage></DetailPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/diamonds/${params.id}`),
      },
    ],
  },
]);
