import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.redux";

import { legacy_createStore } from "redux";
import { counterReducer } from "./Reducer";
import { Provider } from "react-redux";

export default function HomeBooksRedux () {
  const store = legacy_createStore(counterReducer);
  const navigate = useNavigate();
  const [Books] = useState([
    {
      id: 1,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
      description:
        "Un guide pratique pour écrire un code propre et maintenable.",
    },
    {
      id: 2,
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      image: "https://m.media-amazon.com/images/I/81gtKoapHFL.jpg",
      description:
        "Un livre classique sur les modèles de conception en programmation orientée objet.",
    },
    {
      id: 3,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      image: "https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg",
      description:
        "Un guide concis sur les meilleures pratiques en JavaScript.",
    },
  ]);

  return (
    <Provider store={store}>
      <div className="bg-blue-950 lg:h-screen sm:h-auto flex flex-col justify-center items-center ">
        <h1 className="text-5xl text-gray-100 font-bold mb-10">
          La liste des Livres
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-4">
          {Books.map((book) => (
            <Card value={book} key={book.id} />
          ))}
        </div>
        <button
          className="btn btn-warning btn-outline mt-4 w-4/5"
          onClick={() => {
            navigate("/");
          }}
        >
          retour
        </button>
      </div>
    </Provider>
  );
}
