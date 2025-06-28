"use client"
import { Container } from "@/components"
import { useState } from "react"

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
    
    const filterTypes = ['All', 'Full Stack', 'Frontend']
    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(project => project.type === filter)

    return( 
        <div className="bg-gray-2 py-[64px] relative overflow-hidden">
            {/* Background code pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap">
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
            </div>

            <Container>
                <div className="space-y-[64px] relative z-10">
                    {/* Enhanced header */}
                    <div className="text-center space-y-4">
                        <div className="relative inline-block">
                            <h3 className="text-primary text-xlg py-[16px] px-[40px] border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="font-mono text-sm opacity-70">{'</'}</span>
                                    Work
                                    <span className="font-mono text-sm opacity-70">{'>'}</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </h3>
                            <div className="text-primary/70 text-sm mt-2 font-mono">// Featured projects</div>
                        </div>
                        <p className="text-medium text-gray-300 max-w-md mx-auto">
                            I had the pleasure of working with these awesome projects.<br />
                            <span className="text-primary font-mono text-sm">portfolio.showcase();</span>
                        </p>
                    </div>

                    {/* Project filter */}
                    <div className="flex justify-center space-x-4">
                        {filterTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 border-2 ${
                                    filter === type
                                        ? 'bg-primary text-black border-primary shadow-lg shadow-primary/30'
                                        : 'bg-transparent text-primary border-primary/30 hover:border-primary/60 hover:bg-primary/10'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>                    {/* Enhanced projects grid */}
                    <div className="grid tablet:grid-cols-2 lap:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Project 
                                key={index} 
                                project={project} 
                                index={index}
                                onHover={setHoveredProject}
                                isHovered={hoveredProject === index}
                            />
                        ))}
                    </div>

                    {/* Project stats */}
                    <div className="bg-gradient-to-r from-gray-2 to-black/30 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm">
                        <div className="grid tablet:grid-cols-3 gap-8 text-center">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary font-mono">{projects.length}+</div>
                                <div className="text-gray-300 font-mono">Projects Completed</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary font-mono">3+</div>
                                <div className="text-gray-300 font-mono">Years Experience</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary font-mono">100%</div>
                                <div className="text-gray-300 font-mono">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Project = ({ project, index, onHover, isHovered }) => {
    return(
        <div 
            className="group cursor-pointer"
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
        >
            <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] overflow-hidden border border-primary/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* Project image with overlay */}
                <div className="relative h-[200px] overflow-hidden">
                    <img 
                        src={`/projects/${project.img}`} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Project type badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-black text-xs font-mono font-bold rounded-full backdrop-blur-sm">
                            {project.type}
                        </span>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/70 text-primary text-xs font-mono font-bold rounded-full backdrop-blur-sm border border-primary/30">
                            {project.year}
                        </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Code overlay effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="text-primary text-xs font-mono leading-relaxed p-4 whitespace-pre-wrap">
                            {`function ${project.name.replace(/\s/g, '')}() {
    return {
        status: "completed",
        client: "satisfied",
        code: "clean & scalable"
    };
}`}
                        </div>
                    </div>
                </div>

                {/* Project info */}
                <div className="p-6 space-y-4">
                    <div>
                        <h6 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                            {project.name}
                        </h6>
                        <p className="text-gray-400 text-sm">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech stack */}
                    <div className="space-y-2">
                        <div className="text-primary text-xs font-mono">// Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-mono hover:bg-primary/30 transition-colors duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project actions */}
                    <div className="flex space-x-3 pt-2">
                        <button className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary py-2 px-4 rounded-lg font-mono text-sm transition-all duration-300 border border-primary/30 hover:border-primary/60">
                            View Details
                        </button>
                        <button className="flex-1 bg-transparent hover:bg-primary hover:text-black text-primary py-2 px-4 rounded-lg font-mono text-sm transition-all duration-300 border border-primary">
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}