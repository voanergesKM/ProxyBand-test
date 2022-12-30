import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/404/404';
import { HomePage } from './pages/HomePage';
// import  UsersPosts  from './pages/PostsPage';

const UserPosts = lazy(() => import('../src/pages/PostsPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/posts/:id"
          element={
            <Suspense fallback={null}>
              <UserPosts />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
