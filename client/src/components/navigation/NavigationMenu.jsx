import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";

function NavigationMenu() {
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
            <nav
                className="
                    max-w-7xl mx-auto
                    flex items-center justify-between
                    px-6 py-4
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

                            <span className="hidden md:block text-sm">
                                {item.label}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default NavigationMenu;