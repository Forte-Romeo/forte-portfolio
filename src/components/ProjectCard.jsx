function ProjectCard({ number, title, description, technologies, category, featured, status, image, github, live }) {

    const isBuilding = status === 'building';
    
    return (
        <article 
            className={`project-card ${featured ? 'project-card--featured' : ''
            } ${isBuilding ? 'project-card--building' : ''}`}
        >
            <div className="project-card_image-wrapper">
                {isBuilding ? (
                    <div
                        className="project-card_building"
                        aria-label={`${title} is currently being built`}
                    >
                        <span className="project-card_building-number">
                            {number}
                        </span>

                        <div className="project-card_building-content">
                            <span className="project-card_status">
                                Building
                            </span>

                            <h3>{title}</h3>

                            <p>
                                Full-stack project currently in development.
                            </p>
                        </div>

                        <span className="project-card_building-mark">
                            01 / 05
                        </span>
                    </div>
                ) : image ? (
                    <img
                        className="project-card_image"
                        src={image}
                        alt={`${title} project preview`}
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <div 
                        className="project-card_image-placeholder"
                        aria-label={`${title} project preview`}
                    >
                        <span>Preview coming soon</span>
                    </div>
                )}
            </div>

            <div className="project-card_content">
                <div className="project-card_meta">
                    <span className="project-card_number">{number}</span>

                    <span className="project-card_category">{category}</span>
                </div>

                <div className="project-card_heading">
                    <div>
                        <span className="project-card_status">
                            {isBuilding ? 'In progress' : 'Live'}
                        </span>

                        <h3>{title}</h3>
                    </div>
                </div>

                <p>{description}</p>

                <ul
                    className='project-card_technologies'
                    aria-label={`${title} technologies`}
                >
                    {technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>

                <div className="project-card_links">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${title} source code on GitHub`}
                        >
                            GitHub ↗
                        </a>
                    )}

                    {live && !isBuilding && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live ${title} project`}
                        >
                            Live Demo ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;