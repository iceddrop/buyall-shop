import { DarkThemeToggle } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import { HiLightBulb } from "react-icons/hi";
import { FaWallet, FaWifi, FaGift } from "react-icons/fa";
import { MdWifiCalling3, MdContactPhone } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { FaCode,  FaTimes, FaHistory } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import whitelogo from "../../assets/chevron-right.svg";
import blacklogo from "../../assets/chevron-direction-right-icon.svg"
const Sidebarcomp = () => {
    

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <button className="fixed  sm:hidden " onClick={toggleSidebar}>{isSidebarOpen ? <p></p>: <GiHamburgerMenu className="icon-two text-white" />}</button>
            <Sidebar aria-label="Sidebar with content separator example" className={isSidebarOpen ? "fixed w-30 h-full z-10 pb-16 sm:pb-0" : "fixed  w-20 side-bar h-full hidden md:block z-10 pb-16 sm:pb-0"}>
            <Sidebar.Logo href="#" onClick={toggleSidebar} img={isSidebarOpen ? whitelogo : blacklogo} imgAlt="afridata logo" className="text-family"><button onClick={toggleSidebar}>< FaTimes className={isSidebarOpen ? " ml-28" : "text-white"}/></button></Sidebar.Logo>
                <Sidebar.Items className="flowbite-sidebar-item-group flex flex-col h-full">
                    <Sidebar.ItemGroup className="text-family flowbite-sidebar-item-group">
                        <Link to="/dashboard">
                            <Sidebar.Item className='' icon={MdSpaceDashboard}>
                                {isSidebarOpen ? "Dashboard" : ""}
                            </Sidebar.Item>
                        </Link>
                        <Link to="/fundwallet">
                            <Sidebar.Item className='mt-6' icon={FaWallet}>
                                {isSidebarOpen ? "Fund Wallet" : ""}
                            </Sidebar.Item>
                        </Link>
                        <Link to="/buydata"><Sidebar.Item className='mt-6' icon={FaWifi}>
                            {isSidebarOpen ? "Buy Data" : ""}
                        </Sidebar.Item></Link>
                        <Link to="/buyairtime"><Sidebar.Item className='mt-6' icon={MdWifiCalling3}>
                            {isSidebarOpen ? "Buy Airtime" : ""}
                        </Sidebar.Item></Link>
                        <Link to="/paytv"><Sidebar.Item className='mt-6' >
                            {isSidebarOpen ? "TV Cable Bill" : ""}
                        </Sidebar.Item></Link>
                        <Link to="/payelectricity"><Sidebar.Item className='mt-6' icon={HiLightBulb}>
                            {isSidebarOpen ? "Pay Electricity Bill" : ""}
                        </Sidebar.Item></Link>
                        <Link to="/referral"><Sidebar.Item className='mt-6' icon={FaGift}>
                            {isSidebarOpen ? "Refferal & Earning" : ""}
                        </Sidebar.Item></Link>
                        <div className="hidden lg:flex flex-col">
                            <Link to="/transactions" className="pt-4"><Sidebar.Item icon={FaHistory}>
                                {isSidebarOpen ? "Transaction  History" : ""}
                            </Sidebar.Item></Link>
                            <Link to="/profile" className="pt-4"><Sidebar.Item >
                                {isSidebarOpen ? "Profile" : ""}
                            </Sidebar.Item></Link>
                        </div>
                        <Link to="/"><Sidebar.Item className='mt-6' icon={IoSettings}>
                            {isSidebarOpen ? "Settings" : ""}
                        </Sidebar.Item></Link>
                        <Link to="/"><Sidebar.Item className='mt-6' icon={FaCode}>
                            {isSidebarOpen ? "Developer" : ""}
                        </Sidebar.Item></Link>
                        <Link to="/"><Sidebar.Item className='mt-6' icon={MdContactPhone}>
                            {isSidebarOpen ? "Contact us" : ""}
                        </Sidebar.Item></Link>
                        <Link to="/"><Sidebar.Item className='mt-6 mb-10' onClick={() => signOut()} icon={IoLogOut}>
                            {isSidebarOpen ? "Logout" : ""}
                        </Sidebar.Item></Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    );
}

export default Sidebarcomp;