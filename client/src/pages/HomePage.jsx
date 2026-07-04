import React from "react";
import { FaCloudUploadAlt, FaFileCsv, FaFilePdf } from "react-icons/fa";
import { BsFiletypeTxt } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";

import { Button, Card, AuthButton } from "../components/export.js";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <section className="mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-5">
            Welcome to DataForger
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Turn Raw Data Into
            <span className="text-indigo-400"> Insights</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl">
            Upload PDF, CSV, and TXT files to automatically clean,
            structure, and visualize your data using AI.
          </p>

          <div className="mt-8">
            <AuthButton
              btnText="Upload New File"
              type="primary"
              to="/upload"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          <Card>
            <h3 className="text-slate-400 text-sm mb-2">
              Files Processed
            </h3>
            <p className="text-4xl font-bold text-indigo-400">
              0
            </p>
          </Card>

          <Card>
            <h3 className="text-slate-400 text-sm mb-2">
              Visualizations
            </h3>
            <p className="text-4xl font-bold text-indigo-400">
              0
            </p>
          </Card>

          <Card>
            <h3 className="text-slate-400 text-sm mb-2">
              Remaining Uploads
            </h3>
            <p className="text-4xl font-bold text-amber-400">
              5
            </p>
          </Card>

          <Card>
            <h3 className="text-slate-400 text-sm mb-2">
              AI Analyses
            </h3>
            <p className="text-4xl font-bold text-emerald-400">
              0
            </p>
          </Card>

        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Supported File Types
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card>
              <FaFilePdf
                size={40}
                className="text-red-400 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                PDF Files
              </h3>
              <p className="text-slate-400">
                Extract and structure data from PDF documents.
              </p>
            </Card>

            <Card>
              <FaFileCsv
                size={40}
                className="text-green-400 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                CSV Files
              </h3>
              <p className="text-slate-400">
                Analyze tabular data instantly.
              </p>
            </Card>

            <Card>
              <BsFiletypeTxt
                size={40}
                className="text-blue-400 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                TXT Files
              </h3>
              <p className="text-slate-400">
                Convert raw text into structured datasets.
              </p>
            </Card>

          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Card>
              <FaCloudUploadAlt
                size={40}
                className="text-indigo-400 mb-4"
              />

              <h3 className="text-xl font-semibold mb-3">
                Upload a New Dataset
              </h3>

              <p className="text-slate-400 mb-6">
                Start by uploading a file and let AI prepare
                your dashboard.
              </p>

              <AuthButton
                btnText="Upload Now"
                type="primary"
                to="/upload"
              />
            </Card>

            <Card>
              <MdOutlineAnalytics
                size={40}
                className="text-emerald-400 mb-4"
              />

              <h3 className="text-xl font-semibold mb-3">
                View Dashboards
              </h3>

              <p className="text-slate-400 mb-6">
                Explore your previously generated analytics.
              </p>

              <AuthButton
                btnText="Open Dashboard"
                type="secondary"
                to="/dashboard"
              />
            </Card>

          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <Card>
            <div className="text-center py-10">
              <p className="text-slate-500">
                No recent activity found.
              </p>

              <p className="text-slate-600 text-sm mt-2">
               Login to see your activity.
              </p>

            </div>
          </Card>
        </section>

      </div>
    </div>
  );
}

export default HomePage;