import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (!user) {
        navigate('/');
      }

      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  return { user, loading };
};

export default useAuth;