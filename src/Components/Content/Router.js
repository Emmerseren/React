import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main";
import WhatWeDo from "./WhatWeDo";
import MaintainAble from "./MaintainAble";
import GetInTouch from "./GetInTouch";

const Routing = () => {

    return (
     
    
    <Router>
<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/MaintainAble" element={<MaintainAble />} />
  <Route path="/GetInTouch" element={<GetInTouch />} />
  <Route path="/WhatWeDo" element={<WhatWeDo />} />
</Routes>
</Router>
    
     
    )
   };
   export default Routing;
