import React from "react";
import Data from "./Data.json";
import {Link, NavLink} from "react-router-dom";

const Nav = () => {

    

return(

    <nav className="navContainer">
        
      
    {Data.navigation.map((navData, index) => {
        return (
            <NavLink to={Data.navigation[index].link} key={navData.id} className = {Data.navigation[index].class}>
          
            <img src={Data.navigation[index].navBox} alt="" />
          
            </NavLink>
      );
    })}


        <NavLink to="/" className="nou-container">
    <div className="nou"> <img src="../assets/logo/logo-final.png"/></div>
        </NavLink>
  </nav>
);


}

export default Nav