import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';

// "!" is a non-nullable type assertion operator in TypeScript
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
