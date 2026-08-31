import Reveal from './Reveal';
import experience from '../data/experience';

function Experience() {
    return (
        <section className="section experience" id="journey" aria-labelledby='journey-title'>
            <div className="container">
                <Reveal>
                    <div className="section-heading">
                        <p className="section-heading_eyebrow">Journey</p>

                        <h2 id='journey-title'>I'm still early. That's the point.</h2>
                    </div>
                </Reveal>

                <div className="experience_timeline">
                    {experience.map((item, index) => (
                        <Reveal
                            key={item.id}
                            delay={index * 120}
                        >
                            <article className="experience-item">
                                <div className="experience-item_year">
                                    {item.period}
                                </div>

                                <div className="experience-item_content">
                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;