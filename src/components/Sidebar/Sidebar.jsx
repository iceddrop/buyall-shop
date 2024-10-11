import { Sidebar } from "flowbite-react";
import { FaWallet} from "react-icons/fa";
import { IoPhonePortrait, IoLogOut, IoCarSportSharp, IoMale, IoFemale } from "react-icons/io5";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaTimes} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import whitelogo from "../../assets/chevron-right.svg";
import blacklogo from "../../assets/chevron-direction-right-icon.svg";
import { MdChair } from "react-icons/md";
const Sidebarcomp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <Link to="/fundwallet">
              <Sidebar.Item className="mt-6 h-16 w-36" icon={FaWallet}>
                {isSidebarOpen ? "Home" : ""}
              </Sidebar.Item>
            </Link>
            <Sidebar.Collapse className="h-16 w-36" icon={IoPhonePortrait} label={isSidebarOpen ? "Technology" : ""}>
             <Link><Sidebar.Item href="#">Phones</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Laptop</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Tablets</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={IoCarSportSharp} label={isSidebarOpen ? "Auto" : ""}>
             <Link><Sidebar.Item href="#">Motorcycles</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Vehicles</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={GiDelicatePerfume} label={isSidebarOpen ? "Cosmetics" : ""}>
             <Link><Sidebar.Item href="#">Beauty</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Fragrance</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Skin care</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={MdChair} label={isSidebarOpen ? "Furnishing" : ""}>
             <Link><Sidebar.Item href="#">Furniture</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Home decorations</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Kitchen accessories</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={IoMale} label={isSidebarOpen ? "Men" : ""}>
             <Link><Sidebar.Item href="#">Shirts</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Shoes</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Watches</Sidebar.Item></Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse className="h-16 w-36" icon={IoFemale} label={isSidebarOpen ? "Women" : ""}>
             <Link><Sidebar.Item href="#">Bags</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Dresses</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Jewellery</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Shoes</Sidebar.Item></Link>
             <Link><Sidebar.Item href="#">Watches</Sidebar.Item></Link>
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
