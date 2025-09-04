import errorimg from "../../assets/404.png"
const ErrorPage = () => {
  return (
    <div className="">
      <img src={errorimg} className="w-full h-screen object-contain" alt="Error: page not found" />
    </div>
  );
};

export default ErrorPage;
