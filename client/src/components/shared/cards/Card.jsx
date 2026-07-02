import React from "react";

function Card({ children, className = "" }) {
    return (
        <div
            className={`
                bg-slate-900
                border border-slate-800
                rounded-2xl
                p-6
                hover:border-indigo-500
                transition-all duration-300
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Card;