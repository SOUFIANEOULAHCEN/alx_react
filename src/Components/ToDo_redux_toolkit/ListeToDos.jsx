import { ListPlus } from "lucide-react";
import { TiInputChecked } from "react-icons/ti";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, completTodo } from "./features/ToDoSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";


export default function ListeToDos() {
  const navigate = useNavigate();

  // state of the input
  const [input, setInput] = useState();
  // const [isCompleted, setIsCompleted] = useState(false);

  // for dispatching actions
  const dispatch = useDispatch();

  // to recuperate data from the store
  const items = useSelector((state) => state.ToDo.items);
  const uniqueId = uuidv4();
  // const new_item = { id: uniqueId, title: input, completed: isCompleted };
  const AddHandle = () => {
    if (!input.trim()) return; // Prevent empty todos
    
    const new_item = {
      id: uniqueId,
      title: input,
      completed: false
    };
    
    dispatch(addTodo(new_item));
    setInput(''); // Clear input after adding
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center flex-wrap gap-4 bg-blue-950 text-gray-100">
      <h1 className="text-3xl">To Do App with Redux Toolkit</h1>
      <div className="lg:w-2/3 sm:w-full sm:p-5 h-auto border border-gray-100 bg-gray-100 p-4 rounded-lg shadow-lg bg-opacity-10 backdrop-blur-md">
        <label
          htmlFor=""
          className="flex items-center border border-gray-100 py-2 px-3 rounded-lg bg-gray-100 bg-opacity-20 hover:bg-opacity-30 transition duration-200"
        >
          <input
            type="text"
            className="bg-transparent focus:outline-none placeholder-gray-300 flex-grow"
            placeholder="Ajouter un élément"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button
            className="text-blue-900 text-2xl hover:scale-[1.2] hover:text-red-900 duration-500 transition"
            onClick={AddHandle}
          >
            <ListPlus className="text-gray-100 hover:text-gray-300 hover:scale-[1.1] cursor-pointer" />
          </button>
        </label>

        <div className="mt-4 border border-gray-100 rounded-lg bg-gray-100 bg-opacity-20 p-4">
          <ul>
            {items.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-100 py-2"
                >
                  {item.completed ? (
                    <span
                      className="text-blue-900  line-through font-semibold"
                      disabled
                    >
                      {item.title}
                    </span>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  {/* <span>{item.title}</span> */}

                  <button
                    onClick={() => {
                      dispatch(
                        completTodo({
                          id: item.id,
                          completed: !item.completed,
                        })
                      );
                    }}
                    disabled={item.completed}
                    className={`text-2xl transition duration-500 ${
                      item.completed
                        ? "text-gray-900 cursor-not-allowed opacity-50"
                        : "text-blue-900 hover:scale-[1.2] hover:text-red-900"
                    }`}
                  >
                    <TiInputChecked />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button
          className="btn btn-warning btn-outline mt-4 lg:w-2/3 md:w-2/3 sm:p-5"
          onClick={() => {
            navigate("/");
          }}
        >
          retour
        </button>
    </div>
  );
}
