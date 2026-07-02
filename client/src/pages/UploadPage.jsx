import React from "react";
import { Button, Card } from "../components/shared/export";

function UploadPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
\                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-5">
                        File Integration Engine
                    </span>

                    <h1 className="text-5xl font-bold mb-4">
                        Upload Your Data
                    </h1>

                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Upload PDF, CSV, or TXT files and let DataForger
                        transform them into structured, visual insights.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                        <div
                            className="
                border-2 border-dashed border-slate-700
                rounded-2xl
                p-10
                text-center
                hover:border-indigo-500
                transition-all duration-300
              "
                        >
                            <div className="text-5xl mb-4">📁</div>

                            <h2 className="text-2xl font-semibold mb-2">
                                Drag & Drop Files
                            </h2>

                            <p className="text-slate-400 mb-2">
                                Supported formats: PDF, CSV, TXT
                            </p>

                            <p className="text-sm text-slate-500 mb-8">
                                Maximum file size: 5 MB
                            </p>

                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                accept=".pdf,.csv,.txt"
                            />

                            <label htmlFor="file-upload">
                                <Button variant="primary">
                                    Choose File
                                </Button>
                            </label>
                        </div>

                        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5">
                            <h3 className="font-semibold mb-2">
                                Selected File
                            </h3>

                            <p className="text-slate-500">
                                No file selected.
                            </p>
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <Button variant="ghost">
                                Cancel
                            </Button>

                            <Button variant="secondary">
                                Preview
                            </Button>

                            <Button variant="success">
                                Analyze Data
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mt-16">
                    <Card>
                        <div className="text-4xl mb-3">📂</div>
                        <h3 className="font-semibold mb-2">Upload</h3>
                        <p className="text-sm text-slate-400">
                            Secure file ingestion.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-4xl mb-3">⚙️</div>
                        <h3 className="font-semibold mb-2">Parse</h3>
                        <p className="text-sm text-slate-400">
                            Extract raw content.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-4xl mb-3">🤖</div>
                        <h3 className="font-semibold mb-2">Structure</h3>
                        <p className="text-sm text-slate-400">
                            AI cleans and organizes data.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-4xl mb-3">📊</div>
                        <h3 className="font-semibold mb-2">Visualize</h3>
                        <p className="text-sm text-slate-400">
                            Interactive dashboards generated.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default UploadPage;