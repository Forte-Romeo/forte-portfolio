function Navbar() {
    return(
        <header className="navbar">
            <div className="container navbar_container">
                <a href="#home" className="navbar_logo">
                    FR
                </a>

                <nav className="navbar_nav" aria-label="Main navigation">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>

                <a href="#contact" className="navbar_cta">
                    Let's Talk
                </a>
            </div>
        </header>
    );
}

export default Navbar;