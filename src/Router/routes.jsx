import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import Cart from '../pages/Cart.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

const routes = [
  {
    path : "/",
    element : <RootLayout />,
    errorElement: <ErrorPage />,
    children : [
      {
        path : "/",
        element : <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path : "/shop",
        element : <Shop />,
        errorElement: <ErrorPage />,
      },
      {
        path : "/cart",
        element : <Cart />,
        errorElement: <ErrorPage />,
      },
    ]
  },
];

export default routes;