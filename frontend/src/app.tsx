import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/sign-in-page';
import SignUpPage from './pages/sign-up-page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
