import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItemClass =
    "text-[#EEEEEE] text-[18px] transition-colors duration-300 cursor-pointer hover:text-[#6FCF97]";

function DropdownMenu({ label, items, noLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
      >
        <span className={navItemClass}>
        {label} <i className="fas fa-angle-down" />
      </span>

        {isOpen && (
            <div className="absolute top-full left-0 bg-[#6FCF97] min-w-[180px] p-[10px] z-[999]">
              {items.map((item) => (
                  <DropdownItem
                      key={item.label}
                      label={item.label}
                      path={item.path}
                      noLink={noLinks}
                  />
              ))}
            </div>
        )}
      </div>
  );
}

function DropdownItem({ label, path, noLink }) {
  if (noLink) {
    return (
        <span className="block px-[5px] py-[6px] text-[#1F6F5F] cursor-pointer hover:bg-[#2FA084] hover:text-[#EEEEEE] transition-all duration-200">
        {label}
      </span>
    );
  }

  return (
      <Link
          to={path}
          className="block px-[5px] py-[6px] text-[#1F6F5F] hover:text-[#EEEEEE] hover:bg-[#2FA084] transition-all duration-200"
      >
        {label}
      </Link>
  );
}

export default DropdownMenu;