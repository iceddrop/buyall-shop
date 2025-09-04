import { Sidebar } from "flowbite-react";
import {
  IoPhonePortrait,
  IoLogOut,
  IoCarSportSharp,
  IoMale,
  IoFemale,
  IoHome,
} from "react-icons/io5";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import whitelogo from "../../assets/chevron-right.svg";
import blacklogo from "../../assets/chevron-direction-right-icon.svg";
import { MdChair } from "react-icons/md";
import { useCategoryStore } from "../../store/store";
const Sidebarcomp = () => {
  const [isSidebarOpenOne, setIsSidebarOpenOne] = useState(false);
  const [isSidebarOpenTwo, setIsSidebarOpenTwo] = useState(false);
  const [isSidebarOpenThree, setIsSidebarOpenThree] = useState(false);
  const [isSidebarOpenFour, setIsSidebarOpenFour] = useState(false);
  const [isSidebarOpenFive, setIsSidebarOpenFive] = useState(false);
  const [isSidebarOpenSix, setIsSidebarOpenSix] = useState(false);
  const [isSidebarOpenSeven, setIsSidebarOpenSeven] = useState(false);

  const { changeCategoryState } = useCategoryStore();

  const toggleSidebar = () => {
    setIsSidebarOpenOne(!isSidebarOpenOne);
  };

  const closeSidebar = () => {
    setIsSidebarOpenOne(false);
    setIsSidebarOpenTwo(false);
    setIsSidebarOpenThree(false);
    setIsSidebarOpenFour(false);
    setIsSidebarOpenFive(false);
    setIsSidebarOpenSix(false);
    setIsSidebarOpenSeven(false);
  };

  return (
    <>
      <button className="fixed  sm:hidden " onClick={toggleSidebar}>
        {isSidebarOpenOne ? (
          <p></p>
        ) : (
          <div className="ml-4 bg-green-600 px-2" >
          <GiHamburgerMenu className="icon-two text-white mt-4 text-2xl" />
          </div>
        )}
      </button>
      <Sidebar
        aria-label="Sidebar with content separator example"
        className={
          isSidebarOpenOne
            ? "fixed w-30 h-full z-10 pb-16 sm:pb-0"
            : "fixed  w-20 side-bar h-full hidden md:block z-10 pb-16 sm:pb-0"
        }
      >
        <Sidebar.Logo
          href="#"
          onClick={toggleSidebar}
          img={isSidebarOpenOne ? whitelogo : blacklogo}
          imgAlt="afridata logo"
          className="text-family"
        >
          <button onClick={closeSidebar}>
            <FaTimes className={isSidebarOpenOne ? " ml-28" : "text-white"} />
          </button>
        </Sidebar.Logo>
        <Sidebar.Items className="flowbite-sidebar-item-group flex flex-col h-full">
          <Sidebar.ItemGroup className="text-family flowbite-sidebar-item-group">
            <Link to="/home">
              <Sidebar.Item className="mt-6 h-16 w-36" icon={IoHome}>
                {isSidebarOpenOne ? "Home" : ""}
              </Sidebar.Item>
            </Link>
            <Sidebar.Collapse
              className="h-16 w-36"
              icon={IoPhonePortrait}
              open={isSidebarOpenTwo}
              onClick={() => {
                setIsSidebarOpenOne(true);
                setIsSidebarOpenTwo((prev) => !prev);
              }}
              label={isSidebarOpenOne ? "Technology" : ""}
            >
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("smartphones")}
                >
                  Phones
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("laptops")}>
                  Laptop
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("tablets")}>
                  Tablets
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              className="h-16 w-36"
              icon={IoCarSportSharp}
                open={isSidebarOpenThree}
              onClick={() => {
                setIsSidebarOpenOne(true);
                setIsSidebarOpenThree((prev) => !prev);
              }}
              label={isSidebarOpenOne ? "Auto" : ""}
            >
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("motorcycle")}>
                  Motorcycles
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("vehicle")}>
                  Vehicles
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              className="h-16 w-36"
              icon={GiDelicatePerfume}
             open={isSidebarOpenFour}
              onClick={() => {
                setIsSidebarOpenOne(true);
                setIsSidebarOpenFour((prev) => !prev);
              }}
              label={isSidebarOpenOne ? "Cosmetics" : ""}
            >
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("beauty")}>
                  Beauty
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("fragrances")}>
                  Fragrance
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("skin-care")}>
                  Skin care
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              className="h-16 w-36"
              icon={MdChair}
              open={isSidebarOpenSeven}
                onClick={() => {
                setIsSidebarOpenOne(true);
                setIsSidebarOpenFour((prev) => !prev);
              }}
              label={isSidebarOpenOne ? "Chairs" : ""}
            >
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("furniture")}>
                  Furniture
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("home-decoration")}
                >
                  Home decorations
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("kitchen-accessories")}
                >
                  Kitchen accessories
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              className="h-16 w-36"
              icon={IoMale}
              open={isSidebarOpenFive}
                onClick={() => {
                setIsSidebarOpenOne(true);
                setIsSidebarOpenFive((prev) => !prev);
              }}
              label={isSidebarOpenOne ? "Men" : ""}
            >
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("mens-shirts")}
                >
                  Shirts
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item onClick={() => changeCategoryState("mens-shoes")}>
                  Shoes
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("mens-watches")}
                >
                  Watches
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Collapse
              className="h-16 w-36"
              icon={IoFemale}
              open={isSidebarOpenSix}
                onClick={() => {
                setIsSidebarOpenOne(true);
                setIsSidebarOpenSix((prev) => !prev);
              }}
              label={isSidebarOpenOne ? "Women" : ""}
            >
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("womens-bags")}
                >
                  Bags
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("womens-dresses")}
                >
                  Dresses
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("womens-jewellery")}
                >
                  Jewellery
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("womens-shoes")}
                >
                  Shoes
                </Sidebar.Item>
              </Link>
              <Link to="/category">
                <Sidebar.Item
                  onClick={() => changeCategoryState("womens-watches")}
                >
                  Watches
                </Sidebar.Item>
              </Link>
            </Sidebar.Collapse>
            <Link to="/">
              <Sidebar.Item
                className="mt-6 mb-10 w-36"
                onClick={() => signOut()}
                icon={IoLogOut}
              >
                {isSidebarOpenOne ? "Logout" : ""}
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default Sidebarcomp;
