import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

function NavigationMenu() {
    const [isDesktop, setIsDesktop] = useState(
        window.innerWidth >= 768
    );

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const menuHandler = () => {
        if (isDesktop) return;
        setIsActive(!isActive);
    };

    const navItems = [
        {
            to: "/home",
            icon: <IoIosHome size={22} />,
            label: "Home",
        },
        {
            to: "/upload",
            icon: <FaCloudUploadAlt size={22} />,
            label: "Upload",
        },
        {
            to: "/about",
            icon: <IoPerson size={22} />,
            label: "About",
        },
        {
            to: "/dashboard",
            icon: <MdSpaceDashboard size={22} />,
            label: "Dashboard",
        },
    ];

    return (
        <header className="sticky top-4 z-50 px-4">
            <div className="max-w-7xl mx-auto">
                <nav
                    className="
                        flex items-center justify-between
                        px-4 py-2
                        rounded-2xl
                        bg-white/5
                        backdrop-blur-xl
                        border border-white/10
                        shadow-lg shadow-black/20
                    "
                >
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-wide"
                    >
                        <span className="text-white">Data</span>
                        <span className="text-indigo-400">Forger</span>
                    </NavLink>

                    {isDesktop ? (
                        <div className="flex items-center gap-3">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `
                                        flex items-center gap-2
                                        px-4 py-2 rounded-xl
                                        transition-all duration-300
                                        ${isActive
                                            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                                        }
                                    `
                                    }
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </NavLink>
                            ))}
                        </div>
                    ) : (
                        <button
                            onClick={menuHandler}
                            className="text-white text-2xl"
                        >
                            <CiMenuFries />
                        </button>
                    )}
                </nav>

                {!isDesktop && isActive && (
                    <div
                        className="
                            mt-2
                            p-3
                            rounded-2xl
                            bg-white/5
                            backdrop-blur-xl
                            border border-white/10
                            shadow-lg
                            flex flex-col gap-2
                        "
                    >
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsActive(false)}
                                className={({ isActive }) =>
                                    `
                                    flex items-center gap-3
                                    px-4 py-3 rounded-xl
                                    transition-all duration-300
                                    ${isActive
                                        ? "bg-indigo-500/20 text-indigo-300"
                                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                                    }
                                `
                                }
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}

export default NavigationMenu;