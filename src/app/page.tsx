import GameCard from "@/components/GameCard";
import Container from "@/components/container";
import Input from "@/components/input";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 120 } }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed fecth data");
  }
}
async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 120 },
    });
    return res.json();
  } catch (err) {
    throw new Error("Failed fecth data");
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();
  const allGames: GameProps[] = await getGamesData();

  return (
    <main className="">
      <Container>
        <h1 className="text-center font-bold text-lg mt-8 mb-5">
          Separamos um jogo exclusivo para voce
        </h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-b-lg">
              <div className="absolute z-20 bottom-3 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="white" />
              </div>
              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                width={0}
                height={0}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-1000"
                sizes="(max-width:768px) 100vw, (max-height:1200px) 44vw "
              />
            </div>
          </section>
        </Link>
        <Input />
        <h2 className="text-lg font-bold mt-8 mb-5"> Jogos para conhecer</h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allGames.map((item) => (
            <GameCard key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
