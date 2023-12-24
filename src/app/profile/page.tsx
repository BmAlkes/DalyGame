import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import userImg from "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";
import Favorite from "./components/favorite";

const Profile = () => {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal  ">
            <Image
              src={userImg}
              alt="Imagem perfil do usuario"
              className="w-56 h-56 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">User</h1>
          </div>
          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configuracoes
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} color="#fff" />
            </button>
          </div>
        </section>
        <section className="flex flex-wrap gap-5 flex-col md:flex-row ">
          <div className="flex-grow flex-warp">
            <Favorite />
          </div>
          <div className="flex-grow flex-warp">
            <Favorite />
          </div>
          <div className="flex-grow flex-warp">
            <Favorite />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Profile;
