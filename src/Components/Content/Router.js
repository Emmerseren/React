import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* import components */
import Main from "./Main";
import Subpage from "./Subpages";
import subData from "./Data.json";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/MaintainAble"
          element={<Subpage subData={subData.Maintainable} />}
        />
        <Route
          path="/GetInTouch"
          element={<Subpage subData={subData.getintouch} />}
        />
        <Route
          path="/WhatWeDo"
          element={<Subpage subData={subData.whatwedo} />}
        />
      </Routes>
    </Router>
  );
};
export default Routing;
