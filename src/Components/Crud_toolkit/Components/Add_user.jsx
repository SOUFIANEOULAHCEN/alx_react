import { Plus, X, User, Mail, Calendar } from "lucide-react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { Add } from "../features/CrudSlice";
export default function AddUser() {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value.trim() !== "" &&
      ageRef.current.value !== "" &&
      emailRef.current.value.trim() !== ""
    ) {
      const NewUser = {
        id: uuidv4(),
        userName: nameRef.current.value.trim(),
        age: ageRef.current.value,
        email: emailRef.current.value.trim(),
      };
      dispatch(Add(NewUser));
      e.target.reset();
      document.getElementById("my_modal_4").close();
    }
  };
  return (
    <div className="w-full mt-1 mb-5 text-gray-900">
      <button
        className="flex items-center gap-2 px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-md"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <Plus size={20} />
        <span>Add user</span>
      </button>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-2xl bg-white rounded-xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Adding new user
            </h3>
            <form method="dialog">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} className="text-gray-500" />
              </button>
            </form>
          </div>

          <form className="space-y-6" onSubmit={HandleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Name of user"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
                ref={nameRef}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Calendar className="text-gray-400" size={20} />
              </div>
              <input
                type="number"
                placeholder="Age"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
                min="1"
                max="100"
                ref={ageRef}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="text-gray-400" size={20} />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
                ref={emailRef}
              />
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <form method="dialog">
                <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
              </form>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
