import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-16 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://links.papareact.com/1m8"
            width={50}
            height={50}
            alt="logo"
          ></Image>
        </Link>
        <h1>Arun Krishnamoorthy</h1>
      </div>
      <div className="flex items-center space-x-4">
        <p className="tracking-wide">
          <Link className="cursor-pointer text-black" href="/signup">
            Sign Up
          </Link>
        </p>
        <Link
          href="/login"
          className="px-5 py-2 text-sm tracking-wide md:text-base bg-[#F7AB0A] text-black rounded-full text-center flex items-center"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
