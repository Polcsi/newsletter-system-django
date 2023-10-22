import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BasicButton from "../components/buttons/BasicButton";
import { RiMenu3Fill } from "react-icons/ri";

const links: {
  name: string;
  path: string;
}[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Articles",
    path: "#articles",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 w-full h-[65px] flex justify-center bg-white shadow-lg">
      <div className="w-[95%] max-w-[1200px] flex flex-row items-center justify-between">
        <div className="flex gap-5 items-center">
          <div className="">
            <Link to="/">
              <motion.img
                animate={{ rotate: 180 }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 2,
                  repeatType: "loop",
                }}
                src={"./react.svg"}
                className="w-10 h-10"
                alt=""
              />
            </Link>
          </div>
          <ul className="gap-5 hidden md:flex">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-row gap-3">
          <li className="hidden sm:block">
            <Link to="login">
              <BasicButton className="ring-0">Login</BasicButton>
            </Link>
          </li>
          <li>
            <Link to="register">
              <BasicButton>Sign Up</BasicButton>
            </Link>
          </li>
          <li className="sm:hidden flex items-center justify-center">
            <button type="button">
              <RiMenu3Fill className="text-2xl" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
