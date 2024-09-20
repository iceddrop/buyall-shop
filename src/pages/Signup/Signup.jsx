import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import PacmanLoader from "react-spinners/PacmanLoader";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const color = "white";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, email } = formData;
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          navigate("/");
        }
      );
    } catch (error) {
      setError(errorMessage);
      // ..
    } finally {
      setLoading(false);
    }
  };

  console.log(formData);
  return (
    <div className="flex justify-center items-center h-96 pt-40">
      <div className="bg-green-500 flex flex-col rounded-md py-14">
        <img src={logo} alt="Shopcart-logo" className="px-20" />
        <form className="flex flex-col px-8">
          <h4 className="text-center text-3xl font-bold text-white mt-4">
            Register
          </h4>
          <label className="font-bold text-white mt-2">Email</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="h-10 pl-2"
            placeholder="Type in your Email"
          />
          <label className="font-bold text-white mt-4">Password</label>
          <input
            type="password"
            className="h-10 pl-2"
            placeholder="Type in your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
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
                "Signup"
              )}
            </button>
          </div>

          <span className="text-center mt-8 text-white">
            Already have an account?{" "}
            <Link to="/" className="underline hover:text-black">
              Login
            </Link>
          </span>
        </form>
        <p className="text-center text-red-700">{error}</p>
      </div>
    </div>
  );
};

export default Signup;
