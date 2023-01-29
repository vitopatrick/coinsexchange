import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./links";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-bg text-white font-main shadow-md">
      <div className="w-[90%] mx-auto py-3 flex justify-between items-center">
        <Link href="/" className="text-lg md:text-2xl text-teal-500 font-bold">
          Volume Exchange
        </Link>
        {/* links */}
        <div className="flex items-center md:gap-12 justify-between">
          {/* links */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link: any) => (
              <Link
                href={`/${link.path}`}
                className="capitalize hover:text-teal-500 hover:font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* cta buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth/sign-up"
              className="font-main bg-teal-500 py-2 px-4 rounded text-bg font-medium"
            >
              Register Now
            </Link>
            <Link
              href="/auth/sign-in"
              className="font-main hidden md:inline-block border-teal-500 border-[1px] px-6 py-2 rounded font-medium text-teal-500"
            >
              Login
            </Link>
          </div>
          <div className="inline-block md:hidden mx-1">
            <FaBars
              onClick={() => setShow(true)}
              className="fill-success_light cursor-pointer"
            />
          </div>
        </div>
      </div>
      <MobileNavbar show={show} close={setShow} />
    </nav>
  );
};

export default Navbar;
