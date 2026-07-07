import React from "react";
import { MdVerified } from "react-icons/md";
import { AuthButton } from "../../export.js";

function ProfileCard({ user }) {
    const isLoggedIn = !!user;

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-lg">
            <div className="h-20 bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-700" />

            <div className="px-6 pb-6">
                <div className="-mt-10 mb-5">
                    <div className="w-20 h-20 rounded-full border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-3xl font-bold text-white">
                        {isLoggedIn
                            ? user?.fullName?.charAt(0)?.toUpperCase() ||
                            user?.username?.charAt(0)?.toUpperCase()
                            : "?"}
                    </div>
                </div>

                {isLoggedIn ? (
                    <>
                        <div className="flex items-center justify-between gap-3">
                            <h2 className="text-2xl font-bold text-white">
                                {user.fullName}
                            </h2>

                            {user.isVerified && (
                                <MdVerified
                                    size={24}
                                    className="text-sky-400"
                                />
                            )}
                        </div>

                        <hr className="my-4 border-slate-800" />

                        <div className="space-y-2">
                            <p className="text-slate-300">
                                @{user.username}
                            </p>

                            <p className="text-sm text-slate-400 break-all">
                                {user.email}
                            </p>
                        </div>

                        <hr className="my-5 border-slate-800" />

                        <AuthButton
                            btnText="View Profile"
                            type="primary"
                            to="/profile"
                        />
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-white">
                            Welcome to DataForger
                        </h2>

                        <p className="text-slate-400 mt-3">
                            Sign in to save your uploads, generate dashboards,
                            and export your AI-processed datasets.
                        </p>

                        <hr className="my-5 border-slate-800" />

                        <AuthButton
                            btnText="Sign In"
                            type="primary"
                            to="/signin"
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfileCard;