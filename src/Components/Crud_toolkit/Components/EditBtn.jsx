import { X, User, Mail, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "../features/CrudSlice";

export default function EditBtn(props) {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.crud.users);
  const selectedUser = usersList.find((user) => user.id === props.userId);
  const [formValues, setFormValues] = useState({
    userName: "",
    age: "",
    email: "",
    id: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(Edit(formValues));
    document.getElementById(`edit_modal_${props.userId}`).close();
  };

  useEffect(() => {
    if (selectedUser) {
      setFormValues(selectedUser);
    }
  }, [selectedUser]);

  return (
    <div>
      <button
        className="btn btn-outline btn-success text-gray-100"
        onClick={() => document.getElementById(`edit_modal_${props.userId}`).showModal()}
      >
        Edit
      </button>
      <dialog
        id={`edit_modal_${props.userId}`}
        className="modal"
        aria-label="Edit user form"
        role="dialog"
      >
        <div className="modal-box w-11/12 max-w-2xl rounded-xl shadow-2xl p-6 bg-gray-800 text-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Edit user</h3>
            <form method="dialog">
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <X size={24} className="text-gray-100" />
              </button>
            </form>
          </div>

          <form className="space-y-6" onSubmit={HandleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="text-gray-400" size={20} />
              </div>
              <input
                onChange={HandleChange}
                name="userName"
                value={formValues.userName}
                type="text"
                placeholder="Name of user"
                className="w-full pl-12 pr-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Calendar className="text-gray-400" size={20} />
              </div>
              <input
                onChange={HandleChange}
                name="age"
                type="number"
                placeholder="Age"
                className="w-full pl-12 pr-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                required
                min="1"
                max="100"
                value={formValues.age}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="text-gray-400" size={20} />
              </div>
              <input
                onChange={HandleChange}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                required
                value={formValues.email}
              />
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <form method="dialog">
                <button className="px-6 py-2.5 border border-gray-600 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors">
                  Cancel
                </button>
              </form>

              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}