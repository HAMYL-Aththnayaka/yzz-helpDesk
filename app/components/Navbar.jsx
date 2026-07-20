import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center gap-[200px]">
        <Image
          src={Logo}
          alt="YZZ Logo"
          width={170}
          height={50}
          quality={100}
          placeholder="blur"
        />

        <h2>YZZ HelpDesk</h2>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </div>
    </nav>
  );
}