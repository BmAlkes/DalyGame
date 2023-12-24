import GameCard from "@/components/GameCard";
import Container from "@/components/container";
import Input from "@/components/input";
import { GameProps } from "@/utils/types/game";
import React from "react";
async function getGame(title: string) {
  try {
    const decodeTitle = decodeURI(title);
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );
    return res.json();
  } catch (error) {
    return null;
  }
}

const Search = async ({ params: { title } }: { params: { title: string } }) => {
  const game: GameProps[] = await getGame(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base:{" "}
        </h1>
        {!game && <p>Esse jogo nao foi encontrado!...</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {game && game.map((item) => <GameCard key={item.id} data={item} />)}
        </section>
      </Container>
    </main>
  );
};

export default Search;
