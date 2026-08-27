import experience from '../data/experience';

function Experience() {
    return (
        <section className="section experience" id="journey">
            <div className="container">
                <div className="section-heading">
                    <p className="section-heading_eyebrow">Journey</p>

                    <h2>I'm still early. That's the point.</h2>
                </div>

                <div className="experience_timeline">
                    {experience.map((item) => (
                        <article className="experience-item" key={item.id}>
                            <div className="experience-item_year">
                                {item.period}
                            </div>

                            <div className="experience-item_content">
                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;