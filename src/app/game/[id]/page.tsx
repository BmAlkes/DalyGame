import Container from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import Label from "./components/label";
import GameCard from "@/components/GameCard";

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { cache: "no-store" }
    );
    return res.json();
  } catch {
    throw new Error("Failed to fecth data");
  }
}

async function getGameSorted() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch game");
  }
}

const Game = async ({ params: { id } }: { params: { id: string } }) => {
  const data: GameProps = await getData(id);

  const gameDay: GameProps = await getGameSorted();

  if (!data) {
    redirect("/");
  }
  return (
    <main className="w-full text-black">
      <div className="w-full h-80 sm:h-96 bg-black relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-50"
          quality={100}
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 44vw "
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>

        <p>{data.description}</p>
        <h2 className="font-bold text-xl mt-7 mb-2"> Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms?.map((category) => (
            <Label category={category} key={category} />
          ))}
        </div>
        <h2 className="font-bold text-xl mt-7 mb-2"> Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((category) => (
            <Label category={category} key={category} />
          ))}
        </div>
        <p className="mt-7 mb-2">
          <strong>data de lancamento: </strong>
          {data.release}
        </p>

        <h2 className="font-bold text-xl mt-7 mb-2"> Jogo Recomendado</h2>
        <div className="flex">
          <div className="flex-grow">
            <GameCard data={gameDay} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Game;
