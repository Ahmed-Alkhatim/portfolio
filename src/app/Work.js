"use client"
import { Container } from "@/components"
import { useState, useEffect } from "react"

const projects = [
    { 
        name: "AqaratExpo Web App", 
        skills: ["Next.js", "React", "Tailwind CSS"], 
        img: "aqarat.png",
        description: "Real estate platform with advanced filtering",
        type: "Full Stack",
        year: "2024"
    },
    { 
        name: "Agency Portfolio", 
        skills: ["React", "CSS3", "JavaScript"], 
        img: "agency.png",
        description: "Modern agency website with animations",
        type: "Frontend",
        year: "2023"
    },
    { 
        name: "EasyLabs Platform", 
        skills: ["React", "CSS3", "REST API"], 
        img: "easylabs.png",
        description: "Laboratory management system",
        type: "Full Stack",
        year: "2024"
    },
    { 
        name: "CardsCart E-commerce", 
        skills: ["Nuxt.js", "Vue.js", "Node.js"], 
        img: "cardscart.net.jpeg",
        description: "E-commerce platform for trading cards",
        type: "Full Stack",
        year: "2023"
    },
    { 
        name: "EcoNile Initiative", 
        skills: ["React", "CSS3", "Animation"], 
        img: "econile.org.jpeg",
        description: "Environmental awareness platform",
        type: "Frontend",
        year: "2024"
    },
    { 
        name: "CardsCart Dashboard", 
        skills: ["Nuxt.js", "Vue.js", "Charts"], 
        img: "d.cardscart.net.jpeg",
        description: "Admin dashboard with analytics",
        type: "Frontend",
        year: "2023"
    },
]

export default () => {
    const [filter, setFilter] = useState('All')
    const [hoveredProject, setHoveredProject] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
    const [animatedCounter, setAnimatedCounter] = useState({
        projects: 0,
        years: 0,
        satisfaction: 0
    })
    
    const filterTypes = ['All', 'Full Stack', 'Frontend']
    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(project => project.type === filter)

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('work-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    // Animated counters
    useEffect(() => {
        if (isVisible) {
            const animateCounter = (key, target, duration = 2000) => {
                let start = 0;
                const increment = target / (duration / 50);
                
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        start = target;
                        clearInterval(timer);
                    }
                    setAnimatedCounter(prev => ({
                        ...prev,
                        [key]: Math.floor(start)
                    }));
                }, 50);
            };

            animateCounter('projects', projects.length);
            animateCounter('years', 3);
            animateCounter('satisfaction', 100);
        }
    }, [isVisible]);

    return( 
        <div id="work-section" className="bg-gray-2 py-[64px] relative overflow-hidden">
            {/* Enhanced animated background code pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap animate-fade-in-slow">
                    {`class Portfolio {
    constructor() {
        this.projects = [];
        this.experience = "3+ years";
        this.commitment = "excellence";
    }
    
    showcase() {
        return this.projects.map(project => ({
            ...project,
            quality: "premium",
            delivered: "on-time"
        }));
    }
}`}
                </div>
                {/* Floating code elements */}
                <div className="absolute top-20 right-20 text-primary/20 animate-float-slow">{'{ }'}</div>
                <div className="absolute bottom-32 left-16 text-primary/20 animate-float-fast">{'[ ]'}</div>
                <div className="absolute top-40 left-40 text-primary/20 animate-floating">{'< />'}</div>
            </div>

            <Container>
                <div className="space-y-[64px] relative z-10">
                    {/* Enhanced header with animations */}
                    <div className={`text-center space-y-4 transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="relative inline-block group">
                            <h3 className="text-primary text-xlg py-[16px] px-[40px] border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="font-mono text-sm opacity-70 group-hover:opacity-100 transition-opacity">{'</'}</span>
                                    <span className="group-hover:text-yellow-300 transition-colors">Work</span>
                                    <span className="font-mono text-sm opacity-70 group-hover:opacity-100 transition-opacity">{'>'}</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Pulse border effect */}
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-tl-[40px] rounded-br-[40px] animate-pulse transition-all duration-300"></div>
                            </h3>
                            <div className="text-primary/70 text-sm mt-2 font-mono opacity-0 animate-fade-in-slow" style={{animationDelay: '0.3s'}}>
                                // Featured projects
                            </div>
                        </div>
                        <p className={`text-medium text-gray-300 max-w-md mx-auto transition-all duration-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                        }`} style={{transitionDelay: '0.2s'}}>
                            I had the pleasure of working with these awesome projects.<br />
                            <span className="text-primary font-mono text-sm hover:text-yellow-300 transition-colors">
                                portfolio.showcase();
                            </span>
                        </p>
                    </div>

                    {/* Enhanced project filter with animations */}
                    <div className={`flex justify-center space-x-4 transition-all duration-700 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`} style={{transitionDelay: '0.4s'}}>
                        {filterTypes.map((type, index) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 border-2 hover:scale-105 hover:shadow-lg ${
                                    filter === type
                                        ? 'bg-primary text-black border-primary shadow-lg shadow-primary/30 scale-105'
                                        : 'bg-transparent text-primary border-primary/30 hover:border-primary/60 hover:bg-primary/10'
                                }`}
                                style={{
                                    animationDelay: `${0.6 + index * 0.1}s`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: 'all 0.7s ease'
                                }}
                            >
                                {type}
                            </button>
                        ))}
                    </div>                    {/* Enhanced projects grid with staggered animations */}
                    <div className="grid tablet:grid-cols-2 lap:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Project 
                                key={`${filter}-${index}`}
                                project={project} 
                                index={index}
                                onHover={setHoveredProject}
                                isHovered={hoveredProject === index}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>

                    {/* Enhanced project stats with animated counters */}
                    <div className={`bg-gradient-to-r from-gray-2 to-black/30 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm group hover:border-primary/40 transition-all duration-500 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`} style={{transitionDelay: '0.8s'}}>
                        <div className="grid tablet:grid-cols-3 gap-8 text-center">
                            <div className="space-y-2 group/stat hover:bg-primary/5 rounded-lg p-4 transition-all duration-300">
                                <div className="text-3xl font-bold text-primary font-mono group-hover/stat:text-yellow-300 transition-colors">
                                    {animatedCounter.projects}+
                                </div>
                                <div className="text-gray-300 font-mono">Projects Completed</div>
                                <div className="w-full bg-gray-700/50 rounded-full h-1 mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity">
                                    <div className="h-full bg-primary rounded-full animate-progress-fill"></div>
                                </div>
                            </div>
                            <div className="space-y-2 group/stat hover:bg-primary/5 rounded-lg p-4 transition-all duration-300">
                                <div className="text-3xl font-bold text-primary font-mono group-hover/stat:text-yellow-300 transition-colors">
                                    {animatedCounter.years}+
                                </div>
                                <div className="text-gray-300 font-mono">Years Experience</div>
                                <div className="w-full bg-gray-700/50 rounded-full h-1 mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity">
                                    <div className="h-full bg-green-400 rounded-full animate-progress-fill"></div>
                                </div>
                            </div>
                            <div className="space-y-2 group/stat hover:bg-primary/5 rounded-lg p-4 transition-all duration-300">
                                <div className="text-3xl font-bold text-primary font-mono group-hover/stat:text-yellow-300 transition-colors">
                                    {animatedCounter.satisfaction}%
                                </div>
                                <div className="text-gray-300 font-mono">Client Satisfaction</div>
                                <div className="w-full bg-gray-700/50 rounded-full h-1 mt-2 opacity-0 group-hover/stat:opacity-100 transition-opacity">
                                    <div className="h-full bg-yellow-400 rounded-full animate-progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>                </div>
            </Container>
        </div>
    )
}

