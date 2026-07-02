import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navigation/NavigationMenu'
import { Footer } from "../shared/export.js"


function Layout() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <main className="container mx-auto px-6">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout