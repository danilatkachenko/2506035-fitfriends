import { createBrowserRouter } from 'react-router-dom';
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
    element: <QuestionnaireUserPage />,
  },
  {
    path: '/questionnaire-coach',
    element: <QuestionnaireCoachPage />,
  },
  {
    path: '/training-catalog',
    element: <TrainingCatalogPage />,
  },
  {
    path: '/diary',
    element: <TrainingDiaryPage />,
  },
  {
    path: '/training',
    element: <TrainingCardUserPage />,
  },
  {
    path: '/user-coach',
    element: <UserCardCoachPage />,
  },
  {
    path: '/user-coach-view',
    element: <UserCardCoachWithoutButtonPage />,
  },
  {
    path: '/user-user',
    element: <UserCardUserPage />,
  },
  {
    path: '/users',
    element: <UsersCatalogPage />,
  },
  {
    path: '/training-card-coach',
    element: <TrainingCardCoachPage />,
  },
  {
    path: '/account-coach',
    element: <PersonalAccountCoachPage />,
  },
  {
    path: '/account-user',
    element: <PersonalAccountUserPage />,
  },
  {
    path: '/my-trainings',
    element: <MyTrainingsPage />,
  },
  {
    path: '/my-purchases',
    element: <MyPurchasesPage />,
  },
  {
    path: '/my-orders',
    element: <MyOrdersPage />,
  },
  {
    path: '/create-training',
    element: <CreateTrainingPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/friends-coach',
    element: <FriendsListCoachPage />,
  },
  {
    path: '/friends-user',
    element: <FriendsListUserPage />,
  }
]);
