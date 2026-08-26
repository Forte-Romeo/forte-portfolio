function ProjectCard({ title, description, technologies }) {
    return (
        <article className="project-card">
            <div className="project-card_image">
                <span>Project Preview</span>
            </div>

            <div className="project-card_content">
                <h3>{title}</h3>

                <p>{description}</p>

                <div className="project-card_technologies">
                    {technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <a href="#contact" className="project-card_link">
                    View Project →
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;