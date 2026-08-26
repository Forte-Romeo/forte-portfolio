import ProjectCard from './ProjectCard'

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
                    <ProjectCard
                        title="Weather Application"
                        description="A responsive weather application that retrieves live weather information through an external API."
                        technologies={['React', 'JavaScript', 'API']}
                    />

                    <ProjectCard
                        title="Movie Search Application"
                        description="A movie discovery application built around API-powered search and dynamic results."
                        technologies={['JavaScript', 'API', 'CSS']}
                    />

                    <ProjectCard
                        title="Authentication UI"
                        description="A modern authentication interface demonstrating reusable React components and interactive forms."
                        technologies={['React', 'JavaScript', 'CSS']}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;