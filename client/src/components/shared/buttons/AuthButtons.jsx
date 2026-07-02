import React from "react";
import { Link } from "react-router-dom";

const defaultRoute = "/";
const btnTextDefault = "Button";

function AuthButtons({
    btnText = btnTextDefault,
    type = "primary",
    to = defaultRoute }) {
    const buttonStyles = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700",
        secondary:
            "bg-gray-200 text-gray-800 hover:bg-gray-300",
    };


    return (
        <div className="flex">
            <Link
                to={to}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${buttonStyles[type] || buttonStyles.primary
                    }`}
            >
                {btnText}
            </Link>
        </div>
    );
}

export default AuthButtons;