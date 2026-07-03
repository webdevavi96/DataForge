import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaCode,
  FaServer,
  FaDatabase
} from "react-icons/fa";
import { Card } from "../components/shared/export";

function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <section className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-6">
            Creator of DataForger
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm
            <span className="text-indigo-400">
              {" "}Avinash Chaurasiya
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg">
            Full Stack Developer passionate about building scalable,
            user-friendly applications and solving real-world problems
            through technology.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a
              href="https://webdevavi96.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
            >
              <FaGlobe />
              Portfolio
            </a>

            <a
              href="https://github.com/webdevavi96"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/avinash-chaurasiya-72b648247/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <h2 className="text-3xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-slate-400 leading-8">
              I'm a Full Stack Developer focused on creating
              scalable systems, modern web applications, and
              intuitive user experiences. I enjoy working with
              Python, Django, JavaScript, and React to transform
              ideas into production-ready applications.
            </p>

            <p className="text-slate-400 leading-8 mt-4">
              My interests include REST APIs, real-time systems,
              UI/UX design, and AI-powered applications. I'm
              continuously learning new technologies and improving
              my development skills.
            </p>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Tech Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Card>
              <FaCode
                className="text-indigo-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-semibold mb-4">
                Frontend
              </h3>

              <p className="text-slate-400">
                HTML, CSS, JavaScript, React, Tailwind CSS,
                Bootstrap
              </p>
            </Card>

            <Card>
              <FaServer
                className="text-emerald-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-semibold mb-4">
                Backend
              </h3>

              <p className="text-slate-400">
                Python, Django, Node.js, Express, FastAPI
              </p>
            </Card>

            <Card>
              <FaDatabase
                className="text-amber-400 mb-4"
                size={40}
              />

              <h3 className="text-xl font-semibold mb-4">
                Database & Tools
              </h3>

              <p className="text-slate-400">
                MongoDB, MySQL, PostgreSQL, SQLite, Git,
                Postman, Figma
              </p>
            </Card>

          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">

            <Card>
              <h3 className="text-2xl font-semibold mb-3">
                DataForger
              </h3>

              <p className="text-slate-400">
                AI-powered data visualization platform that
                transforms PDF, CSV, and TXT files into dynamic
                dashboards.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-semibold mb-3">
                Alumni Meet
              </h3>

              <p className="text-slate-400">
                Full-stack social networking platform for
                students and alumni with authentication,
                blogs, and real-time features.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-semibold mb-3">
                Travel Vista
              </h3>

              <p className="text-slate-400">
                Full-stack travel planner application featuring
                authentication and dynamic destination
                exploration.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-semibold mb-3">
                Weather App
              </h3>

              <p className="text-slate-400">
                Responsive weather application using external
                APIs to provide real-time weather information.
              </p>
            </Card>

          </div>
        </section>

      </div>
    </div>
  );
}

export default AboutPage;