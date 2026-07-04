import React, { useContext } from "react";
import { MdVerified, MdOutlineVerified } from "react-icons/md";
import { FaEnvelope, FaUser } from "react-icons/fa";

import { AuthContext } from "../contexts/exportContext.js";
import { Card, Button } from "../components/export.js";
import AuthButtons from "../components/shared/buttons/AuthButtons.jsx";

function ProfilePage() {
    const { user, logout } = useContext(AuthContext);

    const getInitials = () => {
        if (!user?.fullName) return "GU";

        const names = user.fullName.trim().split(" ");

        if (names.length === 1) {
            return names[0][0].toUpperCase();
        }

        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
            <div className="max-w-5xl mx-auto">

                <Card className="overflow-hidden p-0">

                    {/* Cover */}
                    <div className="h-40 bg-gradient-to-r from-indigo-600 via-cyan-500 to-violet-600" />

                    {/* Profile */}
                    <div className="px-8 pb-8">

                        <div className="-mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                            {/* Left */}
                            <div className="flex flex-col md:flex-row md:items-center gap-5">

                                {/* Avatar */}
                                {user?.profileImage ? (
                                    <img
                                        src={user.profileImage}
                                        alt={user.fullName}
                                        className="w-32 h-32 rounded-full border-4 border-slate-900 object-cover"
                                    />
                                ) : (
                                    <div className="w-32 h-32 rounded-full border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-5xl font-bold">
                                        {getInitials()}
                                    </div>
                                )}

                                {/* User Info */}
                                <div>

                                    <div className="flex items-center gap-3">

                                        <h1 className="text-3xl font-bold">
                                            {user?.fullName || "Guest User"}
                                        </h1>

                                        {user?.isVerified ? (
                                            <MdVerified
                                                size={28}
                                                className="text-sky-400"
                                            />
                                        ) : (
                                            <MdOutlineVerified
                                                size={28}
                                                className="text-slate-500"
                                            />
                                        )}

                                    </div>

                                    <p className="text-slate-400 mt-2 flex items-center gap-2">
                                        <FaUser />
                                        @{user?.username}
                                    </p>

                                    <p className="text-slate-400 mt-2 flex items-center gap-2">
                                        <FaEnvelope />
                                        {user?.email}
                                    </p>

                                </div>

                            </div>

                        </div>

                        <hr className="my-8 border-slate-800" />

                        {/* Details */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <Card>

                                <h2 className="text-xl font-semibold mb-5">
                                    Account Information
                                </h2>

                                <div className="space-y-4">

                                    <div>
                                        <p className="text-slate-500 text-sm">
                                            Full Name
                                        </p>

                                        <p className="mt-1">
                                            {user?.fullName}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-slate-500 text-sm">
                                            Username
                                        </p>

                                        <p className="mt-1">
                                            @{user?.username}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-slate-500 text-sm">
                                            Email
                                        </p>

                                        <p className="mt-1">
                                            {user?.email}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-slate-500 text-sm">
                                            Verification
                                        </p>

                                        <p
                                            className={`mt-1 font-medium ${user?.isVerified
                                                ? "text-emerald-400"
                                                : "text-amber-400"
                                                }`}
                                        >
                                            {user?.isVerified
                                                ? "Verified"
                                                : "Not Verified"}
                                        </p>
                                    </div>

                                </div>

                            </Card>

                            <Card>

                                <h2 className="text-xl font-semibold mb-5">
                                    DataForger Activity
                                </h2>

                                <div className="space-y-5">

                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            Uploads
                                        </span>

                                        <span className="font-semibold">
                                            0
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            AI Analyses
                                        </span>

                                        <span className="font-semibold">
                                            0
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            Charts Generated
                                        </span>

                                        <span className="font-semibold">
                                            0
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-slate-400">
                                            CSV Exports
                                        </span>

                                        <span className="font-semibold">
                                            0
                                        </span>
                                    </div>

                                </div>

                            </Card>

                        </div>

                    </div>

                    <Card className="mt-6 border border-red-500/20">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                            <div>
                                <h2 className="text-xl font-semibold text-red-400">
                                    Log Out
                                </h2>

                                <p className="text-slate-400 mt-2">
                                    Sign out from your DataForger account.
                                </p>
                            </div>

                            <Button
                                variant="danger"
                                onClick={logout}
                                className="w-full md:w-auto"
                            >
                                Log Out
                            </Button>

                        </div>
                    </Card>

                </Card>

            </div>
        </div>
    );
}

export default ProfilePage;