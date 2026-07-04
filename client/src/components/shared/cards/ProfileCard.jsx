import React from "react";
import { MdVerified } from "react-icons/md";

import { AuthButton } from "../../export.js";

function ProfileCard({ user }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-lg">

            {/* Cover */}
            <div className="h-20 bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-700" />

            {/* Body */}
            <div className="px-6 pb-6">

                {/* Avatar */}
                <div className="-mt-10 mb-5">
                    <div className="w-20 h-20 rounded-full border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-3xl font-bold text-white">
                        {user?.fullName?.charAt(0)?.toUpperCase() ||
                            user?.username?.charAt(0)?.toUpperCase() ||
                            "U"}
                    </div>
                </div>

                {/* Name + Verification */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                        {user?.fullName || "Guest User"}
                    </h2>

                    {user?.isVerified && (
                        <MdVerified
                            size={24}
                            className="text-sky-400"
                        />
                    )}
                </div>

                <hr className="my-4 border-slate-800" />

                {/* User Info */}
                <div className="space-y-2">

                    <p className="text-slate-300">
                        @{user?.username || "username"}
                    </p>

                    <p className="text-slate-400 text-sm break-all">
                        {user?.email || "email@example.com"}
                    </p>

                </div>

                <hr className="my-5 border-slate-800" />

                {user?.isVerified ? (<AuthButton
                    btnText="View Profile"
                    type="primary"
                    to="/profile"
                />) : (<AuthButton
                    btnText="View Profile"
                    type="primary"
                    to="/signin"
                />)}

            </div>
        </div>
    );
}

export default ProfileCard;