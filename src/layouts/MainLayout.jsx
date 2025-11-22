import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { useState } from "react";

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen((s) => !s);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="app-layout">
            <header className="app-header">
                <Navbar onToggleSidebar={toggleSidebar} />
            </header>

            <div className={`layout-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <aside className={`sidebar-wrap ${sidebarOpen ? "open" : ""}`}>
                    <Sidebar onClose={closeSidebar} overlay={sidebarOpen} />
                </aside>

                {sidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar} />}

                <main className="page-content">
                    <div className="page-inner">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
