import Reveal from './Reveal'

function About() {
    return (
        <section className="section about" id="about" aria-labelledby='about-title'>
            <div className="container">
                <Reveal>
                    <div className="section-heading">
                        <p className="section-heading_eyebrow">About</p>

                        <h2 id='about-title'>
                            Curious about technology. Serious about building.
                        </h2>
                    </div>
                </Reveal>

                <div className="about_content">
                    <Reveal delay={100}>
                        <div className="about_text">
                            <p>
                                I'm an Information Technology student developing my
                                foundation across software engineering, web development,
                                and emerging technologies.
                            </p>

                            <p>
                                I learn by building. Instead of only studying concepts,
                                I turn what I learn into projects that force me to
                                understand how different pieces of technology actually
                                work together.
                            </p>

                            <p>
                                I'm particularly interested in software engineering,
                                artificial intelligence, automation, and the
                                opportunities created when technology meets
                                entrepreneurship.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={180}>
                        <div className="about_details">
                            <div className="about_detail">
                                <span>Based in</span>
                                <strong>Ghana</strong>
                            </div>

                            <div className="about_detail">
                                <span>Studying</span>
                                <strong>Information Technology</strong>
                            </div>

                            <div className="about_detail">
                                <span>Building</span>
                                <strong>Software Projects</strong>
                            </div>

                            <div className="about_detail">
                                <span>Interested in</span>
                                <strong>AI &amp; Entrepreneurship</strong>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default About;