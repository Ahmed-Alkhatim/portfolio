'use client'
import { Container } from "@/components";
import { useState, useEffect, useRef } from 'react';

export default function MyInfo() {
    const [typedText, setTypedText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [isTerminalActive, setIsTerminalActive] = useState(false);
    const [cpuUsage, setCpuUsage] = useState(45);
    const [memoryUsage, setMemoryUsage] = useState(67);
    const [diskUsage, setDiskUsage] = useState(75);
    const [networkSpeed, setNetworkSpeed] = useState(156);
    const [isOnline, setIsOnline] = useState(true);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isCodeMode, setIsCodeMode] = useState(false);
    const [matrixChars, setMatrixChars] = useState([]);    const [activeConnections, setActiveConnections] = useState(12);
    const cardRef = useRef(null);
    
    const codeLines = [
        "$ whoami", 
        "> Ahmed Alkhatim - Full-Stack Developer",
        "$ cat skills.json",
        "> { \"frontend\": [\"React\", \"TypeScript\", \"Next.js\"] }",
        "$ cat experience.md",
        "> ## 3+ years building scalable applications",
        "$ git log --oneline -5",
        "> feat: enhanced portfolio with animations",
        "> fix: optimized performance metrics",
        "> docs: updated README with new features",
        "$ npm run deploy",
        "> ✅ Deployment successful - alkhatim.dev",
        "$ git status",
        "> On branch: continuous-learning",
        "$ ps aux | grep creativity",
        "> creativity    100%    infinite    running",
        "$ uptime",
        "> 3+ years up, coding with passion ⚡"
    ];

    // Enhanced typing animation with multiple lines
    useEffect(() => {
        if (currentLine < codeLines.length) {
            const line = codeLines[currentLine];
            let charIndex = 0;
            
            const typeInterval = setInterval(() => {
                if (charIndex <= line.length) {
                    setTypedText(line.substring(0, charIndex));
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        setCurrentLine(prev => (prev + 1) % codeLines.length);
                        setTypedText('');
                    }, 1500);
                }
            }, 80);

            return () => clearInterval(typeInterval);
        }
    }, [currentLine]);

    // Advanced system monitoring with more metrics
    useEffect(() => {
        const interval = setInterval(() => {
            setCpuUsage(prev => Math.max(15, Math.min(85, prev + (Math.random() - 0.5) * 12)));
            setMemoryUsage(prev => Math.max(35, Math.min(95, prev + (Math.random() - 0.5) * 10)));
            setDiskUsage(prev => Math.max(60, Math.min(90, prev + (Math.random() - 0.5) * 3)));
            setNetworkSpeed(prev => Math.max(50, Math.min(300, prev + (Math.random() - 0.5) * 20)));
            setActiveConnections(prev => Math.max(8, Math.min(25, prev + Math.floor((Math.random() - 0.5) * 3))));
            setCurrentTime(new Date());
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Matrix character animation
    useEffect(() => {
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const interval = setInterval(() => {
            setMatrixChars(prev => {
                const newChars = [...prev];
                if (newChars.length < 20) {
                    newChars.push({
                        id: Math.random(),
                        char: chars[Math.floor(Math.random() * chars.length)],
                        x: Math.random() * 100,
                        delay: Math.random() * 2
                    });
                }
                return newChars.filter((_, index) => index < 20);
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = (y - rect.height / 2) / 10;
                const rotateY = (rect.width / 2 - x) / 10;
                
                cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        const handleMouseLeave = () => {
            if (cardRef.current) {
                cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            }
        };

        if (cardRef.current) {
            cardRef.current.addEventListener('mousemove', handleMouseMove);
            cardRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (cardRef.current) {
                cardRef.current.removeEventListener('mousemove', handleMouseMove);
                cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);    const developerStats = [
        { label: "Experience", value: "3+", unit: "years", icon: "⚡", progress: 85, color: "primary" },
        { label: "Projects", value: "50+", unit: "completed", icon: "🚀", progress: 92, color: "green-400" },
        { label: "Technologies", value: "15+", unit: "mastered", icon: "🛠️", progress: 78, color: "blue-400" },
        { label: "Coffee", value: "∞", unit: "cups", icon: "☕", progress: 100, color: "yellow-400" }
    ];

    const systemMetrics = [
        { label: "CPU", value: cpuUsage, unit: "%", color: cpuUsage > 70 ? "red-400" : "green-400" },
        { label: "RAM", value: memoryUsage, unit: "%", color: memoryUsage > 80 ? "yellow-400" : "blue-400" },
        { label: "Disk", value: diskUsage, unit: "%", color: "purple-400" },
        { label: "Network", value: networkSpeed, unit: "MB/s", color: "primary" }
    ];

    const contactData = [
        {
            icon: "icon-mail.png",
            label: "Email",
            value: "alkhatimaw@gmail.com",
            link: "mailto:alkhatimaw@gmail.com",
            tech: "SMTP",
            status: "📧"
        },
        {
            icon: "icon-map-pin.png", 
            label: "Location",
            value: "UAE, Remote",
            link: null,
            tech: "GMT+4",
            status: "🌍"
        },
        {
            icon: "icon-briefcase.png",
            label: "Status",
            value: "Available",
            link: null,
            tech: "Full-time",
            status: "✅"
        },
        {
            icon: "icon-link.png",
            label: "Portfolio",
            value: "alkhatim.dev",
            link: "https://alkhatim.vercel.app",
            tech: "HTTPS",
            status: "🔗"        }
    ];    return(
        <Container>
            <div className="myinfo-center">
                <div className="myinfo-card">
                    {/* Enhanced interactive terminal header */}
                    <div className="lap:block hidden mx-auto mb-8 lap:mb-[64px] text-center relative">
                        <div className="inline-block bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 rounded-lg border border-primary/30 p-4 lap:p-6 font-mono shadow-2xl backdrop-blur-sm">
                    {/* Terminal window controls */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse hover:bg-green-400 transition-colors cursor-pointer"></div>
                        </div>                        <div className="text-xs text-gray-400 flex items-center space-x-2 lap:space-x-4">
                            <span className="hidden tab:inline">ahmed@dev-machine</span>
                            <span className="text-green-400">●{activeConnections} connections</span>
                            <span className="hidden mob:inline">{currentTime.toLocaleTimeString()}</span>
                        </div>
                    </div>                    {/* Enhanced code display */}
                    <div className="text-left mb-4">
                        <div className="text-primary text-base lap:text-lg mb-2">
                            <span className="text-purple-400">class</span>{' '}
                            <span className="text-blue-400">Developer</span>{' '}
                            <span className="text-gray-400">extends</span>{' '}
                            <span className="text-green-400">Human</span>{' '}
                            <span className="text-gray-300">{'{'}</span>
                        </div>
                        <div className="pl-4 text-sm space-y-1">
                            <div>
                                <span className="text-blue-400">constructor</span>
                                <span className="text-gray-300">() {'{'}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-purple-400">super</span>
                                <span className="text-gray-300">();</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-400">this</span>
                                <span className="text-gray-300">.</span>
                                <span className="text-yellow-300">name</span>
                                <span className="text-gray-300"> = </span>
                                <span className="text-green-300">"Ahmed Alkhatim"</span>
                                <span className="text-gray-300">;</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-400">this</span>
                                <span className="text-gray-300">.</span>
                                <span className="text-yellow-300">passion</span>
                                <span className="text-gray-300"> = </span>
                                <span className="text-green-300">"coding"</span>
                                <span className="text-gray-300">;</span>
                            </div>
                            <div className="text-gray-300">{'}'}</div>
                        </div>
                        <div className="text-gray-300">{'}'}</div>
                    </div>

                    {/* Live terminal output */}
                    <div className="bg-black/50 rounded p-3 border border-gray-700">
                        <div className="text-sm text-green-400 mb-2">
                            <span className="text-blue-400">~</span> {typedText}
                            <span className="animate-pulse text-white">|</span>
                        </div>
                        <div className="text-xs text-gray-500">
                            Last command executed {Math.floor(Math.random() * 5) + 1}s ago
                        </div>
                    </div>                    {/* System status indicators */}
                    <div className="flex justify-center space-x-2 lap:space-x-4 mt-4 text-xs overflow-x-auto">
                        {systemMetrics.map((metric, index) => (
                            <div key={index} className="flex items-center space-x-1 whitespace-nowrap">
                                <div className={`w-2 h-2 rounded-full bg-${metric.color} animate-pulse`}></div>
                                <span className="text-gray-400 hidden mob:inline">{metric.label}:</span>
                                <span className={`text-${metric.color} font-mono`}>
                                    {Math.round(metric.value)}{metric.unit}
                                </span>
                            </div>
                        ))}
                    </div>                </div>
            </div>                    <div 
                        ref={cardRef}
                        className="w-full mx-auto mb-10 px-4 mob:px-0 p-4 mob:p-[24px] pb-6 mob:pb-[36px] border-2 mob:border-[4px] border-white rounded-tl-[60px] mob:rounded-tl-[160px] rounded-br-[60px] mob:rounded-br-[160px] space-y-6 mob:space-y-[32px] relative group hover:border-primary transition-all duration-500 bg-gradient-to-br from-gray-2/50 to-black/30 backdrop-blur-sm interactive-overlay"
                        style={{ transition: 'transform 0.1s ease-out' }}
                    >
                {/* Matrix background effect */}
                <div className="matrix-bg">
                    {matrixChars.map((char) => (
                        <div
                            key={char.id}
                            className="matrix-char"
                            style={{
                                left: `${char.x}%`,
                                animationDelay: `${char.delay}s`
                            }}
                        >
                            {char.char}
                        </div>
                    ))}
                </div>                {/* Enhanced animated background pattern with syntax highlighting */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-tl-[60px] mob:rounded-tl-[160px] rounded-br-[60px] mob:rounded-br-[160px] font-mono text-xs mob:text-xs">
                    <div className="p-4 leading-relaxed space-y-1">
                        <div><span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> = {`{`}</div>
                        <div className="pl-4"><span className="syntax-string">"name"</span>: <span className="syntax-string">"Ahmed Alkhatim"</span>,</div>
                        <div className="pl-4"><span className="syntax-string">"role"</span>: <span className="syntax-string">"Full-Stack Developer"</span>,</div>
                        <div className="pl-4"><span className="syntax-string">"status"</span>: <span className="syntax-string">"actively_coding"</span>,</div>
                        <div className="pl-4"><span className="syntax-string">"skills"</span>: [<span className="syntax-string">"React"</span>, <span className="syntax-string">"Node.js"</span>, <span className="syntax-string">"TypeScript"</span>],</div>
                        <div className="pl-4"><span className="syntax-string">"passion"</span>: <span className="syntax-string">"building amazing experiences"</span>,</div>
                        <div className="pl-4"><span className="syntax-string">"availability"</span>: <span className="syntax-keyword">true</span>,</div>
                        <div className="pl-4"><span className="syntax-string">"timezone"</span>: <span className="syntax-string">"GMT+4"</span>,</div>
                        <div className="pl-4"><span className="syntax-string">"lastCommit"</span>: <span className="syntax-string">"{new Date().toISOString()}"</span>,</div>
                        <div className="pl-4"><span className="syntax-string">"currentProject"</span>: <span className="syntax-string">"portfolio-v3.0"</span></div>
                        <div>{`};`}</div>
                        <div className="mt-2"><span className="syntax-comment">// Always ready for new challenges</span></div>
                    </div>
                </div>                {/* Advanced system status bar */}
                <div className="absolute top-2 right-2 flex items-center space-x-1 mob:space-x-3 z-20 text-xs">
                    <div className="flex items-center space-x-1">
                        <div className={`status-dot w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-xs text-gray-400 font-mono">
                            {isOnline ? 'ONLINE' : 'OFFLINE'}
                        </span>
                    </div>
                    <div className="text-xs text-gray-400 font-mono hidden mob:block">
                        CPU: {Math.round(cpuUsage)}% | RAM: {Math.round(memoryUsage)}%
                    </div>
                    <button 
                        onClick={() => setIsCodeMode(!isCodeMode)}
                        className="text-xs text-primary hover:text-white transition-colors p-1"
                    >
                        {isCodeMode ? '👁️' : '💻'}
                    </button>
                </div>{/* Ultra-enhanced profile section with advanced interactions */}
                <div className="text-center relative z-10">
                    <div className="inline-block m-auto relative">
                        <div className="relative group/profile">
                            {/* Main profile image with advanced effects */}
                            <div className="relative">
                                <img 
                                    src="/profile.png" 
                                    alt="Ahmed Alkhatim - Full Stack Developer" 
                                    className="transition-all duration-500 group-hover:scale-110 rounded-full border-2 border-primary/30 group-hover/profile:border-primary shadow-lg group-hover/profile:shadow-2xl group-hover/profile:shadow-primary/20"
                                />
                                
                                {/* Rotating border effect */}
                                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-transparent to-primary opacity-0 group-hover/profile:opacity-100 transition-opacity duration-500 animate-spin" style={{animationDuration: '3s'}}></div>
                                
                                {/* Particle effect overlay */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300">
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-1 h-1 bg-primary rounded-full"
                                            style={{
                                                top: `${20 + Math.random() * 60}%`,
                                                left: `${20 + Math.random() * 60}%`,
                                                animationDelay: `${i * 0.1}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Enhanced status indicator with multiple states */}
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg group-hover/profile:scale-125 transition-all duration-300">
                                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-900">
                                    {isCodeMode ? '💻' : '⚡'}
                                </div>
                            </div>
                            
                            {/* Advanced interactive code overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 rounded-full opacity-0 group-hover/profile:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                                <div className="text-center space-y-1">
                                    <div className="text-primary text-xs font-mono code-highlight">
                                        {`{ status: "${isCodeMode ? 'coding' : 'available'}" }`}
                                    </div>
                                    <div className="text-green-400 text-xs font-mono">
                                        ●REC {currentTime.toLocaleTimeString()}
                                    </div>
                                    <div className="text-xs font-mono text-yellow-300">
                                        uptime: {Math.floor(Math.random() * 8) + 1}h
                                    </div>
                                </div>
                            </div>                            {/* Enhanced floating code particles with animations */}
                            <div className="absolute -top-6 -left-6 text-primary/40 text-sm font-mono floating opacity-0 group-hover/profile:opacity-100 transition-opacity delay-100 hidden mob:block">
                                <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>&lt;</span>
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>/</span>
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>&gt;</span>
                            </div>
                            <div className="absolute -top-4 -right-8 text-primary/40 text-sm font-mono floating opacity-0 group-hover/profile:opacity-100 transition-opacity delay-200 hidden mob:block">
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>{`{`}</span>
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>{`}`}</span>
                            </div>
                            <div className="absolute -bottom-6 -left-8 text-primary/40 text-sm font-mono floating opacity-0 group-hover/profile:opacity-100 transition-opacity delay-300 hidden mob:block">
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.5s'}}>[</span>
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.6s'}}>]</span>
                            </div>
                            <div className="absolute -bottom-4 -right-6 text-primary/40 text-sm font-mono floating opacity-0 group-hover/profile:opacity-100 transition-opacity delay-400 hidden mob:block">
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.7s'}}>(</span>
                                <span className="inline-block animate-bounce" style={{animationDelay: '0.8s'}}>)</span>
                            </div>

                            {/* Data flow indicators */}
                            <div className="absolute top-1/2 -left-12 w-8 h-0.5 bg-primary/30 opacity-0 group-hover/profile:opacity-100 hidden mob:block">
                                <div className="w-2 h-full bg-primary data-flow"></div>
                            </div>
                            <div className="absolute top-1/2 -right-12 w-8 h-0.5 bg-primary/30 opacity-0 group-hover/profile:opacity-100 hidden mob:block">
                                <div className="w-2 h-full bg-primary data-flow" style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>
                    </div>
                      {/* Enhanced name and title with interactive elements */}
                    <h2 className="text-lg mob:text-xl font-bold mt-4 text-white space-y-1">
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-primary font-mono animate-pulse terminal-cursor">$</span>
                            <span className="text-white text-sm mob:text-base">Ahmed Alkhatim</span>
                            <span className="flex items-center text-xs text-green-400 ml-2 font-mono">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-ping"></div>
                                <span className="hidden mob:inline">ONLINE</span>
                                <span className="mob:hidden">●</span>
                            </span>
                        </div>
                    </h2>
                      <div className="space-y-2 mt-3">
                        <p className="text-sm mob:text-medium text-gray-300">
                            <span className="text-primary font-mono animate-pulse">&lt;</span>
                            <span className="text-primary hover:text-yellow-300 transition-colors cursor-pointer">Full-Stack</span>
                            <span className="text-white"> Developer</span>
                            <span className="text-primary font-mono animate-pulse"> /&gt;</span>
                        </p>
                        <p className="text-xs text-gray-400 font-mono hidden mob:block">
                            <span className="text-gray-500">//</span> Specialized in modern web technologies & scalable solutions
                        </p>
                        <div className="flex items-center justify-center space-x-2 mob:space-x-4 text-xs font-mono">
                            <div className="text-green-400">
                                <span className="hidden mob:inline">Last seen: </span>
                                <span className="text-primary">{currentTime.toLocaleString()}</span>
                            </div>
                            <div className="text-blue-400 hidden mob:block">
                                Commit: <span className="text-yellow-300">{Math.floor(Math.random() * 10) + 1}m ago</span>
                            </div>
                        </div>
                        <div className="text-xs text-purple-400 font-mono bg-black/30 rounded p-2 mt-2">
                            <div className="hidden mob:block">
                                <span className="text-gray-500">const</span> <span className="text-blue-400">motivation</span> = <span className="text-green-300">"turning ideas into reality"</span>;
                            </div>
                            <div className="mob:hidden text-center">
                                <span className="text-green-300">"turning ideas into reality"</span>
                            </div>
                        </div>
                    </div>
                </div>                {/* Advanced interactive developer stats with real-time animations */}
                <div className="relative z-10">
                    <div className="grid grid-cols-2 mob:grid-cols-4 gap-2 mob:gap-3 mb-6">
                        {developerStats.map((stat, index) => (                            <div 
                                key={index} 
                                className="text-center p-2 mob:p-3 bg-gradient-to-br from-black/40 to-gray-900/40 rounded-lg border border-primary/20 hover:border-primary/60 transition-all duration-500 cursor-pointer group/stat hover:scale-105 backdrop-blur-sm"
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="text-2xl mob:text-3xl mb-1 mob:mb-2 group-hover/stat:animate-bounce transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className={`text-${stat.color} font-bold text-lg mob:text-xl font-mono group-hover/stat:text-yellow-300 transition-colors duration-300`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-400 mb-1">{stat.unit}</div>
                                <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                                
                                {/* Animated progress bar */}
                                <div className="w-full bg-gray-700/50 rounded-full h-1.5 mt-3 opacity-0 group-hover/stat:opacity-100 transition-all duration-300">
                                    <div 
                                        className={`bg-${stat.color} h-1.5 rounded-full progress-animate transition-all duration-1000`}
                                        style={{
                                            '--progress-width': `${stat.progress}%`,
                                            animationDelay: `${index * 0.2}s`
                                        }}
                                    ></div>
                                </div>
                                
                                {/* Hover effect indicator */}
                                <div className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover/stat:opacity-100 animate-ping"></div>
                            </div>
                        ))}
                    </div>
                      {/* Live performance metrics */}
                    <div className="text-center text-xs text-primary/70 font-mono bg-black/20 rounded p-2 border border-primary/10">
                        <div className="flex flex-wrap justify-center items-center space-x-2 mob:space-x-4 gap-1">
                            <span className="hidden mob:inline">// Performance metrics</span>
                            <span className="text-green-400">●Live</span>
                            <span className="hidden tab:inline">Updated: {currentTime.toLocaleTimeString()}</span>
                            <span className="text-yellow-400">{activeConnections} sessions</span>
                        </div>
                    </div>
                </div>                {/* Ultra-enhanced contact information with interactive elements */}
                <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-primary text-sm font-mono hidden mob:block">// Contact endpoints</div>
                        <div className="text-primary text-sm font-mono mob:hidden">// Contact</div>
                        <div className="text-xs text-gray-400 font-mono flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="hidden mob:inline">API Status: Operational</span>
                            <span className="mob:hidden">●</span>
                        </div>
                    </div>
                    
                    {/* {contactData.map((contact, index) => (
                        <div key={index} className="group/item">
                            <div className="flex items-center justify-between hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/30 cursor-pointer">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                        <img src={`/${contact.icon}`} className="w-5 h-5" alt={contact.label}/>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white flex items-center space-x-2">
                                            <span>{contact.label}</span>
                                            <span className="text-xs">{contact.status}</span>
                                        </div>
                                        {contact.link ? (
                                            <a 
                                                href={contact.link} 
                                                className="text-sm text-gray-300 hover:text-primary transition-colors font-mono group-hover/item:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {contact.value}
                                            </a>
                                        ) : (
                                            <div className="text-sm text-gray-300 font-mono">{contact.value}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="text-xs text-primary/60 font-mono opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                        {contact.tech}
                                    </div>
                                    <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover/item:opacity-100 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))} */}
                      {/* Enhanced phone number with special effects */}
                    <div className="group/item">
                        <div className="flex items-center justify-between hover:bg-gradient-to-r hover:from-green-500/10 hover:to-transparent p-3 mob:p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-green-500/30 cursor-pointer">
                            <div className="flex items-center space-x-3 mob:space-x-4">
                                <div className="w-8 h-8 mob:w-10 mob:h-10 bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                    <span className="text-green-400 text-base mob:text-lg">📞</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white flex items-center space-x-2">
                                        <span>Phone</span>
                                        <span className="text-xs">📱</span>
                                    </div>
                                    <a 
                                        href="tel:+971544474970" 
                                        className="text-sm text-gray-300 hover:text-green-400 transition-colors font-mono group-hover/item:underline"
                                    >
                                        +971 544 474 970
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-xs text-green-400/60 font-mono opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 hidden mob:block">
                                    GSM
                                </div>
                                <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover/item:opacity-100 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Revolutionary tech stack with advanced animations */}
                <div className="relative z-10">
                    {/* <div className="flex items-center justify-between mb-4">
                        <p className="text-primary text-sm font-mono">// Technology stack</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                            <span>version: 2024.1.0</span>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        </div>
                    </div> */}
                    
                    <div className="space-y-4">
                        {/* Frontend technologies */}
                        {/* <div className="group/section">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-xs text-gray-400 font-mono">Frontend Technologies:</div>
                                <div className="text-xs text-blue-400 font-mono">⚡ Active</div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="tech-tag bg-gradient-to-r from-blue-500/20 to-primary/20 text-primary px-3 py-2 rounded-lg text-sm font-mono border border-primary/30 hover:border-primary hover:bg-primary hover:text-black transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-lg hover:shadow-primary/30"
                                        style={{
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div> */}

                        {/* Backend technologies */}
                        {/* <div className="group/section">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-xs text-gray-400 font-mono">Backend Technologies:</div>
                                <div className="text-xs text-green-400 font-mono">🚀 Deployed</div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Express.js', 'MongoDB', 'MySQL'].map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="tech-tag bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-2 rounded-lg text-sm font-mono border border-green-500/30 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-lg hover:shadow-green-400/30"
                                        style={{
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div> */}                        {/* Developer philosophy */}
                        <div className="bg-gradient-to-r from-black/40 to-gray-900/40 rounded-lg p-3 mob:p-4 border-l-4 border-primary backdrop-blur-sm">
                            <div className="text-xs mob:text-sm font-mono space-y-1">
                                <div>
                                    <span className="text-purple-400">const</span>{' '}
                                    <span className="text-blue-400">philosophy</span>{' '}
                                    <span className="text-gray-300">=</span>{' '}
                                    <span className="text-gray-300">{'{'}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-yellow-300">"mindset"</span>
                                    <span className="text-gray-300">:</span>{' '}
                                    <span className="text-green-300">"continuous learning"</span>
                                    <span className="text-gray-300">,</span>
                                </div>
                                <div className="pl-4 hidden mob:block">
                                    <span className="text-yellow-300">"approach"</span>
                                    <span className="text-gray-300">:</span>{' '}
                                    <span className="text-green-300">"problem-solving first"</span>
                                    <span className="text-gray-300">,</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-yellow-300">"goal"</span>
                                    <span className="text-gray-300">:</span>{' '}
                                    <span className="text-green-300">"impactful solutions"</span>
                                </div>
                                <div>
                                    <span className="text-gray-300">{'};'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                {/* Advanced 3D hover effect overlay with particle system */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/60 rounded-tl-[60px] mob:rounded-tl-[160px] rounded-br-[60px] mob:rounded-br-[160px] transition-all duration-500 pointer-events-none">
                    {/* Corner indicators */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                      {/* Data flow lines */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-4 h-full bg-primary data-flow"></div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}