import { Provider } from "react-redux";
import { CrudStore } from "./Store/CrudStore";
import Crud_table from "./Components/Crud_table";
import Add_user from "./Components/Add_user";
function CrudApp() {
  return (
    <Provider store={CrudStore}>
      <div className="bg-blue-950 text-gray-100 min-h-screen w-full lg:px-10 py-5 sm:px-5">
        <h1 className="text-gray-100 text-4xl text-center font-bold p-3">CRUD With RTK</h1>
        <div className="border border-gray-100 bg-gray-100 bg-opacity-10 backdrop-blur-md rounded-lg h-auto p-3 w-11/12 mx-auto z-10">
          <Add_user></Add_user>
          <Crud_table></Crud_table>
        </div>
      </div>
    </Provider>
  );
}

export default CrudApp;
