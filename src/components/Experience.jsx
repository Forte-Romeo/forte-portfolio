import experience from '../data/experience';

function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="section-heading">
                    <p className="section-heading_eyebrow">Journey</p>

                    <h2>Where I'm growing.</h2>
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