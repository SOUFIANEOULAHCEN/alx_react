import { useState } from "react";
import { IoMan } from "react-icons/io5";
import { IoIosWoman } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function CalculPoid() {
  const [taille, setTaille] = useState(0);
  const [genre, setGenre] = useState("homme");
  const [poid, setPoid] = useState(0);
  const navigate = useNavigate();
  const HandlePoid = () => {
    if (isNaN(taille) && taille.trim() !== "") {
      setPoid("Veuillez entrer un nombre pour la taille");
    } else {
      genre === "homme"
        ? setPoid(taille - 100 - (taille - 150) / 4)
        : setPoid(taille - 100 - (taille - 150) / 2.5);
    }
  };
  return (
    <div className="h-screen w-full flex flex-row justify-center items-center bg-blue-950 text-gray-100">
      <div className="p-10 border-2 border-gray-100 rounded-lg w-3/4 h-3/4 bg-gray-100 bg-opacity-10 backdrop-blur-md shadow-lg flex flex-row justify-between items-center">
        {/* Conteneur des inputs */}
        <div className="w-3/4 space-y-6">
          <h1 className="text-4xl font-bold mb-6 text-gray-100 text-center">
            Calculer de Poids idéal
          </h1>
          {/* Champ pour la taille */}
          <div>
            <input
              value={taille}
              onChange={(e) => {
                setTaille(e.target.value);
              }}
              // min={85}
              type="text"
              placeholder="la taille en cm"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 bg-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sélecteur pour le genre */}
          <div>
            <select
              onChange={(e) => {
                setGenre(e.target.value);
              }}
              value={genre}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 bg-opacity-30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
               <option value="homme" className="text-gray-950">
                Homme
              </option>
              <option value="femme" className="text-gray-950">
                Femme
              </option>
            </select>
          </div>

          {/* Champ pour le poids */}
          <div>
            <input
              value={poid}
              type="text"
              placeholder="le poids en kg"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 bg-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={HandlePoid}
            className="btn btn-primary w-full btn-outline"
          >
            Calculer
          </button>
          <button
            onClick={()=>{
              navigate('/')
            }}
            className="btn btn-warning w-full btn-outline"
          >
            Retour
          </button>
        </div>

        {/* Conteneur des icônes */}
        <div className="w-1/4 flex flex-col justify-around items-center h-full">
          {genre === "homme" ? (
            <IoMan size={250} className="text-gray-100 mt-5" />
          ) : (
            <IoIosWoman size={250} className="text-white mt-5" />
          )}
        </div>
      </div>
    </div>
  );
}
