import { Container } from "@/components"

export default () => {
    return( <>
        <div className="bg-about bg-center bg-cover py-[64px] relative overflow-hidden">
            {/* Background code pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap">
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
            </div>

            <Container>
                <div className="desk:flex items-start gap-12">
                    <div className="desk:w-2/3 lap:px-[80px] space-y-[32px]">
                        {/* Enhanced header with typing animation effect */}
                        <div className="relative">
                            <div className="min-[600px]:inline-block text-primary tablet:text-xlg text-lg py-[16px] px-[40px] text-center border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10">About me</span>
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            {/* Code comment styling */}
                            <div className="text-primary/70 text-sm mt-2 font-mono">// Developer profile</div>
                        </div>

                        {/* Enhanced content area with better styling */}
                        <div className="space-y-[16px] p-[32px] bg-gradient-to-br from-gray-2 to-black/50 rounded-[40px] border border-primary/20 backdrop-blur-sm relative group">
                            {/* Code line numbers */}
                            <div className="absolute left-4 top-8 text-primary/40 text-xs font-mono space-y-4">
                                <div>01</div>
                                <div>02</div>
                                <div>03</div>
                                <div>04</div>
                                <div>05</div>
                                <div>06</div>
                                <div>07</div>
                                <div>08</div>
                            </div>

                            {/* Opening tag with better styling */}
                            <div className="flex items-center gap-2">
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'<Developer>'}</span>
                                <div className="h-px bg-primary/30 flex-1"></div>
                            </div>
                            
                            <div className="pl-8 space-y-6">
                                {/* Greeting with enhanced styling */}
                                <div className="text-medium leading-relaxed">
                                    <span className="text-2xl font-bold text-primary mb-4 block">console.log("Hello World! 👋");</span>
                                    
                                    {/* Personal intro with better formatting */}
                                    <div className="space-y-4 text-gray-100">
                                        <p>
                                            <span className="text-primary font-mono">const</span> <span className="text-white font-semibold">developer</span> = {'{'}
                                        </p>
                                        <div className="pl-6 space-y-2 text-medium">
                                            <p><span className="text-primary">name:</span> <span className="text-yellow-300">"Ahmed Alkhatim"</span>,</p>
                                            <p><span className="text-primary">role:</span> <span className="text-yellow-300">"Software Engineer"</span>,</p>
                                            <p><span className="text-primary">experience:</span> <span className="text-yellow-300">"3+ years"</span>,</p>
                                            <p><span className="text-primary">specialization:</span> <span className="text-yellow-300">"Web Development"</span></p>
                                        </div>
                                        <p>{'};'}</p>
                                    </div>

                                    {/* Enhanced description with better readability */}
                                    <div className="mt-6 space-y-4 text-medium leading-relaxed">
                                        <p>
                                            I craft sophisticated web applications with expertise in <span className="text-primary font-semibold">state management</span> and 
                                            <span className="text-primary font-semibold"> component architecture</span>. My commitment to 
                                            <span className="text-primary font-semibold"> pixel-perfect</span> implementations ensures high-quality standards in every project.
                                        </p>
                                        
                                        <p>
                                            I implement best practices and design patterns like <span className="text-primary font-semibold">MVVM</span> and 
                                            <span className="text-primary font-semibold"> event-driven architecture</span>, producing reusable, scalable, and maintainable code.
                                        </p>

                                        <p>
                                            I'm passionate about contributing to environments that <span className="text-primary font-semibold">value expertise</span> and 
                                            <span className="text-primary font-semibold"> technical excellence</span>, where mutual growth and innovation drive success.
                                        </p>
                                    </div>

                                    {/* Tech stack showcase */}
                                    <div className="mt-6 p-4 bg-black/30 rounded-lg border border-primary/20">
                                        <p className="text-primary text-sm font-mono mb-2">// Tech Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech, index) => (
                                                <span key={index} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-mono hover:bg-primary/30 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Closing tag */}
                            <div className="flex items-center gap-2">
                                <div className="h-px bg-primary/30 flex-1"></div>
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'</Developer>'}</span>
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-[40px] transition-all duration-300 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Enhanced image section */}
                    <div className="desk:w-1/3 relative">
                        <div className="relative group">
                            <img 
                                className="m-auto mt-[64px] tablet:w-[462px] transition-transform duration-300 group-hover:scale-105" 
                                src="/work.png" 
                                alt="Developer workspace"
                            />
                            {/* Image overlay with code snippet */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <div className="absolute bottom-4 left-4 text-primary text-xs font-mono">
                                    <div>// Always coding</div>
                                    <div>// Always learning</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>)
}