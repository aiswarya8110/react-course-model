import './App.css';
import CourseDetailsPage from './Pages/CourseDetailsPage';
import CourseListPage from './Pages/CourseListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import { Provider } from 'react-redux';
import store from './utils/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CourseListPage />
  },
  {
    path: '/course-details',
    element: <CourseDetailsPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

function App() {
  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
