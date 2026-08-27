function Contact() {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact_container">
                    <div className="contact_content">
                        <p className="section-heading_eyebrow">Have an idea?</p>

                        <h2>Let's build something meaningful.</h2>

                        <p>
                            I'm always interested in interesting projects, collaborations,
                            opportunities, and conversations around technology.
                        </p>

                        <div className="contact_actions">
                            <a
                                href="mailto:fergusonromeonyarmah@gmail.com"
                                className="button button--primary"
                            >
                                Get In Touch
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="button button--outline-light"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;