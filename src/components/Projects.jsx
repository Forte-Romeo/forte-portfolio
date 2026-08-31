import { useState } from "react";
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import projects from '../data/projects';

function Projects() {
    const [activeCategory, setActiveCategory] = useState('All')

    const categories = [
        'All',
        ...new Set(projects.map((project) => project.category)),
    ]

    const filteredProjects = 
        activeCategory === 'All'
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
              )

    return (
        <section className="section projects" id="projects" aria-labelledby="projects-title">
            <div className="container">
                <Reveal>
                    <div className="section-heading section-heading--split">
                        <div>
                            <p className="section-heading_eyebrow">Selected Work</p>

                            <h2 id="projects-title">Things I've built while learning.</h2>
                        </div>

                        <p>
                            A growing collection of applications that document my
                            progression through software engineering and modern web
                            development.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <div
                        className="projects_filters"
                        aria-label="Project filters"
                    >
                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category}
                                className={`projects_filter ${
                                activeCategory === category
                                    ? 'projects_filter--active'
                                    : ''
                                }`}
                                aria-pressed={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {filteredProjects.length > 0 ? (
                    <div className="projects_grid">
                        {filteredProjects.map((project, index) => (
                            <Reveal
                                key={project.id}
                                delay={index * 100}
                            >
                                <ProjectCard
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
                            </Reveal>
                        ))}
                    </div>
                ) : (
                    <Reveal>
                        <div className="projects_empty">
                            <p>No projects in this category yet.</p>
                        </div>
                    </Reveal>
                )}

                <Reveal delay={100}>
                    <div className="projects_footer">
                        <p
                            className="projects_result-count"
                            aria-live="polite"
                        >
                            Showing {filteredProjects.length}{' '}
                            {filteredProjects.length === 1
                                ? 'project'
                                : 'projects'}
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
                </Reveal>
            </div>
        </section>
    );
}

export default Projects;