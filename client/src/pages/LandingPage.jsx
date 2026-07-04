import React from "react";
import { AuthButton, ScrollButton, Card } from "../components/export.js";

function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm mb-6">
                        AI-Powered Data Visualization
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Transform Unstructured Files into
                        <span className="text-indigo-400"> Smart Dashboards</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10">
                        Upload PDF, CSV, or TXT files and let AI clean, structure,
                        and visualize your data automatically.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <AuthButton
                            btnText="Get Started"
                            type="primary"
                            to="/upload"
                        />

                        <ScrollButton
                            btnText="Learn More"
                            type="secondary"
                            to="#features"
                        />
                    </div>
                </div>
            </section>

            <section
                id="features"
                className="container mx-auto px-6 py-20"
            >
                <h2 className="text-4xl font-bold text-center mb-14">
                    Features
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <h3 className="text-xl font-semibold mb-3">
                            File Integration
                        </h3>
                        <p className="text-gray-400">
                            Securely upload PDF, CSV, and TXT files up to 5 MB.
                        </p>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-semibold mb-3">
                            AI Structuring
                        </h3>
                        <p className="text-gray-400">
                            Automatically clean and standardize unstructured data
                            using LLMs.
                        </p>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-semibold mb-3">
                            Dynamic Dashboard
                        </h3>
                        <p className="text-gray-400">
                            Smart chart detection with interactive visualizations.
                        </p>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-semibold mb-3">
                            CSV Export
                        </h3>
                        <p className="text-gray-400">
                            Download cleaned datasets and use them in Excel or Google
                            Sheets.
                        </p>
                    </Card>
                </div>
            </section>


            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-14">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <Card>
                        <div className="text-5xl mb-4">📂</div>
                        <h3 className="font-semibold mb-2">Upload File</h3>
                        <p className="text-gray-400">
                            Upload TXT, PDF, or CSV files.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-5xl mb-4">⚙️</div>
                        <h3 className="font-semibold mb-2">Backend Processing</h3>
                        <p className="text-gray-400">
                            Files are parsed and standardized.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-5xl mb-4">🤖</div>
                        <h3 className="font-semibold mb-2">AI Analysis</h3>
                        <p className="text-gray-400">
                            AI identifies fields, types, and chart suggestions.
                        </p>
                    </Card>

                    <Card>
                        <div className="text-5xl mb-4">📊</div>
                        <h3 className="font-semibold mb-2">Visualize</h3>
                        <p className="text-gray-400">
                            Explore interactive dashboards instantly.
                        </p>
                    </Card>
                </div>
            </section>

            <Card className="bg-indigo-600 rounded-3xl p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Ready to Forge Your Data?
                </h2>

                <p className="text-lg mb-8 text-indigo-100">
                    Turn raw documents into meaningful insights in seconds.
                </p>

                <div className="flex justify-center">
                    <AuthButton
                        btnText="Join Us"
                        type="secondary"
                        to="/signin"
                    />
                </div>
            </Card>
        </div>
    );
}

export default LandingPage;