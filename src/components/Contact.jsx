import Reveal from './Reveal';

function Contact() {
    return (
        <section className="section contact" id="contact" aria-labelledby='contact-title'>
            <div className="container">
                <Reveal>
                    <div className="contact_container">
                        <div className="contact_content">
                            <p className="section-heading_eyebrow">
                                Have an idea?
                            </p>

                            <h2 id='contact-title'>Let's build something meaningful.</h2>

                            <p>
                                I'm always interested in interesting projects,
                                collaborations, opportunities, and conversations
                                around technology.
                            </p>

                            <div className="contact_actions">
                                <a
                                    href="mailto:fergusonromeonyarmah@example.com"
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
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;