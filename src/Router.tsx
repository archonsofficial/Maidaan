import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { TournamentDetailPage } from './pages/TournamentDetailPage';
import TournamentPage from './pages/TournamentPage'
import SignUpPage from './pages/SignUpPage';
import GovtSchemes from './pages/GovtSchemes';
import HostingPage from './pages/HostingPage';
import Academi from './pages/Academies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/SignUp',
    element: <SignUpPage/>,
  },
 
  {
    path: '/Tournament/Details',
    element: <TournamentDetailPage />,
  },
  
  {
    path: '/HostingPage',
    element: <HostingPage/>,
  }
]);


export function Router() {
  return <RouterProvider router={router} />;
}