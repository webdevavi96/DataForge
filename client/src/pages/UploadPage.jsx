import React, { useState } from "react";
import { Button, Card } from "../components/shared/export";

function UploadPage() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const fileTypes = ["application/pdf", "text/plain", "text/csv"]
    const previewFile = () => {
        if (!file) return;

        const fileUrl = URL.createObjectURL(file);

        if (fileTypes.includes(file.type)) window.open(fileUrl, "_blank")
        else alert("This file type is not supported.")
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-10">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12">

                    <div className="flex flex-col items-center gap-3 mb-5">
                        <span className="w-full max-w-2xl text-center px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm">
                            You have limited uploads. Login to save your data for future.
                        </span>

                        <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                            File Integration Engine
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                        Upload Your Data
                    </h1>

                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Upload PDF, CSV, or TXT files and let DataForger
                        transform them into structured, visual insights.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Card className="p-4 sm:p-8">

                        <label
                            htmlFor="file-upload"
                            className="
                                block
                                border-2 border-dashed border-slate-700
                                rounded-2xl
                                p-8 sm:p-12
                                text-center
                                hover:border-indigo-500
                                cursor-pointer
                                transition-all duration-300
                            "
                        >
                            <div className="text-5xl mb-4">📁</div>

                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                                Drag & Drop Files
                            </h2>

                            <p className="text-slate-400 mb-2">
                                Supported formats: PDF, CSV, TXT
                            </p>

                            <p className="text-sm text-slate-500 mb-6">
                                Maximum file size: 5 MB
                            </p>

                            <Button variant="primary">
                                Choose File
                            </Button>

                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                accept=".pdf,.csv,.txt"
                                onChange={handleFileChange}
                            />
                        </label>

                        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-5">
                            <h3 className="font-semibold mb-2">
                                Selected File
                            </h3>

                            {file ? (
                                <div className="space-y-1">
                                    <p className="text-indigo-400">
                                        {file.name}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {(file.size / 1024).toFixed(2)} KB
                                    </p>
                                </div>
                            ) : (
                                <p className="text-slate-500">
                                    No file selected.
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button
                                variant="ghost"
                                className="w-full"
                                onClick={() => setFile(null)}
                            >
                                Cancel
                            </Button>

                            <Button
                                variant="secondary"
                                className="w-full"
                                disabled={!file}
                                onClick={previewFile}
                            >
                                Preview
                            </Button>

                            <Button
                                variant="success"
                                className="w-full"
                                disabled={!file}
                            >
                                Analyze Data
                            </Button>
                        </div>
                    </Card>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                    <Card>
                        <div className="text-4xl mb-3">📂</div>
                        <h3 className="font-semibold mb-2">
                            Upload
                        </h3>
                        <p className="text-sm text-slate-400">
                            Secure file ingestion.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-4xl mb-3">⚙️</div>
                        <h3 className="font-semibold mb-2">
                            Parse
                        </h3>
                        <p className="text-sm text-slate-400">
                            Extract raw content.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-4xl mb-3">🤖</div>
                        <h3 className="font-semibold mb-2">
                            Structure
                        </h3>
                        <p className="text-sm text-slate-400">
                            AI cleans and organizes data.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-4xl mb-3">📊</div>
                        <h3 className="font-semibold mb-2">
                            Visualize
                        </h3>
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