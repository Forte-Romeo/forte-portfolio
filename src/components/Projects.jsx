import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-heading section-heading--split">
                    <div>
                        <p className="section-heading_eyebrow">Selected Work</p>

                        <h2>Things I've built while learning.</h2>
                    </div>

                    <p>
                        Practical projects that document my progression from web
                        fundamentals into modern React development.
                    </p>
                </div>

                <div className="projects_grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            category={project.category}
                            featured={project.featured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;