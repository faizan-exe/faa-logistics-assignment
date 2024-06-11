import Image from "next/image";
import Link from "next/link";

const Header = ({ onClickTrackShimpment }) => {
  return (
    <header className=" text-white p-4 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={"/logo.webp"} height={100} width={100} alt="logo" />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <button onClick={onClickTrackShimpment}>Track Shipment</button>
            </li>
          </ul>
        </nav>
        <button className="bg-[#0A84FF] px-10 py-3 rounded-md ">
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Header;
