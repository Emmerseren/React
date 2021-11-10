
import React, { Fragment } from "react";



/* Import Components */
import Data from "./Data.json";
import Nav from "./Nav";



const Main = () => {
  return (



    <header className="Home">
      
     <Nav />
    
  

      <div className="imgContainer">
        {Data.image.map((imgData, index) => {
          return (
            <div key={imgData.id} className={Data.image[index].class}>
              <img src={Data.image[index].pic} alt="" />
              <p className="moreToCome"> {Data.image[index].ptag}</p>
            </div>
             
          );
        })}
      </div>


    </header>

  );
};

export default Main;
