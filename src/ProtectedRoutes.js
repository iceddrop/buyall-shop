import { useNavigate } from 'react-router-dom'; 
import useAuth from './useAuth';
import { useEffect } from 'react';

const ProtectedRoute = ({ element: Component }) => {
  const { user, loading } = useAuth();

  const navigate = useNavigate()


  if (!user?.emailVerified) {
    navigate('/')
 }
 



 
  return Component;
};

export default ProtectedRoute;