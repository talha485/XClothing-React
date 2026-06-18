import React from "react";
import { Link } from "react-router-dom";

function Logo({ size }) {
  return (
    <Link to="/">
      <img src="/logo.png" alt="XClothing Logo" className=" h-[60px] w-auto" />
    </Link>
  );
}

export default Logo;
