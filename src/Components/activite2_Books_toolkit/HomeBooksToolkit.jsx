import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { toggleTheme } from "./ThemeSlice";
import { useNavigate } from "react-router-dom";
import { store } from "./Store";

// Create inner component that uses Redux hooks
function HomeContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className={`min-h-screen flex flex-col justify-center items-center ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => dispatch(toggleTheme())}
          />
          <div className="swap-on">🌙</div>
          <div className="swap-off">☀️</div>
        </label>
        <Counter />
        <button
          className="btn btn-warning btn-outline mt-4 w-4/5"
          onClick={() => navigate("/")}
        >
          retour
        </button>
      </div>
    </div>
  );
}

// Wrapper component with Provider
export default function HomeBooksToolkit() {
  return (
    <Provider store={store}>
      <HomeContent />
    </Provider>
  );
}
