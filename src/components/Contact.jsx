function Contact() {
    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact_container">
                    <div className="contact_content">
                        <p className="section-heading_eyebrow">Contact</p>

                        <h2>Let's build something meaningful.</h2>

                        <p>
                            Whether it's a project, collaboration, opportunity, or simply a
                            conversation about technology, I'd love to hear from you.
                        </p>

                        <a
                            href="mailto:hello@example.com"
                            className="button button--primary"
                        >
                            Send Me an Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;