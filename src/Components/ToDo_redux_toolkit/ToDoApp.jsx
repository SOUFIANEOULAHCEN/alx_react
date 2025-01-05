
import { Provider } from "react-redux";
import store from "./Store/Store_ToDo";
import ListeToDos from "./ListeToDos";

export default function ToDoApp() {
   
  return (
    <Provider store={store}>
      <ListeToDos />
    </Provider>
  );
}
