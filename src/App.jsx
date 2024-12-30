import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalculPoid from "./Components/CalculPoid";
import HomePage from "./routes/HomePage";
import HomeBooks from "./Components/Activite2_Books/HomeBooks";

export default function App() {
  return (
   <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/PoidIdeal" element={<CalculPoid />} />
      <Route path="/Activite2_Books" element={<HomeBooks />} />
    </Routes>
    </BrowserRouter>
   </div>
   
  )
}