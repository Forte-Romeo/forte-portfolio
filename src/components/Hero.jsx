import Reveal from './Reveal';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero_container">
                <div className="hero_content">
                    <Reveal>
                        <p className="hero_eyebrow">Information Technology Student</p>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1>
                            I build
                            <span> digital products </span>
                            with code.
                        </h1>
                    </Reveal>

                    <Reveal delay={180}>
                        <p className="hero_description">
                            I'm Forte Romeo, an aspiring software + AI engineer exploring web
                            development, artificial intelligence, and the intersection of
                            technology and entrepreneurship.
                        </p>
                    </Reveal>

                    <Reveal delay={260}>
                        <div className="hero_actions">
                            <a href="#products" className="button button--primary">
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
                                rel="noreferrer"
                            >
                                Github ↗
                            </a>

                            <a 
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
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