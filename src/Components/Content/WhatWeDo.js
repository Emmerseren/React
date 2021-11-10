import React, { useState,} from "react";
import Nav from "./Nav";



const WhatWeDo = ({subData }) => {

 

 
  return (
    <div className="whatwedo">
        <Nav/>

      {subData.map((mapdata) => (
         <div key={subData.id}> <img src={subData} alt="" /> </div>

      ))}
    
    </div>
  );
};

export default WhatWeDo;
