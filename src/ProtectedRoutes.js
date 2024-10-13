import { useNavigate } from 'react-router-dom'; 
import useAuth from './useAuth';

const ProtectedRoute = ({ element: Component }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate()

 
  if (!user) {
     navigate('/')
  }

 
  return Component;
};

export default ProtectedRoute;