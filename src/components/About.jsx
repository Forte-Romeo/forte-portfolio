function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-heading">
                    <p className="section-heading_eyebrow">About Me</p>

                    <h2>Building my future through technology.</h2>
                </div>

                <div className="about_content">
                    <div className="about_text">
                        <p>
                            I'm an Information Technology student with a growing focus on
                            software engineering, artificial intelligence, and building
                            digital products.
                        </p>

                        <p>
                            I enjoy understanding how things work, experimenting with new 
                            technologies, and turning what I learn into practical projects.
                        </p>

                        <p>
                            My long-term goal is to combine technology, entrepreneurship, and 
                            innovation to build products and companies that create real
                            value.
                        </p>
                    </div>

                    <div className="about_details">
                        <div className="about_detail">
                            <span>Based in</span>
                            <strong>Ghana</strong>
                        </div>

                        <div className="about_detail">
                            <span>Focus</span>
                            <strong>Software + AI Engineering</strong>
                        </div>

                        <div className="about_detail">
                            <span>Currently</span>
                            <strong>Building & Learning</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;