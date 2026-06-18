import React from "react";
import { Link } from "react-router-dom";

const navItemClass =
    "text-[#EEEEEE] text-[18px] no-underline hover:text-[#6FCF97] transition-colors duration-300";

function NavLink({ to, label }) {
  return (
      <Link to={to} className={navItemClass}>
        {label}
      </Link>
  );
}

export default NavLink;