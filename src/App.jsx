import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalculPoid from "./Components/CalculPoid";
import HomePage from "./routes/HomePage";
import HomeBooks from "./Components/Activite2_Books/HomeBooks";
import HomeBooksRedux from "./Components/Activite2_Books_redux/HomeBooks.redux";
import HomeBooksToolkit from "./Components/activite2_Books_toolkit/HomeBooksToolkit";
import ToDoApp from "./Components/ToDo_redux_toolkit/ToDoApp";
import CrudApp from "./Components/Crud_toolkit/CrudApp";

export default function App() {
  return (
   <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/PoidIdeal" element={<CalculPoid />} />
      <Route path="/Activite2_Books" element={<HomeBooks />} />
      <Route path="/Activite2_Books_redux" element={<HomeBooksRedux />} />
      <Route path="/Activite2_Books_redux_Toolkit" element={<HomeBooksToolkit />} />
      <Route path="/ToDo_redux_toolkit" element={<ToDoApp></ToDoApp> } />
      <Route path="/Crud_redux_toolkit" element={<CrudApp></CrudApp> } />
    
    </Routes>
    </BrowserRouter>
   </div>
   
  )
}