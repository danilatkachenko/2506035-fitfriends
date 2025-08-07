import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import IntroPage from '../pages/IntroPage.tsx';
import SignInPage from '../pages/SignInPage.tsx';
import SignUpPage from '../pages/SignUpPage.tsx';
import QuestionnaireUserPage from '../pages/QuestionnaireUserPage.tsx';
import QuestionnaireCoachPage from '../pages/QuestionnaireCoachPage.tsx';
import TrainingCatalogPage from '../pages/TrainingCatalogPage.tsx';
import TrainingDiaryPage from '../pages/TrainingDiaryPage.tsx';
import TrainingCardUserPage from '../pages/TrainingCardUserPage.tsx';
import UserCardCoachPage from '../pages/UserCardCoach.tsx';
import UserCardCoachWithoutButtonPage from '../pages/UserCardCoachWithoutButtonPage.tsx';
import UserCardUserPage from '../pages/UserCardUserPage.tsx';
import UsersCatalogPage from '../pages/UsersCatalogPage.tsx';
import TrainingCardCoachPage from '../pages/TrainingCardCoachPage';
import PersonalAccountCoachPage from '../pages/PersonalAccountCoachPage';
import PersonalAccountUserPage from '../pages/PersonalAccountUserPage';
import MyTrainingsPage from '../pages/MyTrainingsPage';
import MyPurchasesPage from '../pages/MyPurchasesPage';
import MyOrdersPage from '../pages/MyOrdersPage';
import HomePage from '../pages/HomePage.tsx';
import CreateTrainingPage from '../pages/CreateTrainingPage.tsx';
import FriendsListCoachPage from '../pages/FriendsListCoachPage.tsx';
import FriendsListUserPage from '../pages/FriendsListUserPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IntroPage />,
  },
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/register',
    element: <SignUpPage />,
  },
  {
    path: '/questionnaire-user',
    element: <ProtectedRoute><QuestionnaireUserPage /></ProtectedRoute>,
  },
  {
    path: '/questionnaire-coach',
    element: <ProtectedRoute><QuestionnaireCoachPage /></ProtectedRoute>,
  },
  {
    path: '/training-catalog',
    element: <ProtectedRoute><TrainingCatalogPage /></ProtectedRoute>,
  },
  {
    path: '/diary',
    element: <ProtectedRoute><TrainingDiaryPage /></ProtectedRoute>,
  },
  {
    path: '/training',
    element: <ProtectedRoute><TrainingCardUserPage /></ProtectedRoute>,
  },
  {
    path: '/user-coach',
    element: <ProtectedRoute><UserCardCoachPage /></ProtectedRoute>,
  },
  {
    path: '/user-coach-view',
    element: <ProtectedRoute><UserCardCoachWithoutButtonPage /></ProtectedRoute>,
  },
  {
    path: '/user-user',
    element: <ProtectedRoute><UserCardUserPage /></ProtectedRoute>,
  },
  {
    path: '/users',
    element: <ProtectedRoute><UsersCatalogPage /></ProtectedRoute>,
  },
  {
    path: '/training-card-coach',
    element: <ProtectedRoute><TrainingCardCoachPage /></ProtectedRoute>,
  },
  {
    path: '/account-coach',
    element: <ProtectedRoute><PersonalAccountCoachPage /></ProtectedRoute>,
  },
  {
    path: '/account-user',
    element: <ProtectedRoute><PersonalAccountUserPage /></ProtectedRoute>,
  },
  {
    path: '/my-trainings',
    element: <ProtectedRoute><MyTrainingsPage /></ProtectedRoute>,
  },
  {
    path: '/my-purchases',
    element: <ProtectedRoute><MyPurchasesPage /></ProtectedRoute>,
  },
  {
    path: '/my-orders',
    element: <ProtectedRoute><MyOrdersPage /></ProtectedRoute>,
  },
  {
    path: '/create-training',
    element: <ProtectedRoute><CreateTrainingPage /></ProtectedRoute>,
  },
  {
    path: '/home',
    element: <ProtectedRoute><HomePage /></ProtectedRoute>,
  },
  {
    path: '/friends-coach',
    element: <ProtectedRoute><FriendsListCoachPage /></ProtectedRoute>,
  },
  {
    path: '/friends-user',
    element: <ProtectedRoute><FriendsListUserPage /></ProtectedRoute>,
  }
]);
