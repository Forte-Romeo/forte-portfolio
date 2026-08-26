function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero_container">
                <div className="hero_content">
                    <p className="hero_eyebrow">Hello, I'm Forte Romeo</p>

                    <h1>
                        Building digital
                        <span> experiences </span>
                        with code.
                    </h1>

                    <p className="hero_description">
                        I'm an Information Technology student and aspiring software + AI
                        engineer focused on building useful products, exploring technology,
                        and turning ideas into reality.
                    </p>

                    <div className="hero_actions">
                        <a href="#products" className="button button--primary">
                            View My Work
                        </a>

                        <a href="#contact" className="button button--secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className="hero_visual">
                    <div className="hero_placeholder">
                        <span>FR</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;