function Navbar() {
    return(
        <header className="navbar">
            <div className="container navbar_container">
                <a href="#home" className="navbar_logo" aria-label="Forte Romeo home">
                    FR
                </a>

                <nav className="navbar_nav" aria-label="Main navigation">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#journey">Journey</a>
                </nav>

                <a href="#contact" className="navbar_cta">
                    Let's Talk
                </a>
            </div>
        </header>
    );
}

export default Navbar;