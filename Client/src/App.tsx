import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import Navbar from './Components/Navbar'
import { userService } from './Services/UserService'

export default function App() {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // Save the account to the database once Auth0 confirms the user is authenticated
  useEffect(() => {
    const saveUser = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        await userService.createUser(
          { auth0Id: user?.sub, email: user?.email, name: user?.name },
          accessToken
        );
      } catch (error) {
        console.error("Failed to save user:", error);
      }
    };

    if (isAuthenticated) {
      saveUser();
    }
  }, [isAuthenticated]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
