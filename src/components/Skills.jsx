function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-heading">
                    <p className="section-heading_eyebrow">Skills</p>

                    <h2>Technologies I'm working with.</h2>
                </div>

                <div className="skills_grid">
                    <div className="skill-card">
                        <span className="skill-card_number">01</span>
                        <h3>Frontend Development</h3>
                        <p>
                            Building responsive interfaces with HTML, CSS, JavaScript, and
                            React.
                        </p>
                    </div>

                    <div className="skill-card">
                        <span className="skill-card_number">02</span>
                        <h3>Programming</h3>
                        <p>
                            Developing problem-solving skills through Python, JavaScript, and
                            C++.
                        </p>
                    </div>

                    <div className="skill-card">
                        <span className="skill-card_number">03</span>
                        <h3>APIs &amp; Data</h3>
                        <p>
                            Working with APIs, databases, application data, and backend
                            technologies.
                        </p>
                    </div>

                    <div className="skill-card">
                        <span className="skill-card_number">04</span>
                        <h3>Tools &amp; Workflow</h3>
                        <p>
                            Using Git, GitHub, VS Code, Linux, Docker, and modern development
                            workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;