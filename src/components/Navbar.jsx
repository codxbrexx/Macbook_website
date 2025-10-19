import React from "react";
import { NavbarLinks } from "../constants";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" className="h-8 w-8" />

        <ul>
          {NavbarLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="search" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
