import React from "react";
import { useNavigate } from "react-router-dom";

function ViewMoreBtn({ path }) {
  const navigate = useNavigate();
  return (
    <div className="text-center my-5">
      <button
        onClick={() => navigate(path)}
        className="bg-[#6FCF97] text-[#1F6F5F] border-none px-5 py-[10px] text-[16px] rounded cursor-pointer hover:bg-[#2FA084] hover:text-[#EEEEEE] transition-all duration-200"
      >
        View More
      </button>
    </div>
  );
}

export default ViewMoreBtn;
