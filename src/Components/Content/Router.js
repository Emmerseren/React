import React, {useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main";
import WhatWeDo from "./WhatWeDo";
import MaintainAble from "./MaintainAble";
import GetInTouch from "./GetInTouch";

const Routing = () => {
  const [subData, setData] = useState([
    {
      id: 1,
      class: "whatwedo",
      img: "../assets/front-desktop/front-what-we-do-link.png",
    },
    {
      p: "But i must explain to you how all this mistaken idea of denauncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but becuase those who do not know how to pursue pleasure rationally encounter consequences that are.",
      class: "whatwedo",
      img: "",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MaintainAble" element={<MaintainAble />} />
        <Route path="/GetInTouch" element={<GetInTouch />} />
        <Route path="/WhatWeDo" element={<WhatWeDo subData={subData} />} />
      </Routes>
    </Router>
  );
};
export default Routing;
