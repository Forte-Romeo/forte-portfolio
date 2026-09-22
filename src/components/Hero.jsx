import Reveal from './Reveal';

function Hero() {
    return (
        <section className="hero" id="home" aria-labelledby='hero-title'>
            <div className="container hero_container">
                <div className="hero_content">
                    <Reveal>
                        <p className="hero_eyebrow">Information Technology Student</p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 id='hero-title'>
                            I build
                            <span>software</span>
                            while learning to build it better.
                        </h1>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="hero_description">
                            I'm Forte Romeo, an Information Technology student building my 
                            foundation in software engineering, full-stack development, and AI. 
                            I learn by turning what I study into working projects.
                        </p>
                    </Reveal>

                    <Reveal delay={260}>
                        <div className="hero_actions">
                            <a href="#projects" className="button button--primary">
                                Explore My Work
                            </a>

                            <a href="#contact" className="button button--secondary">
                                Let's Connect
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={340}>
                        <div className="hero_socials">
                            <a 
                                href="https://github.com/Forte-Romeo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub ↗
                            </a>

                            <a 
                                href="https://linkedin.com/in/ferguson-romeo-nyarmah"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal className='hero_visual-reveal' delay={220}>
                    <div className="hero_visual">
                        <div className="hero_portrait">
                            <span>FR</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Hero;