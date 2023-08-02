import {GrSearch} from "react-icons/gr";
import "../../index.css";
import "./Nav.css";
export default function Searchcomp(){
    return(
        <>
                <form className="search-form">
                <div className="search-div">
                    <input type="text" className="search-input" name="search" id="searchInput" placeholder="search product"/>
                    <GrSearch className="search-icon"/>
                </div> 
                </form>
        </>
    )
}