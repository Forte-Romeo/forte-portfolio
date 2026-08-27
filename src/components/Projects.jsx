import ProjectCard from './ProjectCard';
import projects from '../data/projects';

function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-heading section-heading--split">
                    <div>
                        <p className="section-heading_eyebrow">Selected Work</p>

                        <h2>Projects I've built.</h2>
                    </div>

                    <p>
                        A collection of projects I've created while learning, experimenting,
                        and developing my skills.
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