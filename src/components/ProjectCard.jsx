function ProjectCard({ number, title, description, technologies, category, featured, image, github, live }) {
    return (
        <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
            <div className="project-card_image-wrapper">
                <img 
                    src={image} 
                    alt={`${title} project preview`} 
                    className="project-card_image"
                />

                <div className="project-card_number">
                    {number}
                </div>
            </div>

            <div className="project-card_content">
                <div className="project-card_meta">
                    <span>{category}</span>

                    {featured && <span>Featured</span>}
                </div>
                
                <h3>{title}</h3>

                <p>{description}</p>

                <div className="project-card_technologies">
                    {technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <div className="project-card_links">
                    <a 
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>

                    <a 
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo ↗
                    </a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;