import { useEffect, useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const closeMenu = () => {
        setIsMenuOpen(false)
    };

    useEffect(() => {
        const sections = document.querySelectorAll('main section[id]')

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(
                    (entry) => entry.isIntersecting
                )

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id)
                }
            },
            {
                rootMargin: '-30% 0px -60% 0px',
            }
        )

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        };
    }, [])

    return(
        <header className="navbar">
            <div className="container navbar_container">
                <a
                    href="#home"
                    className="navbar_logo"
                    aria-label="Forte Romeo — home"
                    onClick={closeMenu}
                >
                    FR
                </a>

                <nav
                    className={`navbar_nav ${
                        isMenuOpen ? 'navbar_nav--open' : ''
                    }`}
                    aria-label="Primary navigation"
                    id='primary-navigation'
                >
                    <a
                        href="#about"
                        className={activeSection === 'about' ? 'active' : ''}
                        aria-current={
                            activeSection === 'about' ? 'location' : undefined
                        }
                        onClick={closeMenu}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className={activeSection === 'skills' ? 'active' : ''}
                        aria-current={
                            activeSection === 'skills' ? 'location' : undefined
                        }
                        onClick={closeMenu}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className={
                            activeSection === 'projects' ? 'active' : ''
                        }
                        aria-current={
                            activeSection === 'projects' ? 'location' : undefined
                        }
                        onClick={closeMenu}
                    >
                        Projects
                    </a>

                    <a
                        href="#journey"
                        className={
                            activeSection === 'journey' ? 'active' : ''
                        }
                        aria-current={
                            activeSection === 'journey' ? 'location' : undefined
                        }
                        onClick={closeMenu}
                    >
                        Journey
                    </a>
                </nav>

                <div className="navbar_actions">
                    <a href="#contact" className="navbar_cta" onClick={closeMenu}>
                        Let's Talk
                    </a>

                    <button
                        type="button"
                        className={`navbar_menu-button ${isMenuOpen ? 'navbar_menu-button--open' : ''
                        }`}
                        aria-label={
                            isMenuOpen
                                ? 'Close primary navigation'
                                : 'Open primary navigation'
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setIsMenuOpen((previous) => !previous)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;