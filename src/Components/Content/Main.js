
import React, { Fragment } from "react";


/* Import Data */
import Data from "./Data.json";
/* Import Components */
import Nav from "./Nav";



const Main = () => {
  return (



    <header className="Home">
      
     <Nav/>
    
  

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
<h1>fa</h1>

    </header>

  );
};

export default Main;
