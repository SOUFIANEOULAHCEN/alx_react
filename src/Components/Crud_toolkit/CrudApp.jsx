import { Provider } from "react-redux";
import { CrudStore } from "./Store/CrudStore";
import Crud_table from "./Components/Crud_table";
import Add_user from "./Components/Add_user";
import { useNavigate } from "react-router-dom";
function CrudApp() {
  const navigate = useNavigate();
  return (
    <Provider store={CrudStore}>
      <div className="bg-blue-950 text-gray-100 min-h-screen w-full lg:px-10 py-5 sm:px-5">
        <h1 className="text-gray-100 text-4xl text-center font-bold p-3">
          CRUD With RTK
        </h1>
        <div className="border border-gray-100 bg-gray-100 bg-opacity-10 backdrop-blur-md rounded-lg h-auto p-3 w-11/12 mx-auto z-10">
          <Add_user></Add_user>
          <Crud_table></Crud_table>
        </div>
        <div className="w-11/12 mx-auto my-3">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-outline btn-warning w-full"
          >
            return
          </button>
        </div>
      </div>
    </Provider>
  );
}

export default CrudApp;
