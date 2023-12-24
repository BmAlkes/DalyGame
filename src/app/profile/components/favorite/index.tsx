"use client";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Favorite = () => {
  const [input, setInput] = useState("");
  const [showinput, setShowinput] = useState(false);
  const [gameName, setGameName] = useState("");

  const handleButton = () => {
    setShowinput(!showinput);
    if (input !== "") {
      setGameName(input);
    }
    setInput("");
  };
  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white roudend-lg flex justify-between flex-col">
      {showinput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md h-8 text-black px-2"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={handleButton}>
            <FiX size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all"
          onClick={handleButton}
        >
          <FaEdit size={24} color="#fff" />
        </button>
      )}
      {gameName && (
        <div>
          <span className="text-white">Jogo Favorito</span>
          <p className="font-bold text-white">{gameName}</p>
        </div>
      )}
      {!gameName && <p className="font-bold text-white">Adicionar jogo</p>}
    </div>
  );
};

export default Favorite;
