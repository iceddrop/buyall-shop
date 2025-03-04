import { Sidebar } from "flowbite-react";
import { IoPhonePortrait, IoLogOut, IoCarSportSharp, IoMale, IoFemale, IoHome } from "react-icons/io5";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaTimes} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import whitelogo from "../../assets/chevron-right.svg";
import blacklogo from "../../assets/chevron-direction-right-icon.svg";
import { MdChair } from "react-icons/md";
import { useCategoryStore } from "../../store/store";
const Sidebarcomp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { changeCategoryState} = useCategoryStore();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="fixed  sm:hidden " onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <p></p>
        ) : (
          <GiHamburgerMenu className="icon-two text-white mt-4 text-2xl" />
        )}
      </button>
      <Sidebar
        aria-label="Sidebar with content separator example"
        className={
          isSidebarOpen
            ? "fixed w-30 h-full z-10 pb-16 sm:pb-0"
            : "fixed  w-20 side-bar h-full hidden md:block z-10 pb-16 sm:pb-0"
        }
      >
        <Sidebar.Logo
          href="#"
          onClick={toggleSidebar}
          img={isSidebarOpen ? whitelogo : blacklogo}
          imgAlt="afridata logo"
          className="text-family"
        >
          <button onClick={toggleSidebar}>
            <FaTimes className={isSidebarOpen ? " ml-28" : "text-white"} />
          </button>
        </Sidebar.Logo>
        <Sidebar.Items className="flowbite-sidebar-item-group flex flex-col h-full">
          <Sidebar.ItemGroup className="text-family flowbite-sidebar-item-group">
            <Link to="/home">
              <Sidebar.Item className="mt-6 h-16 w-36" icon={IoHome}>
                {isSidebarOpen ? "Home" : ""}
              </Sidebar.Item>
            </Link>
            <Sidebar.Collapse className="h-16 w-36" icon={IoPhonePortrait} label={isSidebarOpen ? "Technology" : ""}>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('smartphones')}>Phones</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('laptops')}>Laptop</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('tablets')}>Tablets</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={IoCarSportSharp} label={isSidebarOpen ? "Auto" : ""}>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('motorcycle')}>Motorcycles</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('vehicle')}>Vehicles</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={GiDelicatePerfume} label={isSidebarOpen ? "Cosmetics" : ""}>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('beauty')}>Beauty</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('fragrances')}>Fragrance</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('skin-care')}>Skin care</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={MdChair} label={isSidebarOpen ? "Furnishing" : ""}>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('furniture')}>Furniture</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('home-decoration')}>Home decorations</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('kitchen-accessories')}>Kitchen accessories</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={IoMale} label={isSidebarOpen ? "Men" : ""}>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('mens-shirts')}>Shirts</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('mens-shoes')}>Shoes</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('mens-watches')}>Watches</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={IoFemale} label={isSidebarOpen ? "Women" : ""}>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('womens-bags')}>Bags</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('womens-dresses')}>Dresses</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('womens-jewellery')}>Jewellery</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('womens-shoes')}>Shoes</Sidebar.Item></Link>
             <Link to='/category'><Sidebar.Item href="#" onClick={() => changeCategoryState('womens-watches')}>Watches</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Link to="/">
              <Sidebar.Item
                className="mt-6 mb-10 w-36"
                onClick={() => signOut()}
                icon={IoLogOut}
              >
                {isSidebarOpen ? "Logout" : ""}
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default Sidebarcomp;
