"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    if (input === "") return;
    router.push(`/game/search/${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 justify-between rounded-lg p-2"
    >
      <input
        type="text"
        placeholder=" Procurando algum jogo?..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-slate-200 outline-none w-11/12"
      />
      <button>
        <BsSearch color="#ea580c" size={24} />
      </button>
    </form>
  );
}
