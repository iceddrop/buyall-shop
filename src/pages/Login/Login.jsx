import { Link } from "react-router-dom";
import logo from "../../assets/63e86ab4c21faa7bc0bd90dd_Logo.svg";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-96 pt-48">
      <div className="bg-green-500 flex flex-col rounded-md py-14">
        <img src={logo} alt="Shopcart-logo" className="px-20"/>
        <form className="flex flex-col px-8">
            <h4 className="text-center text-3xl font-bold text-white mt-4">Login</h4>
            <label className="font-bold text-white mt-2">Email</label>
          <input type="text" className="h-10 pl-2" placeholder="Type in your Email"/>
          <label className="font-bold text-white mt-4">Password</label>
          <input type="password" className="h-10 pl-2" placeholder="Type in your password"/>
          <div className="">
          <button type="submit" className="rounded-md font-bold mt-4 border-solid border-white border-2 p-2 w-1/2 text-white">Login</button>
          </div>
          <span className="text-center mt-8 text-white">Don't have an account? <Link to="/signup" className="underline hover:text-black">Sign up</Link></span>
          <span className="text-center mt-2 text-white">Forgot password? <Link className="underline hover:text-black">Reset password</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
