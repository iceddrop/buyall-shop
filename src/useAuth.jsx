import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);

        // Set a timer for session expiration
        const sessionDuration = 30 * 60 * 1000; // 30 minutes
        const timer = setTimeout(() => {
          auth
            .signOut()
            .then(() => {
              console.log("User signed out after session expiration.");
              navigate("/"); // Redirect to login or homepage after sign out
            })
            .catch((error) => {
              console.error("Error signing out:", error);
            });
        }, sessionDuration);

        return () => clearTimeout(timer); // Clear timer on cleanup
      } else {
        setUser(null);
        setLoading(false);
        navigate("/"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useAuth;