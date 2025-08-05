import { createBrowserRouter } from 'react-router-dom';
import SignInPage from '../pages/sign-in-page';
import SignUpPage from '../pages/sign-up-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
  },
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/register',
    element: <SignUpPage />,
  },
]);
