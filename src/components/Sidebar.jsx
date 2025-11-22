import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
import Login from "../pages/Login/Login";

const navItems = [
  { key: "home", to: "/home", label: "Home", icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" },
  { key: "dashboard", to: "/dashboard", label: "Dashboard", icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" },
{
    key: "invoices",
    label: "Invoices",
    icon: "M4 4h16v2H4zM4 8h10v2H4zM4 12h16v6H4z",
    children: [
      { key: "list", to: "/invoice/list", label: "Invoice List", icon: "M4 4h16v2H4zM4 8h10v2H4z" },
      { key: "add", to: "/invoice-add", label: "Add Invoice", icon: "M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2z" },
    ],
  }];

const Sidebar = ({ onClose, overlay }) => {
  const [collapsed, setCollapsed] = useState(onClose);
  const [openKeys, setOpenKeys] = useState({});

  const toggleOpen = (key) => {
    setOpenKeys((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <aside className={"sidebar" + (collapsed ? " collapsed" : "")}>
      <div className="sidebar-top">
        <div className="brand">M <span>I</span></div>
        <button
          className="collapse-btn"
          onClick={() => setCollapsed((s) => !s)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <nav className="nav">
        {navItems.map((item) => {
          if (item.children) {
            const isOpen = !!openKeys[item.key];
            return (
              <div key={item.key} className={"nav-group"}>
                <button
                  type="button"
                  className={"nav-item parent" + (isOpen ? " open" : "")}
                  onClick={() => toggleOpen(item.key)}
                  aria-expanded={isOpen}
                >
                  <span className="icon" aria-hidden>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d={item.icon} />
                    </svg>
                  </span>
                  <span className="label">{item.label}</span>
                  <span className={"chev" + (isOpen ? " rot" : "")}>{/* chevron */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </button>

                <div className={"nav-submenu" + (isOpen ? " open" : "")}>
                  {item.children.map((c) => (
                    <NavLink
                      key={c.key}
                      to={c.to}
                      className={({ isActive }) => "nav-item sub-item" + (isActive ? " active" : "")}
                      onClick={() => {
                        if (overlay && typeof onClose === "function") onClose();
                      }}
                    >
                      <span className="icon" aria-hidden>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                          <path d={c.icon} />
                        </svg>
                      </span>
                      <span className="label">{c.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
              onClick={() => {
                if (overlay && typeof onClose === "function") onClose();
              }}
            >
              <span className="icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d={item.icon} />
                </svg>
              </span>
              <span className="label">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <Link
          to="/"
          element={<Login />}
          onClick={() => {
            if (overlay && typeof onClose === "function") onClose();
          }}
        >
          <button className="signout">Sign out</button>
        </Link>

      </div>
    </aside>
  );
};

export default Sidebar;
