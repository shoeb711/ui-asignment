import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainContainer } from './globalStyle';
import './App.css';
import { PATHS } from './constant';

import Login from './components/login';
import SignUp from './components/signup';
import Loader from './components/loader';
import Store from './components/store';

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={PATHS.login} element={<Login />} />
            <Route path={PATHS.signup} element={<SignUp />} />
            <Route path={PATHS.store} element={<Store />} />
          </Routes>
        </Suspense>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
