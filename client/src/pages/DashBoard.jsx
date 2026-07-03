import React from "react";
import {
  FaFileUpload,
  FaBrain,
  FaChartLine,
  FaDownload,
  FaFileCsv,
  FaTable,
} from "react-icons/fa";
import { BsFiletypePdf, BsFiletypeTxt } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { Card, AuthButton, Button } from "../components/shared/export";

function DashBoard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <section className="mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-5">
            Smart Data Visualization Workspace
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            DataForger
            <span className="text-indigo-400"> Dashboard</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl">
            Upload unstructured files and let AI clean, structure,
            analyze, and visualize your data automatically.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          <Card>
            <FaFileUpload
              className="text-indigo-400 mb-4"
              size={30}
            />

            <h3 className="text-slate-400 mb-2">
              Uploaded Files
            </h3>

            <h2 className="text-4xl font-bold">
              0
            </h2>
          </Card>

          <Card>
            <FaBrain
              className="text-emerald-400 mb-4"
              size={30}
            />

            <h3 className="text-slate-400 mb-2">
              AI Analyses
            </h3>

            <h2 className="text-4xl font-bold">
              0
            </h2>
          </Card>

          <Card>
            <MdAutoGraph
              className="text-amber-400 mb-4"
              size={30}
            />

            <h3 className="text-slate-400 mb-2">
              Visualizations
            </h3>

            <h2 className="text-4xl font-bold">
              0
            </h2>
          </Card>

          <Card>
            <FaDownload
              className="text-purple-400 mb-4"
              size={30}
            />

            <h3 className="text-slate-400 mb-2">
              CSV Exports
            </h3>

            <h2 className="text-4xl font-bold">
              0
            </h2>
          </Card>

        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">
            Supported File Formats
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Card>
              <FaFileCsv
                className="text-green-400 mb-4"
                size={45}
              />

              <h3 className="text-2xl font-semibold mb-3">
                CSV Files
              </h3>

              <p className="text-slate-400">
                Parsed using csv-parser and automatically
                transformed into structured datasets.
              </p>
            </Card>

            <Card>
              <BsFiletypePdf
                className="text-red-400 mb-4"
                size={45}
              />

              <h3 className="text-2xl font-semibold mb-3">
                PDF Files
              </h3>

              <p className="text-slate-400">
                Extract textual information from PDFs using
                pdf-parse and AI-powered structuring.
              </p>
            </Card>

            <Card>
              <BsFiletypeTxt
                className="text-blue-400 mb-4"
                size={45}
              />

              <h3 className="text-2xl font-semibold mb-3">
                TXT Files
              </h3>

              <p className="text-slate-400">
                Process plain text datasets with Node.js
                readline and intelligent schema generation.
              </p>
            </Card>

          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">
            Processing Pipeline
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Card>
              <FaFileUpload
                className="text-indigo-400 mb-4"
                size={35}
              />

              <h3 className="font-semibold mb-2">
                Upload
              </h3>

              <p className="text-slate-400 text-sm">
                User uploads PDF, CSV, or TXT files.
              </p>
            </Card>

            <Card>
              <FaBrain
                className="text-emerald-400 mb-4"
                size={35}
              />

              <h3 className="font-semibold mb-2">
                Parse & AI
              </h3>

              <p className="text-slate-400 text-sm">
                Express backend parses files and sends
                data to LLMs.
              </p>
            </Card>

            <Card>
              <FaTable
                className="text-amber-400 mb-4"
                size={35}
              />

              <h3 className="font-semibold mb-2">
                Standardize
              </h3>

              <p className="text-slate-400 text-sm">
                Generate clean JSON schema and infer
                field types.
              </p>
            </Card>

            <Card>
              <FaChartLine
                className="text-purple-400 mb-4"
                size={35}
              />

              <h3 className="font-semibold mb-2">
                Visualize
              </h3>

              <p className="text-slate-400 text-sm">
                Render dynamic charts and export results.
              </p>
            </Card>

          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6">
            Dynamic Dashboard
          </h2>

          <Card className="text-center py-20">

            <MdAutoGraph
              className="mx-auto text-indigo-400 mb-6"
              size={70}
            />

            <h3 className="text-3xl font-semibold mb-4">
              No Dataset Loaded
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Upload a file to automatically generate
              tables, charts, and AI-powered insights.
            </p>

            <AuthButton
              btnText="Upload Dataset"
              type="primary"
              to="/upload"
            />

          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">
            Export & Share
          </h2>

          <Card>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Download Cleaned Data
                </h3>

                <p className="text-slate-400">
                  Export structured datasets as CSV and
                  open them directly in Google Sheets,
                  Microsoft Excel, or other analytics tools.
                </p>
              </div>

              <Button variant="success">
                Export CSV
              </Button>

            </div>
          </Card>
        </section>

      </div>
    </div>
  );
}

export default DashBoard;