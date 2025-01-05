import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center flex-wrap bg-blue-950">
      <Link
        to="/PoidIdeal"
        className="btn btn-outline btn-lg text-gray-100 mx-2"
      >
        Poids Idéal
      </Link>
      <Link
        to="/Activite2_Books"
        className="btn btn-outline btn-lg text-gray-100 mx-2"
      >
        Activite2 Livres
      </Link>
      <Link
        to="/Activite2_Books_redux"
        className="btn btn-outline btn-lg text-gray-100 mx-2"
      >
        Activite2 Livres redux
      </Link>
      <Link
        to="/Activite2_Books_redux_Toolkit"
        className="btn btn-outline btn-lg text-gray-100 mx-2"
      >
        Activite2 Livres redux Toolkit
      </Link>
      <Link
        to="/ToDo_redux_toolkit"
        className="btn btn-outline btn-lg text-gray-100 mx-2"
      >
        To Do App with Redux Toolkit
      </Link>
      <Link
        to="/Crud_redux_toolkit"
        className="btn btn-outline btn-lg text-gray-100 mx-2"
      >
        CRUD With RTK
      </Link>
    </div>
  );
}
