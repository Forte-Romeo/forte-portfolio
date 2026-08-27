import skills from '../data/skills';

function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-heading">
                    <p className="section-heading_eyebrow">Skills</p>

                    <h2>Technologies I'm working with.</h2>
                </div>

                <div className="skills_grid">
                    {skills.map((skill) => (
                        <article className="skill-card" key={skill.id}>
                            <span className="skill-card_number">{skill.number}</span>

                            <h3>{skill.title}</h3>

                            <p>{skill.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;