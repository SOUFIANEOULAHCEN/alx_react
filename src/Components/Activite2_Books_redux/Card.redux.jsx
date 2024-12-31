import Button from "./Button.redux";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  const cte = useSelector((state) => state.cte);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div
      key={props.value.id}
      className="card bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden w-96 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Section */}
      <figure>
        <img
          src={props.value.image}
          alt={props.value.title}
          className="object-cover max-h-48 w-full"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {props.value.title}
        </h2>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          {props.value.author}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">
          {props.value.description}
        </p>

        {/* Actions */}
        <div className="card-actions flex justify-end">
          <Button cte={cte} increment={increment} />
        </div>
      </div>
    </div>
  );
}
