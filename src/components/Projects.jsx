import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function Projects() {
    const featuredProjects = projects.filter(
        (project) => project.featured
    )

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-heading section-heading--split">
                    <div>
                        <p className="section-heading_eyebrow">Selected Work</p>

                        <h2>Things I've built while learning.</h2>
                    </div>

                    <p>
                        A growing collection of applications that document my
                        progression through software engineering and modern web
                        development.
                    </p>
                </div>

                <div className="projects_grid">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            number={project.number}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            category={project.category}
                            featured={project.featured}
                            image={project.image}
                            github={project.github}
                            live={project.live}
                        />
                    ))}
                </div>

                <div className="projects_footer">
                    <p>
                        More projects will be added as I continue building.
                    </p>

                    <a
                        href="https://github.com/Forte-Romeo"
                        target="_blank"
                        rel="noreferrer"
                        className="projects_github"
                    >
                        Explore GitHub ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;