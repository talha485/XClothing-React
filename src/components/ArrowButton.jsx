import React from "react";

function ArrowButton({ direction, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 ${
                direction === "left" ? "left-4" : "right-4"
            } bg-black/40 text-white border-none w-11 h-11 rounded-full cursor-pointer text-[18px] flex items-center justify-center hover:bg-black/65 transition-all duration-200 z-10`}
        >
            <i className={`fa-solid fa-chevron-${direction}`} />
        </button>
    );
}

export default ArrowButton;