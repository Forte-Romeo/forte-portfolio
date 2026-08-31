import Reveal from './Reveal';
import skills from '../data/skills';

function Skills() {
    return (
        <section className="section skills" id="skills" aria-labelledby='skills-title'>
            <div className="container">
                <Reveal>
                    <div className="section-heading section-heading--split">
                        <div>
                            <p className="section-heading_eyebrow">Capabilities</p>

                            <h2 id='skills-title'>The stack I'm building with.</h2>
                        </div>

                        <p>
                            My toolkit is evolving continuously as I move from
                            frontend development toward full-stack software
                            engineering.
                        </p>
                    </div>
                </Reveal>

                <div className="skills_grid">
                    {skills.map((skill, index) => (
                        <Reveal
                            key={skill.id}
                            delay={index * 100}
                        >
                            <article className="skill-card">
                                <span className="skill-card_number">
                                    {skill.number}
                                </span>

                                <h3>{skill.title}</h3>

                                <p>{skill.description}</p>

                                <div className="skill-card_technologies">
                                    {skill.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;