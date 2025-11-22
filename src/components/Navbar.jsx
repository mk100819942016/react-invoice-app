const Navbar = ({ onToggleSidebar }) => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="brand">Mini <span>Invoice</span></div>
      </div>
      <div className="nav-right">
        {/* place for user avatar / actions */}
      </div>
    </header>
  );
};

export default Navbar;
