import ice from "../img/icedev.jpg";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  const links = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/about",
      name: "About",
    },
    {
      route: "/portfolio",
      name: "Portfolio",
    },
    {
      route: "/contact",
      name: "Contact",
    },
  ];

  return (
    <section className="lg:flex justify-between">
      <section className="lg:w-1/6 h-full lg:h-screen lg:flex lg:justify-center lg:items-center">
        <aside className="flex justify-evenly items-center lg:flex-col p-4 w-full">
          <div className="hidden lg:block lg:w-32 lg:h-32 mx-auto">
            <img
              src={ice}
              alt="ice"
              width={100}
              height={100}
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
          </div>
          <h3 className="text-black lg:text-center font-bold text-lg md:text-2xl lg:mt-4 w-full">
            ICE
          </h3>
          <ul className="text-black text-center hidden lg:flex flex-col gap-4 my-4">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.route}
                className={({ isActive }) =>
                  `text-xl ${
                    isActive
                      ? "font-bold text-[#312F49] text-2xl"
                      : "text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
          <ul className="w-full my-4 flex gap-4 lg:justify-center justify-end">
            <li>
              <FaGithub
                size={20}
                className="text-black hover:text-[#dc3435] hover:cursor-pointer"
              />
            </li>
            <li>
              <FaLinkedinIn
                size={20}
                className="text-black hover:text-[#dc3435] hover:cursor-pointer"
              />
            </li>
            <li>
              <FaTwitter
                size={20}
                className="text-black hover:text-[#dc3435] hover:cursor-pointer"
              />
            </li>
          </ul>
        </aside>
      </section>
      <div className="lg:w-5/6 bg-[#edebe5]">
        <Outlet />
      </div>
    </section>
  );
}
