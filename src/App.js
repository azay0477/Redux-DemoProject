import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./DetailsPage"
import Home from "./HomePage";
// import '~bootstrap/scss/bootstrap';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="detailsPage" element={<DetailsPage />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
