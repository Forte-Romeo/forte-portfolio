import skills from '../data/skills';

function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-heading section-heading--split">
                    <div>
                        <p className="section-heading_eyebrow">Capabilities</p>

                        <h2>The stack I'm building with.</h2>
                    </div>

                    <p>
                        My toolkit is evolving continuously as i move from frontend
                        development toward full-stack software engineering.
                    </p>
                </div>

                <div className="skills_grid">
                    {skills.map((skill) => (
                        <article className="skill-card" key={skill.id}>
                            <span className="skill-card_number">{skill.number}</span>

                            <h3>{skill.title}</h3>

                            <p>{skill.description}</p>

                            <div className="skill-card_technologies">
                                {skill.technologies.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;