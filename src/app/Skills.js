'use client'
import { Container } from "@/components"
import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';

const Skills = memo(() => {
    const [visibleSkills, setVisibleSkills] = useState(new Set());
    const [animatedProgress, setAnimatedProgress] = useState({});
    const [currentTime, setCurrentTime] = useState(new Date());
    const [typingText, setTypingText] = useState('');    const [skillDescriptions, setSkillDescriptions] = useState({});
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [hoveredFramework, setHoveredFramework] = useState(null);
    const [hoveredDatabase, setHoveredDatabase] = useState(null);
    const [frameworkDescriptions, setFrameworkDescriptions] = useState({});
    const [databaseDescriptions, setDatabaseDescriptions] = useState({});
    const [visibleFrameworks, setVisibleFrameworks] = useState(new Set());
    const [visibleDatabases, setVisibleDatabases] = useState(new Set());
    const skillsRef = useRef(null);

    const fullText = "Continuously evolving skill set...";

    // Typing animation for header
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setTypingText(fullText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);    // Update time less frequently for better performance
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 5000); // Update every 5 seconds instead of every second
        return () => clearInterval(interval);
    }, []);// Typing effect for skill descriptions with cleanup
    const typeDescription = useCallback((skillIndex, description) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= description.length) {
                setSkillDescriptions(prev => ({
                    ...prev,
                    [skillIndex]: description.substring(0, index)
                }));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        
        // Store interval for cleanup
        return interval;
    }, []);

    // Typing effect for framework descriptions with cleanup
    const typeFrameworkDescription = useCallback((frameworkIndex, description) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= description.length) {
                setFrameworkDescriptions(prev => ({
                    ...prev,
                    [frameworkIndex]: description.substring(0, index)
                }));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        
        return interval;
    }, []);

    // Typing effect for database descriptions with cleanup
    const typeDatabaseDescription = useCallback((databaseIndex, description) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= description.length) {
                setDatabaseDescriptions(prev => ({
                    ...prev,
                    [databaseIndex]: description.substring(0, index)
                }));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        
        return interval;
    }, []);    // Optimized Intersection Observer for progressive loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const skillIndex = entry.target.dataset.skillIndex;
                        const frameworkIndex = entry.target.dataset.frameworkIndex;
                        const databaseIndex = entry.target.dataset.databaseIndex;
                        
                        if (skillIndex) {
                            setVisibleSkills(prev => new Set([...prev, parseInt(skillIndex)]));
                            
                            // Animate progress bar with debounced timing
                            const skillLevel = entry.target.dataset.skillLevel;
                            setTimeout(() => {
                                setAnimatedProgress(prev => ({
                                    ...prev,
                                    [skillIndex]: parseInt(skillLevel)
                                }));
                            }, parseInt(skillIndex) * 150); // Reduced delay
                        }
                        
                        if (frameworkIndex) {
                            setVisibleFrameworks(prev => new Set([...prev, parseInt(frameworkIndex)]));
                        }
                        
                        if (databaseIndex) {
                            setVisibleDatabases(prev => new Set([...prev, parseInt(databaseIndex)]));
                        }
                        
                        // Stop observing after animation to reduce overhead
                        observer.unobserve(entry.target);
                    }
                });
            },
            { 
                threshold: 0.2, // Reduced threshold for earlier trigger
                rootMargin: '50px' // Add margin for smoother animations
            }
        );

        // Use setTimeout to defer observer setup
        const timeoutId = setTimeout(() => {
            const skillElements = document.querySelectorAll('[data-skill-index]');
            const frameworkElements = document.querySelectorAll('[data-framework-index]');
            const databaseElements = document.querySelectorAll('[data-database-index]');
            
            skillElements.forEach(el => observer.observe(el));
            frameworkElements.forEach(el => observer.observe(el));
            databaseElements.forEach(el => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);// Memoize skill data to prevent unnecessary re-renders
    const skills = useMemo(() => [
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
            description: 'ES6+ & modern patterns & Browser APIs'
        },
        { 
            name: 'Node.js', 
            icon: 'node.png', 
            color: '#68A063',
            level: 85,
            description: 'Server-side JavaScript runtime'
        }
    ], []);

    const frameworks = useMemo(() => [
        { name: 'React', level: 92, color: '#28A9E0', description: 'Component-based UI library', icon: 'react.png' },
        { name: 'Next.js', level: 85, color: '#000000', description: 'React production framework', icon: 'next.svg' },
        { name: 'Vue.js', level: 80, color: '#4FC08D', description: 'Progressive JavaScript framework', icon: 'react.png' },
        { name: 'Express.js', level: 82, color: '#68A063', description: 'Fast Node.js web framework', icon: 'node.png' },
        { name: 'TypeScript', level: 85, color: '#3178C6', description: 'Typed JavaScript superset', icon: 'react.png' },
        { name: 'Tailwind CSS', level: 90, color: '#06B6D4', description: 'Utility-first CSS framework', icon: 'css.png' }
    ], []);

    const databases = useMemo(() => [
        { name: 'MongoDB', level: 78, color: '#47A248', description: 'NoSQL document database', icon: 'node.png' },
        { name: 'MySQL', level: 75, color: '#4479A1', description: 'Relational database system', icon: 'node.png' },
        { name: 'Git', level: 88, color: '#F05032', description: 'Version control system', icon: 'node.png' }
    ], []);

    return(
        <div className="bg-code bg-cover bg-center py-[32px] tablet:py-[48px] lap:py-[64px] relative overflow-hidden">            {/* Simplified animated background for better performance */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap animate-fade-in-slow">
                    {`class Skills {
    constructor() {
        this.experience = "3+ years";
        this.expertise = ["Frontend", "Backend"];
        this.passion = "continuous learning";
    }
    
    async improveSkills() {
        while(this.passion === "continuous learning") {
            await this.practice();
            this.level++;
        }
    }
}`}
                </div>
            </div>{/* Reduce floating particles for better performance */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-primary/20 font-mono text-xs animate-float-slow"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 1}s`,
                            animationDuration: `${4 + Math.random() * 2}s`
                        }}
                    >
                        {['{}', '[]', '()', '<>', '/>', '=>'][Math.floor(Math.random() * 6)]}
                    </div>
                ))}
            </div>

            <Container>
                <div className="max-w-[1200px] m-auto space-y-[64px] relative z-10">
                    {/* Enhanced animated header */}
                    <div className="text-center space-y-6">                        {/* Terminal-style header */}
                        <div className="bg-gradient-to-r from-black/80 to-gray-900/80 rounded-lg border border-primary/30 p-4 tablet:p-6 backdrop-blur-sm max-w-2xl mx-auto">
                            <div className="flex items-center justify-between mb-3 tablet:mb-4">
                                <div className="flex items-center space-x-1 tablet:space-x-2">
                                    <div className="w-2 h-2 tablet:w-3 tablet:h-3 bg-red-500 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 tablet:w-3 tablet:h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                    <div className="w-2 h-2 tablet:w-3 tablet:h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                                    <span className="ml-2 tablet:ml-4 text-primary text-xs tablet:text-sm font-mono">~/skills.json</span>
                                </div>
                                <div className="text-xs text-gray-400 font-mono hidden tablet:block">
                                    {currentTime.toLocaleTimeString()}
                                </div>
                            </div>
                            <div className="font-mono text-xs tablet:text-sm text-green-400 mb-2">
                                <span className="text-gray-400">$</span> {typingText}
                                <span className="animate-pulse text-white">|</span>
                            </div>
                        </div>

                        <div className="relative inline-block">
                            <h3 className="text-primary text-lg tablet:text-xlg py-[12px] tablet:py-[16px] px-[24px] tablet:px-[40px] border-[3px] tablet:border-[4px] border-primary rounded-tl-[30px] tablet:rounded-tl-[40px] rounded-br-[30px] tablet:rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-1 tablet:gap-2">
                                    <span className="font-mono text-xs tablet:text-sm opacity-70 animate-pulse">{'</'}</span>
                                    Skills
                                    <span className="font-mono text-xs tablet:text-sm opacity-70 animate-pulse">{'>'}</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Animated border */}
                                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary via-transparent to-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin rounded-tl-[30px] tablet:rounded-tl-[40px] rounded-br-[30px] tablet:rounded-br-[40px]" style={{animationDuration: '3s'}}></div>
                            </h3>
                            <div className="text-primary/70 text-xs tablet:text-sm mt-2 font-mono animate-pulse">// Technical expertise level: Pro</div>
                        </div>

                        <div className="space-y-2 tablet:space-y-3">
                            <p className="text-sm tablet:text-medium text-gray-300 max-w-md mx-auto animate-fade-in-slow">
                                Motivated by the fear of being average.<br />
                                <span className="text-primary font-mono text-xs tablet:text-sm">console.log("Always learning, always growing");</span>
                            </p>
                            <div className="flex flex-col tablet:flex-row items-center justify-center space-y-1 tablet:space-y-0 tablet:space-x-4 text-xs font-mono text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <div className="w-1.5 h-1.5 tablet:w-2 tablet:h-2 bg-green-400 rounded-full animate-ping"></div>
                                    <span>Live Skills Dashboard</span>
                                </div>
                                <span>|</span>
                                <span>Updated: {currentTime.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>                    {/* Enhanced animated specialization cards */}
                    <div className="tablet:flex lap:justify-center lap:space-x-20 justify-around tablet:space-y-0 space-y-[32px]">
                        <div className="relative group animate-fade-in-slow">
                            <div className="bg-gradient-to-br from-gray-2 to-black/50 border-l-[8px] border-primary rounded-[16px] p-[24px] backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary/70 group-hover:shadow-2xl group-hover:shadow-primary/20 relative overflow-hidden">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <img src="/desktop.png" alt="Web Development" className="w-16 h-16 mx-auto group-hover:scale-125 transition-transform duration-500"/>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                                        <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div>
                                        <h6 className="text-[20px] font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">Web Development</h6>
                                        <p className="text-primary font-mono text-sm">Frontend · Backend · Full Stack</p>
                                        <div className="text-xs text-gray-400 mt-2 font-mono">// Modern web solutions</div>
                                    </div>
                                </div>
                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                        
                        <div className="relative group animate-fade-in-slow" style={{animationDelay: '0.3s'}}>
                            <div className="bg-gradient-to-br from-gray-2 to-black/50 border-l-[8px] border-secondary rounded-[16px] p-[24px] backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-secondary/70 group-hover:shadow-2xl group-hover:shadow-secondary/20 relative overflow-hidden">
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <img src="/mobile.png" alt="App Development" className="w-16 h-16 mx-auto group-hover:scale-125 transition-transform duration-500"/>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
                                        <div className="absolute inset-0 bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div>
                                        <h6 className="text-[20px] font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">App Development</h6>
                                        <p className="text-secondary font-mono text-sm">React Native · Progressive Web Apps</p>
                                        <div className="text-xs text-gray-400 mt-2 font-mono">// Cross-platform solutions</div>
                                    </div>
                                </div>
                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced core technologies with progressive loading */}
                    <div className="space-y-8" ref={skillsRef}>
                        <div className="text-center animate-fade-in-slow">
                            <h4 className="text-lg font-bold text-white mb-2">Core Technologies</h4>
                            <p className="text-primary font-mono text-sm">// Primary tech stack</p>
                            <div className="mt-2 flex items-center justify-center space-x-2 text-xs text-gray-500 font-mono">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span>Real-time proficiency tracking</span>
                            </div>
                        </div>
                        
                        <div className="grid tablet:grid-cols-2 lap:grid-cols-4 gap-8">                            {skills.map((skill, index) => (                                <div 
                                    key={index} 
                                    className={`group cursor-pointer transition-all duration-500 ${visibleSkills.has(index) ? 'animate-skill-reveal' : 'opacity-0 translate-y-8'}`}
                                    data-skill-index={index}
                                    data-skill-level={skill.level}
                                    style={{animationDelay: `${index * 0.2}s`}}
                                    onMouseEnter={() => {
                                        setHoveredSkill(index);
                                        typeDescription(index, skill.description);
                                    }}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-6 border border-primary/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20 relative overflow-hidden">
                                        {/* Skill icon with enhanced animations */}
                                        <div className="text-center mb-4">
                                            <div 
                                                className="w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-3 relative group-hover:scale-125 transition-all duration-500 group-hover:rotate-12"
                                                style={{ backgroundColor: skill.color + '20', border: `2px solid ${skill.color}` }}
                                            >
                                                <img className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" src={`/${skill.icon}`} alt={skill.name}/>
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                {/* Orbital rings */}
                                                <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
                                            </div>
                                            <h5 className="font-bold text-white text-lg group-hover:text-primary transition-colors duration-300">{skill.name}</h5>                                            <div className="text-xs text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300 min-h-[40px] overflow-hidden">
                                                {hoveredSkill === index ? (
                                                    <span>
                                                        {skillDescriptions[index] || ''}
                                                        <span className="text-primary animate-typewriter-blink">|</span>
                                                    </span>
                                                ) : (
                                                    skill.description
                                                )}
                                            </div>
                                        </div>

                                        {/* Enhanced progress bar with animation */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-400 font-mono">Proficiency</span>
                                                <span className="text-primary font-mono font-bold">{animatedProgress[index] || 0}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">                                                <div 
                                                    className="h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden animate-progress-glow"
                                                    style={{ 
                                                        width: `${animatedProgress[index] || 0}%`, 
                                                        backgroundColor: skill.color,
                                                        boxShadow: `0 0 15px ${skill.color}80`
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                                                </div>
                                                {/* Progress glow effect */}
                                                <div 
                                                    className="absolute top-0 left-0 h-full rounded-full opacity-50 blur-sm transition-all duration-2000"
                                                    style={{ 
                                                        width: `${animatedProgress[index] || 0}%`, 
                                                        backgroundColor: skill.color
                                                    }}
                                                ></div>
                                            </div>
                                            {/* Skill level indicator */}
                                            <div className="text-center">
                                                <span className="text-xs font-mono px-2 py-1 rounded-full border" style={{color: skill.color, borderColor: skill.color + '50', backgroundColor: skill.color + '10'}}>
                                                    {skill.level >= 90 ? '🏆 Expert' : skill.level >= 80 ? '🥇 Advanced' : skill.level >= 70 ? '🥈 Proficient' : '🥉 Intermediate'}
                                                </span>
                                            </div>
                                        </div>                                        {/* Reduce hover particles for better performance */}
                                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1 h-1 rounded-full animate-ping"
                                                    style={{
                                                        backgroundColor: skill.color,
                                                        top: `${30 + Math.random() * 40}%`,
                                                        left: `${30 + Math.random() * 40}%`,
                                                        animationDelay: `${i * 0.4}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>{/* Frameworks and tools with enhanced design */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h4 className="text-lg font-bold text-white mb-2">Frameworks & Libraries</h4>
                            <p className="text-primary font-mono text-sm">// Modern development tools</p>
                        </div>
                          <div className="grid tablet:grid-cols-2 lap:grid-cols-3 gap-6">
                            {frameworks.map((framework, index) => (
                                <div 
                                    key={index} 
                                    className={`group cursor-pointer transition-all duration-500 ${visibleFrameworks.has(index) ? 'animate-skill-reveal' : 'opacity-0 translate-y-8'}`}
                                    data-framework-index={index}
                                    style={{animationDelay: `${index * 0.15}s`}}
                                    onMouseEnter={() => {
                                        setHoveredFramework(index);
                                        typeFrameworkDescription(index, framework.description);
                                    }}
                                    onMouseLeave={() => setHoveredFramework(null)}
                                >
                                    <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-6 border border-primary/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20 relative overflow-hidden">                                        {/* Framework header */}
                                        <div className="text-center mb-4">
                                            <div 
                                                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-3 relative group-hover:scale-125 transition-all duration-500 group-hover:rotate-12"
                                                style={{ backgroundColor: framework.color + '20', border: `2px solid ${framework.color}` }}
                                            >
                                                <img className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" src={`/${framework.icon}`} alt={framework.name}/>
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                {/* Orbital rings */}
                                                <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
                                            </div>
                                            <h5 className="font-bold text-white text-lg group-hover:text-primary transition-colors duration-300">{framework.name}</h5>
                                            <div className="text-xs text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300 min-h-[40px] overflow-hidden">
                                                {hoveredFramework === index ? (
                                                    <span>
                                                        {frameworkDescriptions[index] || ''}
                                                        <span className="text-primary animate-typewriter-blink">|</span>
                                                    </span>
                                                ) : (
                                                    framework.description
                                                )}
                                            </div>
                                        </div>                                        {/* Progress bar */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-400 font-mono">Proficiency</span>
                                                <span className="text-primary font-mono font-bold">{framework.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">
                                                <div 
                                                    className="h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden animate-progress-glow"
                                                    style={{ 
                                                        width: `${framework.level}%`, 
                                                        backgroundColor: framework.color,
                                                        boxShadow: `0 0 15px ${framework.color}80`
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                                                </div>
                                                {/* Progress glow effect */}
                                                <div 
                                                    className="absolute top-0 left-0 h-full rounded-full opacity-50 blur-sm transition-all duration-2000"
                                                    style={{ 
                                                        width: `${framework.level}%`, 
                                                        backgroundColor: framework.color
                                                    }}
                                                ></div>
                                            </div>
                                            {/* Skill level indicator */}
                                            <div className="text-center">
                                                <span className="text-xs font-mono px-2 py-1 rounded-full border" style={{color: framework.color, borderColor: framework.color + '50', backgroundColor: framework.color + '10'}}>
                                                    {framework.level >= 90 ? '🏆 Expert' : framework.level >= 80 ? '🥇 Advanced' : framework.level >= 70 ? '🥈 Proficient' : '🥉 Intermediate'}
                                                </span>
                                            </div>
                                        </div>                                        {/* Reduce hover particles for better performance */}
                                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1 h-1 rounded-full animate-ping"
                                                    style={{
                                                        backgroundColor: framework.color,
                                                        top: `${30 + Math.random() * 40}%`,
                                                        left: `${30 + Math.random() * 40}%`,
                                                        animationDelay: `${i * 0.4}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Databases and tools */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h4 className="text-lg font-bold text-white mb-2">Databases & Tools</h4>
                            <p className="text-primary font-mono text-sm">// Data management & workflow</p>
                        </div>
                          <div className="grid tablet:grid-cols-2 lap:grid-cols-3 gap-6">
                            {databases.map((db, index) => (
                                <div 
                                    key={index} 
                                    className={`group cursor-pointer transition-all duration-500 ${visibleDatabases.has(index) ? 'animate-skill-reveal' : 'opacity-0 translate-y-8'}`}
                                    data-database-index={index}
                                    style={{animationDelay: `${index * 0.15}s`}}
                                    onMouseEnter={() => {
                                        setHoveredDatabase(index);
                                        typeDatabaseDescription(index, db.description);
                                    }}
                                    onMouseLeave={() => setHoveredDatabase(null)}
                                >
                                    <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-6 border border-primary/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20 relative overflow-hidden">                                        {/* Database header */}
                                        <div className="text-center mb-4">
                                            <div 
                                                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-3 relative group-hover:scale-125 transition-all duration-500 group-hover:rotate-12"
                                                style={{ backgroundColor: db.color + '20', border: `2px solid ${db.color}` }}
                                            >
                                                <img className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" src={`/${db.icon}`} alt={db.name}/>
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                {/* Orbital rings */}
                                                <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
                                            </div>
                                            <h5 className="font-bold text-white text-lg group-hover:text-primary transition-colors duration-300">{db.name}</h5>
                                            <div className="text-xs text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300 min-h-[40px] overflow-hidden">
                                                {hoveredDatabase === index ? (
                                                    <span>
                                                        {databaseDescriptions[index] || ''}
                                                        <span className="text-primary animate-typewriter-blink">|</span>
                                                    </span>
                                                ) : (
                                                    db.description
                                                )}
                                            </div>
                                        </div>                                        {/* Progress bar */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-gray-400 font-mono">Proficiency</span>
                                                <span className="text-primary font-mono font-bold">{db.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">
                                                <div 
                                                    className="h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden animate-progress-glow"
                                                    style={{ 
                                                        width: `${db.level}%`, 
                                                        backgroundColor: db.color,
                                                        boxShadow: `0 0 15px ${db.color}80`
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                                                </div>
                                                {/* Progress glow effect */}
                                                <div 
                                                    className="absolute top-0 left-0 h-full rounded-full opacity-50 blur-sm transition-all duration-2000"
                                                    style={{ 
                                                        width: `${db.level}%`, 
                                                        backgroundColor: db.color
                                                    }}
                                                ></div>
                                            </div>
                                            {/* Skill level indicator */}
                                            <div className="text-center">
                                                <span className="text-xs font-mono px-2 py-1 rounded-full border" style={{color: db.color, borderColor: db.color + '50', backgroundColor: db.color + '10'}}>
                                                    {db.level >= 90 ? '🏆 Expert' : db.level >= 80 ? '🥇 Advanced' : db.level >= 70 ? '🥈 Proficient' : '🥉 Intermediate'}
                                                </span>
                                            </div>
                                        </div>                                        {/* Reduce hover particles for better performance */}
                                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1 h-1 rounded-full animate-ping"
                                                    style={{
                                                        backgroundColor: db.color,
                                                        top: `${30 + Math.random() * 40}%`,
                                                        left: `${30 + Math.random() * 40}%`,
                                                        animationDelay: `${i * 0.4}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>                </div>
            </Container>
        </div>
    )
});

Skills.displayName = 'Skills';

export default Skills;