const Project = ({ project, index, onHover, isHovered, isVisible }) => {
    return(
        <div 
            className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{transitionDelay: `${0.9 + index * 0.1}s`}}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
        >
            <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] overflow-hidden border border-primary/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                {/* Enhanced project image with overlay */}
                <div className="relative h-[200px] overflow-hidden">
                    <img 
                        src={`/projects/${project.img}`} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Animated project type badge */}
                    <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110">
                        <span className="px-3 py-1 bg-primary/90 text-black text-xs font-mono font-bold rounded-full backdrop-blur-sm animate-pulse">
                            {project.type}
                        </span>
                    </div>

                    {/* Animated year badge */}
                    <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110">
                        <span className="px-3 py-1 bg-black/70 text-primary text-xs font-mono font-bold rounded-full backdrop-blur-sm border border-primary/30">
                            {project.year}
                        </span>
                    </div>

                    {/* Enhanced hover overlay with animations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {project.description}
                            </p>
                        </div>
                        {/* Floating code symbol */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary/50 text-2xl font-mono opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500">
                            {'< />'}
                        </div>
                    </div>

                    {/* Enhanced code overlay effect with syntax highlighting */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="text-primary text-xs font-mono leading-relaxed p-4 whitespace-pre-wrap">
                            <span className="text-purple-400">function</span>{' '}
                            <span className="text-blue-400">{project.name.replace(/\s/g, '')}</span>
                            <span className="text-gray-300">() {'{'}</span><br/>
                            <span className="pl-4 text-gray-300">return {'{'}</span><br/>
                            <span className="pl-8 text-yellow-300">status:</span> <span className="text-green-300">"completed"</span>,<br/>
                            <span className="pl-8 text-yellow-300">client:</span> <span className="text-green-300">"satisfied"</span>,<br/>
                            <span className="pl-8 text-yellow-300">code:</span> <span className="text-green-300">"clean & scalable"</span><br/>
                            <span className="pl-4 text-gray-300">{'};'}</span><br/>
                            <span className="text-gray-300">{'}'}</span>
                        </div>
                    </div>

                    {/* Glowing border effect */}
                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-t-[20px] transition-all duration-500"></div>
                </div>

                {/* Enhanced project info with animations */}
                <div className="p-6 space-y-4">
                    <div>
                        <h6 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1">
                            {project.name}
                        </h6>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {project.description}
                        </p>
                    </div>

                    {/* Enhanced tech stack with hover animations */}
                    <div className="space-y-2">
                        <div className="text-primary text-xs font-mono group-hover:text-yellow-300 transition-colors">
                            // Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-mono hover:bg-primary hover:text-black hover:scale-110 transition-all duration-200 cursor-pointer transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30"
                                    style={{
                                        animationDelay: `${skillIndex * 0.1}s`
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced project actions with animations */}
                    <div className="flex space-x-3 pt-2">
                        <button className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary py-2 px-4 rounded-lg font-mono text-sm transition-all duration-300 border border-primary/30 hover:border-primary/60 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                            View Details
                        </button>
                        <button className="flex-1 bg-transparent hover:bg-primary hover:text-black text-primary py-2 px-4 rounded-lg font-mono text-sm transition-all duration-300 border border-primary hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                            Live Demo
                        </button>
                    </div>

                    {/* Hover progress indicator */}
                    <div className="w-full bg-gray-700/50 rounded-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                            style={{
                                top: `${15 + Math.random() * 70}%`,
                                left: `${15 + Math.random() * 70}%`,
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '1.5s'
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}