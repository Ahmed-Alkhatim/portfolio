'use client'
import { Container } from "@/components"
import { useState, useEffect } from 'react';

export default () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedText, setAnimatedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const codeText = 'function aboutMe() { return "passionate developer"; }';

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

        const element = document.getElementById('about-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    // Animated typing effect
    useEffect(() => {
        if (isVisible && currentIndex < codeText.length) {
            const timeout = setTimeout(() => {
                setAnimatedText(codeText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [isVisible, currentIndex, codeText]);

    return( <>
        <div id="about-section" className="bg-about bg-center bg-cover py-[64px] relative overflow-hidden">
            {/* Enhanced animated background code pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap animate-fade-in-slow">
                    {`function aboutMe() {
    const developer = {
        name: "Ahmed Alkhatim",
        experience: "3+ years",
        passion: "web development",
        skills: ["React", "Vue.js", "Node.js", "TypeScript"]
    };
    return developer.passion + " enthusiast";
}`}
                </div>
                {/* Floating code particles */}
                <div className="absolute top-10 right-10 text-primary/20 animate-float-slow">{'{ }'}</div>
                <div className="absolute bottom-20 left-20 text-primary/20 animate-float-fast">{'[ ]'}</div>
                <div className="absolute top-32 left-32 text-primary/20 animate-floating">{'< />'}</div>
            </div>

            <Container>
                <div className="desk:flex items-start gap-12">
                    <div className={`desk:w-2/3 lap:px-[80px] space-y-[32px] transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        {/* Enhanced header with typing animation effect */}
                        <div className="relative group">
                            <div className="min-[600px]:inline-block text-primary tablet:text-xlg text-lg py-[16px] px-[40px] text-center border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">
                                <span className="relative z-10 font-mono">About me</span>
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Pulse border effect */}
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-tl-[40px] rounded-br-[40px] animate-pulse transition-all duration-300"></div>
                            </div>
                            {/* Animated code comment */}
                            <div className="text-primary/70 text-sm mt-2 font-mono opacity-0 animate-fade-in-slow" style={{animationDelay: '0.5s'}}>
                                // {animatedText}
                                <span className="animate-pulse text-white">|</span>
                            </div>
                        </div>                        {/* Enhanced content area with better styling and animations */}
                        <div className={`space-y-[16px] p-[32px] bg-gradient-to-br from-gray-2 to-black/50 rounded-[40px] border border-primary/20 backdrop-blur-sm relative group hover:border-primary/40 transition-all duration-500 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`} style={{animationDelay: '0.3s'}}>
                            {/* Animated code line numbers */}
                            <div className="absolute left-4 top-8 text-primary/40 text-xs font-mono space-y-4">
                                {[1,2,3,4,5,6,7,8].map((num, index) => (
                                    <div 
                                        key={num} 
                                        className="opacity-0 animate-fade-in-slow"
                                        style={{animationDelay: `${0.8 + index * 0.1}s`}}
                                    >
                                        {String(num).padStart(2, '0')}
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced opening tag with animation */}
                            <div className="flex items-center gap-2 group/tag">
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded group-hover/tag:bg-primary/20 transition-colors duration-300">{'<Developer>'}</span>
                                <div className="h-px bg-primary/30 flex-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <div className="w-2 h-2 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                            </div>
                            
                            <div className="pl-8 space-y-6">
                                {/* Enhanced greeting with staggered animations */}
                                <div className="text-medium leading-relaxed">
                                    <span className={`text-2xl font-bold text-primary mb-4 block transition-all duration-700 ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`} style={{animationDelay: '1s'}}>
                                        console.log("Hello World! 👋");
                                    </span>
                                    
                                    {/* Enhanced personal intro with typing effect */}
                                    <div className={`space-y-4 text-gray-100 transition-all duration-700 ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`} style={{animationDelay: '1.2s'}}>
                                        <p className="group/code">
                                            <span className="text-purple-400 font-mono">const</span>{' '}
                                            <span className="text-white font-semibold group-hover/code:text-yellow-300 transition-colors">developer</span>{' '}
                                            <span className="text-gray-300">= {'{'}</span>
                                        </p>
                                        <div className="pl-6 space-y-2 text-medium">
                                            {[
                                                { key: 'name', value: '"Ahmed Alkhatim"' },
                                                { key: 'role', value: '"Software Engineer"' },
                                                { key: 'experience', value: '"3+ years"' },
                                                { key: 'specialization', value: '"Web Development"' }
                                            ].map((item, index) => (
                                                <p key={item.key} className={`group/item hover:bg-primary/5 rounded px-2 py-1 transition-all duration-300 ${
                                                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                                                }`} style={{animationDelay: `${1.4 + index * 0.1}s`}}>
                                                    <span className="text-primary group-hover/item:text-yellow-300 transition-colors">{item.key}:</span>{' '}
                                                    <span className="text-yellow-300 group-hover/item:text-green-300 transition-colors">{item.value}</span>
                                                    {index < 3 && <span className="text-gray-300">,</span>}
                                                </p>
                                            ))}
                                        </div>
                                        <p className="text-gray-300">{'};'}</p>
                                    </div>

                                    {/* Enhanced description with animated highlights */}
                                    <div className={`mt-6 space-y-4 text-medium leading-relaxed transition-all duration-700 ${
                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                    }`} style={{animationDelay: '1.8s'}}>
                                        <p className="group/desc hover:bg-primary/5 rounded p-3 transition-all duration-300">
                                            I craft sophisticated web applications with expertise in{' '}
                                            <span className="text-primary font-semibold relative group-hover/desc:text-yellow-300 transition-colors">
                                                state management
                                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/desc:w-full transition-all duration-300"></div>
                                            </span>{' '}
                                            and{' '}
                                            <span className="text-primary font-semibold relative group-hover/desc:text-yellow-300 transition-colors">
                                                component architecture
                                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/desc:w-full transition-all duration-300"></div>
                                            </span>.
                                            My commitment to{' '}
                                            <span className="text-primary font-semibold relative group-hover/desc:text-yellow-300 transition-colors">
                                                pixel-perfect
                                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/desc:w-full transition-all duration-300"></div>
                                            </span>{' '}
                                            implementations ensures high-quality standards in every project.
                                        </p>
                                        
                                        <p className="group/desc hover:bg-primary/5 rounded p-3 transition-all duration-300">
                                            I implement best practices and design patterns like{' '}
                                            <span className="text-primary font-semibold relative group-hover/desc:text-yellow-300 transition-colors">
                                                MVVM
                                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/desc:w-full transition-all duration-300"></div>
                                            </span>{' '}
                                            and{' '}
                                            <span className="text-primary font-semibold relative group-hover/desc:text-yellow-300 transition-colors">
                                                event-driven architecture
                                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/desc:w-full transition-all duration-300"></div>
                                            </span>,
                                            producing reusable, scalable, and maintainable code.
                                        </p>

                                        <p className="group/desc hover:bg-primary/5 rounded p-3 transition-all duration-300">
                                            I'm passionate about contributing to environments that{' '}
                                            <span className="text-primary font-semibold relative group-hover/desc:text-yellow-300 transition-colors">
                                                value expertise
                                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/desc:w-full transition-all duration-300"></div>
                                            </span>{' '}
                                            and{' '}
                                            <span className="text-primary font-semibold relative group-hover/desc:text-yellow-300 transition-colors">
                                                technical excellence
                                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/desc:w-full transition-all duration-300"></div>
                                            </span>,
                                            where mutual growth and innovation drive success.
                                        </p>
                                    </div>

                                    {/* Enhanced tech stack showcase with animations */}
                                    <div className={`mt-6 p-4 bg-black/30 rounded-lg border border-primary/20 group/tech hover:border-primary/40 transition-all duration-500 ${
                                        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                    }`} style={{animationDelay: '2.2s'}}>
                                        <p className="text-primary text-sm font-mono mb-2 group-hover/tech:text-yellow-300 transition-colors">
                                            // Tech Stack
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech, index) => (
                                                <span 
                                                    key={index} 
                                                    className={`px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-mono hover:bg-primary hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/30 ${
                                                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                                                    }`}
                                                    style={{animationDelay: `${2.4 + index * 0.1}s`}}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Animated progress bar */}
                                        <div className="mt-3 w-full bg-gray-700/50 rounded-full h-1 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full animate-progress-fill origin-left"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced closing tag with animation */}
                            <div className="flex items-center gap-2 group/tag">
                                <div className="w-2 h-2 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                <div className="h-px bg-primary/30 flex-1 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded group-hover/tag:bg-primary/20 transition-colors duration-300">{'</Developer>'}</span>
                            </div>

                            {/* Enhanced hover effect overlay */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-[40px] transition-all duration-300 pointer-events-none"></div>
                            
                            {/* Floating particles on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                                        style={{
                                            top: `${10 + Math.random() * 80}%`,
                                            left: `${10 + Math.random() * 80}%`,
                                            animationDelay: `${i * 0.3}s`,
                                            animationDuration: '2s'
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Enhanced image section with animations */}
                    <div className={`desk:w-1/3 relative transition-all duration-1000 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`} style={{animationDelay: '0.7s'}}>
                        <div className="relative group">
                            <img 
                                className="m-auto mt-[64px] tablet:w-[462px] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1" 
                                src="/work.png" 
                                alt="Developer workspace"
                            />
                            {/* Enhanced image overlay with animated elements */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg">
                                <div className="absolute bottom-4 left-4 text-primary text-xs font-mono space-y-1">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '0.2s'}}>
                                        // Always coding
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '0.4s'}}>
                                        // Always learning
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '0.6s'}}>
                                        // Always innovating
                                    </div>
                                </div>
                                {/* Code brackets floating animation */}
                                <div className="absolute top-4 right-4 text-primary/50 text-lg font-mono animate-bounce">
                                    {'< />'}
                                </div>
                            </div>
                            
                            {/* Glowing border effect on hover */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-500 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>)
}