const projects = [
    {
        id: 1,
        number: '01',
        title: 'ForteFlow',
        description:
            'A full-stack software project currently being built as I expand into backend engineering, databases, authentication, REST APIs, and production application architecture.',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
        category: 'Full-Stack',
        featured: true,
        status: 'building',
        image: null,
        github: 'https://github.com/Forte-Romeo/forteflow',
        live: null,
    },
    {
        id: 2,
        number: '02',
        title: 'Weather Application',
        description:
            'A weather application that retrieves and displays weather information through an external API, presenting current conditions and relevant forecast information in a responsive interface.',
        technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
        category: 'Web Application',
        featured: false,
        status: 'live',
        image: '/images/projects/weather-app.webp',
        github: 'https://github.com/Forte-Romeo/weather-dashboard-react',
        live: 'https://forte-weather.vercel.app/',
    },
    {
        id: 3,
        number: '03',
        title: 'API Dashboard',
        description:
            'A responsive React dashboard powered by the JSONPlaceholder REST API, with search, sorting, pagination, user details, and loading, error, and empty states.',
        technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
        category: 'React Application',
        featured: false,
        status: 'live',
        image: '/images/projects/api-dashboard.webp',
        github: 'https://github.com/Forte-Romeo/api-dashboard',
        live: 'https://forte-api-dashboard.vercel.app',
    },
    {
        id: 4,
        number: '04',
        title: 'Full-Stack Authentication System',
        description:
            'A full-stack authentication application built with React, Express, and PostgreSQL. Implements JWT-based access authentication, secure HTTP-only refresh cookies, refresh-token rotation and revocation, and protected authentication workflows.',
        technologies: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'JavaScript'],
        category: 'Full-Stack',
        featured: false,
        status: 'live',
        image: '/images/projects/auth-ui.webp',
        github: 'https://github.com/Forte-Romeo/authentication-ui',
        live: 'https://forte-authentication-ui.vercel.app/',
    },
    {
        id: 5,
        number: '05',
        title: 'ForteFilms',
        description:
            'A movie discovery application that presents film information through a browsable interface, demonstrating frontend development and the integration of external data.',
        technologies: [
            'HTML',
            'JavaScript',
            'CSS',
        ],
        category: 'Frontend',
        featured: false,
        status: 'live',
        image: '/images/projects/movie-search.webp',
        github: 'https://github.com/Forte-Romeo/js-interactive-app',
        live: 'https://forte-films.vercel.app/',
    },
]

export default projects;