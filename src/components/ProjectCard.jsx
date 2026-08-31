import { useState } from "react";

function ProjectCard({ number, title, description, technologies, category, featured, image, github, live }) {
    const [imageError, setImageError] = useState(false);
    
    return (
        <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
            <div className="project-card_image-wrapper">
                {image && !imageError ? (
                    <img
                        className="project-card_image"
                        src={image}
                        alt={`${title} project preview`}
                        loading="lazy"
                        decoding="async"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div
                        className="project-card_image-placeholder"
                        aria-hidden="true"
                    >
                        {number}
                    </div>
                )}
            </div>

            <div className="project-card_content">
                <div className="project-card_meta">
                    <span className="project-card_number">{number}</span>

                    <span className="project-card_category">{category}</span>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div
                    className='project-card_technologies'
                    aria-label={`${title} technologies`}
                >
                    {technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

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

                    {live && (
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