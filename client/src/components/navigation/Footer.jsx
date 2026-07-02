import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-white">Data</span>
              <span className="text-indigo-400">Forger</span>
            </h2>

            <p className="text-slate-400 mt-4">
              Transform unstructured documents into meaningful,
              interactive dashboards powered by AI.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col space-y-3">
              <NavLink
                to="/"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                Home
              </NavLink>

              <NavLink
                to="/upload"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                Upload
              </NavLink>

              <NavLink
                to="/dashboard"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/about"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                About
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect
            </h3>

            <div className="flex space-x-4">
              <a
                href="https://github.com/webdevavi96"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:text-indigo-400 transition-all"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/avinash-chaurasiya-72b648247/"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:text-indigo-400 transition-all"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://webdevavi96.netlify.app/"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:text-indigo-400 transition-all"
              >
                <TbWorldWww size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} DataForger. All rights reserved.
          </p>
          <p>
            Developed by Avinash
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;