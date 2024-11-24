import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Current_landing from "./Components/Current_landing"; // Your landing page component
import Welcome2 from "./Components/Welcome2"; // Your new Welcome2 component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<Current_landing />} />
        
        {/* New route for /welcome2 */}
        <Route path="/welcome2" element={<Welcome2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
