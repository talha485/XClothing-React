import React from "react";

function Button({ label, onClick, type, extraClass }) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`bg-[#6FCF97] text-[#1F6F5F] border-none px-5 py-[10px] text-[16px] rounded cursor-pointer hover:bg-[#2FA084] hover:text-[#EEEEEE] transition-all duration-200 ${extraClass || ""}`}
    >
      {label}
    </button>
  );
}

export default Button;
