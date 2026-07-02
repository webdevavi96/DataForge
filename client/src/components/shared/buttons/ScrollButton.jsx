import React from 'react'


const defaultRoute = "/";
const btnTextDefault = "Button";

function ScrollButton({ btnText = btnTextDefault,
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
            <a
                href={to}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${buttonStyles[type] || buttonStyles.primary
                    }`}
            >
                {btnText}
            </a>
        </div>
    )
}

export default ScrollButton