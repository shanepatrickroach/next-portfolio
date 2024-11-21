import Link from "next/link";
import React from "react";

const links = [
  { href: "/about", name: "about" },
  { href: "/projects", name: "projects" },
  
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4 mt-4 rounded-2xl mx-8 my-8 shadow-xl">
      <div className="navbar justify-between px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link className="btn btn-outline" href={"/"}>
          Home
        </Link>

        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link href={link.href} >
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
