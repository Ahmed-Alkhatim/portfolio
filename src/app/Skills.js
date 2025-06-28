import { Container } from "@/components"

export default () => {
    const skills = [
        { 
            name: 'HTML5', 
            icon: 'html.png', 
            color: '#E54F26',
            level: 95,
            description: 'Semantic markup & accessibility'
        },
        { 
            name: 'CSS3', 
            icon: 'css.png', 
            color: '#0C73B8',
            level: 90,
            description: 'Modern layouts & animations'
        },
        { 
            name: 'JavaScript', 
            icon: 'node.png', 
            color: '#E7A020',
            level: 88,
            description: 'ES6+ & modern patterns'
        },
        { 
            name: 'React', 
            icon: 'react.png', 
            color: '#28A9E0',
            level: 92,
            description: 'Hooks & state management'
        }
    ]

    const frameworks = [
        { name: 'Next.js', level: 85, color: '#000000' },
        { name: 'Vue.js', level: 80, color: '#4FC08D' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
        { name: 'Node.js', level: 75, color: '#68A063' },
        { name: 'Git', level: 88, color: '#F05032' }
    ]

    return(
        <div className="bg-code bg-cover bg-center py-[64px] relative overflow-hidden">
            {/* Code pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap">
                    {`class Skills {
    constructor() {
        this.experience = "3+ years";
        this.expertise = ["Frontend", "Backend", "Full Stack"];
        this.passion = "continuous learning";
    }
    
    getSkillLevel(skill) {
        return this.skills[skill] || "learning...";
    }
}`}
                </div>
            </div>

            <Container>
                <div className="max-w-[1200px] m-auto space-y-[64px] relative z-10">
                    {/* Enhanced header */}
                    <div className="text-center space-y-4">
                        <div className="relative inline-block">
                            <h3 className="text-primary text-xlg py-[16px] px-[40px] border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="font-mono text-sm opacity-70">{'</'}</span>
                                    Skills
                                    <span className="font-mono text-sm opacity-70">{'>'}</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </h3>
                            <div className="text-primary/70 text-sm mt-2 font-mono">// Technical expertise</div>
                        </div>
                        <p className="text-medium text-gray-300 max-w-md mx-auto">
                            Motivated by the fear of being average.<br />
                            <span className="text-primary font-mono text-sm">console.log("Always learning, always growing");</span>
                        </p>
                    </div>                    {/* Enhanced specialization cards */}
                    <div className="tablet:flex lap:justify-center lap:space-x-20 justify-around tablet:space-y-0 space-y-[32px]">
                        <div className="relative group">
                            <div className="bg-gradient-to-br from-gray-2 to-black/50 border-l-[8px] border-primary rounded-[16px] p-[24px] backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-primary/70">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <img src="/desktop.png" alt="Web Development" className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"/>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h6 className="text-[20px] font-bold text-white mb-2">Web Development</h6>
                                        <p className="text-primary font-mono text-sm">Frontend · Backend · Full Stack</p>
                                        <div className="text-xs text-gray-400 mt-2 font-mono">// Modern web solutions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <div className="bg-gradient-to-br from-gray-2 to-black/50 border-l-[8px] border-secondary rounded-[16px] p-[24px] backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-secondary/70">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <img src="/mobile.png" alt="App Development" className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"/>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h6 className="text-[20px] font-bold text-white mb-2">App Development</h6>
                                        <p className="text-secondary font-mono text-sm">React Native · Progressive Web Apps</p>
                                        <div className="text-xs text-gray-400 mt-2 font-mono">// Cross-platform solutions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core technologies with progress bars */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h4 className="text-lg font-bold text-white mb-2">Core Technologies</h4>
                            <p className="text-primary font-mono text-sm">// Primary tech stack</p>
                        </div>
                        
                        <div className="grid tablet:grid-cols-2 lap:grid-cols-4 gap-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-6 border border-primary/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 relative overflow-hidden">
                                        {/* Skill icon */}
                                        <div className="text-center mb-4">
                                            <div 
                                                className="w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-3 relative group-hover:scale-110 transition-transform duration-300"
                                                style={{ backgroundColor: skill.color + '20', border: `2px solid ${skill.color}` }}
                                            >
                                                <img className="w-10 h-10" src={`/${skill.icon}`} alt={skill.name}/>
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <h5 className="font-bold text-white text-lg">{skill.name}</h5>
                                            <p className="text-xs text-gray-400 font-mono">{skill.description}</p>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-400 font-mono">Proficiency</span>
                                                <span className="text-primary font-mono">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <div 
                                                    className="h-full rounded-full transition-all duration-1000 ease-out relative"
                                                    style={{ 
                                                        width: `${skill.level}%`, 
                                                        backgroundColor: skill.color,
                                                        boxShadow: `0 0 10px ${skill.color}50`
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional frameworks and tools */}
                    <div className="space-y-6">
                        <div className="text-center">
                            <h4 className="text-lg font-bold text-white mb-2">Frameworks & Tools</h4>
                            <p className="text-primary font-mono text-sm">// Extended toolkit</p>
                        </div>
                        
                        <div className="grid tablet:grid-cols-2 lap:grid-cols-3 gap-4">
                            {frameworks.map((framework, index) => (
                                <div key={index} className="group">
                                    <div className="bg-gradient-to-r from-gray-2 to-black/30 rounded-lg p-4 border border-primary/10 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:scale-105">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-mono text-white font-semibold">{framework.name}</span>
                                            <span className="text-xs font-mono" style={{ color: framework.color }}>{framework.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                            <div 
                                                className="h-full rounded-full transition-all duration-700 ease-out"
                                                style={{ 
                                                    width: `${framework.level}%`, 
                                                    backgroundColor: framework.color,
                                                    boxShadow: `0 0 8px ${framework.color}40`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}