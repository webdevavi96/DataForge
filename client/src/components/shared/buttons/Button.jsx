import React from "react";

const variants = {
    primary:
        "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
        "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700",
    success:
        "bg-emerald-600 text-white hover:bg-emerald-700",
    danger:
        "bg-red-600 text-white hover:bg-red-700",
    ghost:
        "bg-transparent text-white border border-slate-600 hover:bg-slate-800",
};

function Button({
    children,
    variant = "primary",
    className = "",
    type = "button",
    ...props
}) {
    return (
        <button
            type={type}
            className={`
        px-6 py-3 rounded-xl font-medium
        transition-all duration-300
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;