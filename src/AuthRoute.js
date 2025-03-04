import { useNavigate } from 'react-router-dom'; 
import useAuth from './useAuth';

const AuthRoute = ({ element: Component }) => {
  const { user, loading } = useAuth();

  // console.log(user?.emailVerified)
  
  const navigate = useNavigate()

  if (user) {
    navigate('/home')
  }

  return Component;
};

export default AuthRoute;