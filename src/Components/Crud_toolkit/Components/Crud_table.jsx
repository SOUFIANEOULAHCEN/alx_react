import { useSelector, useDispatch } from "react-redux";
import { Delete } from "../features/CrudSlice";
import EditBtn from "./EditBtn";
export default function Crud_table() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.crud.users);
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            console.log("Passing ID:", user.id);
            return (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.userName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td className="flex gap-3 justify-center items-center">
                  {/* <button className="btn btn-accent btn-outline">Edit</button> */}
                  <EditBtn userId={user.id}></EditBtn>
                  {/* <EditBtn userId={index + 1}></EditBtn> */}
                  <button
                    className="btn btn-error btn-outline"
                    onClick={() => {
                      dispatch(Delete(user.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
