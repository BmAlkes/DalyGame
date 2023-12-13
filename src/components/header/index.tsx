import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/logo.svg";
import { LiaGamepadSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center h-28 sm:justify-between ">
        <nav className="flex justify-center items-center gap-4 ">
          <Link href="/">
            <Image
              className="w-full"
              src={logoImg}
              alt="Site logo"
              quality={100}
              priority={true}
            />
          </Link>
          <Link href="/">Games</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
