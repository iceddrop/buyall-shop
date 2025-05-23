import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

const Login = () => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [validationErr, setValidationErr] = useState({});
  const color = "white";

  const validateLogin = () => {
    const errs = {};

    if (!formData.email) {
      errs.email = "Email is required!";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errs.email = "Email is invalid!";
    }

    if (!formData.password) {
      errs.password = "Password is required!";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, email } = formData;
    const validationErrors = validateLogin();
    setValidationErr(validationErrors);
    try {
      if (Object.keys(validationErrors).length === 0) {
        setLoading(true);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (userCredential.user.emailVerified) {
          navigate("/home");
        } else {
          setError("Verification email sent! Please check your inbox.");
        }
      }
    } catch (error) {
      setError(error.message);
      if(error.message = "Firebase: Error (auth/invalid-credential)"){
        setError("wrong password or email!")
      } else if (error.message =  "Firebase: Error (auth/network-request-failed)"){
        setError("Check your internet connection and try again")
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-96 pt-48">
      <div className="bg-green-500 flex flex-col rounded-md py-14">
        <img src={logo} alt="Shopcart-logo" className="px-20" />
        <form className="flex flex-col px-8">
          <h4 className="text-center text-3xl font-bold text-white mt-4">
            Login
          </h4>
          <label className="font-bold text-white mt-2">Email</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="h-10 pl-2 rounded-md"
            placeholder="Type in your Email"
          />
          <p className="text-red-700">{validationErr.email}</p>
          <label className="font-bold text-white mt-4">Password</label>
          <input
            type="password"
            className="h-10 pl-2 rounded-md"
            placeholder="Type in your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <p className="text-red-700">{validationErr.password}</p>
          <div className="">
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-md font-bold mt-4 border-solid border-white border-2 p-2 w-1/2 text-white"
            >
              {loading ? (
                <PacmanLoader
                  color={color}
                  loading={loading}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Login"
              )}
            </button>
          </div>
          <span className="text-center mt-8 text-white">
            Don't have an account?{" "}
            <Link to="/signup" className="underline hover:text-black">
              Sign up
            </Link>
          </span>
          <span className="text-center mt-2 text-white">
            Forgot password?{" "}
            <Link className="underline hover:text-black">Reset password</Link>
          </span>
        </form>
        <p className="text-center text-red-700">{error}</p>
      </div>
    </div>
  );
};

export default Login;
