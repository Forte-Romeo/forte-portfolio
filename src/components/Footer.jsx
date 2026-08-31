function Footer() {
    return (
        <footer className="footer">
            <div className="container footer_container">
                <div>
                    <p className="footer_name">Forte Romeo</p>
                    <p className="footer_description">
                        Building, learning, and documenting the journey.
                    </p>
                </div>

                <div className="footer_links">
                    <a 
                        href="https://github.com/Forte-Romeo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>

                    <a 
                        href="https://linkedin.com/in/ferguson-romeo-nyarmah"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="#home">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;