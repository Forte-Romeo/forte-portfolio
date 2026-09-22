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
                                I'm open to thoughtful collaborations, software projects,
                                learning opportunities, and conversations around technology.
                            </p>

                            <div className="contact_actions">
                                <a
                                    href="mailto:fergusonromeonyarmah@gmail.com"
                                    className="button button--primary"
                                >
                                    Get In Touch
                                </a>

                                <a
                                    href="https://linkedin.com/in/ferguson-romeo-nyarmah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button button--outline-light"
                                >
                                    Connect on LinkedIn ↗
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