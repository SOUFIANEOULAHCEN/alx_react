import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalculPoid from "./Components/CalculPoid";
import HomePage from "./routes/HomePage";
import HomeBooks from "./Components/Activite2_Books/HomeBooks";
import HomeBooksRedux from "./Components/Activite2_Books_redux/HomeBooks.redux";

export default function App() {
  return (
   <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/PoidIdeal" element={<CalculPoid />} />
      <Route path="/Activite2_Books" element={<HomeBooks />} />
      <Route path="/Activite2_Books_redux" element={<HomeBooksRedux />} />
    </Routes>
    </BrowserRouter>
   </div>
   
  )
}