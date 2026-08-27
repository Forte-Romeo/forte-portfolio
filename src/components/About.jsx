function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-heading">
                    <p className="section-heading_eyebrow">About</p>

                    <h2>Curious about technology. Serious about building.</h2>
                </div>

                <div className="about_content">
                    <div className="about_text">
                        <p>
                            I'm an Information Technology student developing my foundation
                            across software + AI engineering, web development, and emerging
                            technologies.
                        </p>

                        <p>
                            I learn by building. Instead of only studying concepts, I turn
                            what I learn into projects that force me to understand how
                            different pieces of technology actually work together.
                        </p>

                        <p>
                            I'm particularly interested in software engineering, artificial
                            intelligence, automation, and the opportunities created when
                            technology meets entrepreneurship.
                        </p>
                    </div>

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
                </div>
            </div>
        </section>
    );
}

export default About;