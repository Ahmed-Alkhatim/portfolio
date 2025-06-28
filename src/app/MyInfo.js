import { Container } from "@/components";

export default function MyInfo() {
    const developerStats = [
        { label: "Experience", value: "3+", unit: "years" },
        { label: "Projects", value: "50+", unit: "completed" },
        { label: "Technologies", value: "15+", unit: "mastered" },
        { label: "Coffee", value: "∞", unit: "cups" }
    ]

    const contactData = [
        {
            icon: "icon-mail.png",
            label: "Email",
            value: "alkhatimaw@gmail.com",
            link: "mailto:alkhatimaw@gmail.com",
            tech: "SMTP"
        },
        {
            icon: "icon-map-pin.png", 
            label: "Location",
            value: "UAE, Remote",
            link: null,
            tech: "GMT+4"
        },
        {
            icon: "icon-briefcase.png",
            label: "Status",
            value: "Available",
            link: null,
            tech: "Full-time"
        },
        {
            icon: "icon-link.png",
            label: "Portfolio",
            value: "alkhatim.dev",
            link: "https://alkhatim.vercel.app",
            tech: "HTTPS"
        }
    ]

    return(
        <div>
            <h1 className="lap:block hidden mb-[64px] text-xlg text-primary text-center font-mono">
                <span className="text-gray-400">class</span> <span className="text-primary">Developer</span> {'{'}
                <span className="text-yellow-300"> constructor()</span> <span className="text-gray-400">{'{'}...{'}'}</span> {'}'}
            </h1>

            <div className="m-auto mb-10 w-[430px] p-[24px] pb-[36px] border-[4px] border-[#FFF] rounded-tl-[160px] rounded-br-[160px] space-y-[32px] relative group hover:border-primary transition-all duration-300 bg-gradient-to-br from-gray-2/50 to-black/30 backdrop-blur-sm">

                {/* Enhanced background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-tl-[160px] rounded-br-[160px]">
                    <div className="text-primary text-xs font-mono p-4 leading-relaxed">
                        {`{
                            "name": "Ahmed Alkhatim",
                            "role": "Full-Stack Developer",
                            "status": "active",
                            "skills": ["React", "Node.js", "TypeScript"],
                            "passion": "building amazing experiences",
                            "availability": true,
                            "timezone": "GMT+4"
                        }`}
                    </div>
                </div>

                {/* Profile section with enhanced styling */}
                <div className="text-center relative z-10">
                    <div className="inline-block m-auto relative">
                        <div className="relative">
                            <img src="/profile.png" alt="Ahmed Alkhatim - Full Stack Developer" className="transition-transform duration-300 group-hover:scale-105 rounded-full border-2 border-primary/30"/>
                            {/* Enhanced status indicator */}
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            </div>
                            {/* Code overlay on hover */}
                            <div className="absolute inset-0 bg-black/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-primary text-xs font-mono">{"{ coding: true }"}</span>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mt-3 text-white">
                        <span className="text-primary font-mono">$</span> Ahmed Alkhatim
                    </h2>
                    <div className="space-y-1">
                        <p className="text-medium text-gray-300">
                            <span className="text-primary font-mono">{"<"}</span>
                            <span className="text-primary">Full-Stack</span> Developer
                            <span className="text-primary font-mono">{" />"}</span>
                        </p>
                        <p className="text-xs text-gray-400 font-mono">
                            // Specialized in modern web technologies
                        </p>
                    </div>
                </div>

                {/* Developer stats */}
                <div className="relative z-10">
                    <div className="grid grid-cols-4 gap-2 mb-4">
                        {developerStats.map((stat, index) => (
                            <div key={index} className="text-center p-2 bg-black/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                                <div className="text-primary font-bold text-lg font-mono">{stat.value}</div>
                                <div className="text-xs text-gray-400">{stat.unit}</div>
                                <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center text-xs text-primary/70 font-mono">
                        // Professional metrics
                    </div>
                </div>

                {/* Enhanced contact information */}
                <div className="relative z-10 space-y-3">
                    <div className="text-primary text-xs font-mono mb-3">// Contact endpoints</div>
                    {contactData.map((contact, index) => (
                        <div key={index} className="group/item">
                            <div className="flex items-center justify-between hover:bg-primary/10 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <img src={`/${contact.icon}`} className="w-4 h-4" alt={contact.label}/>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white">{contact.label}</div>
                                        {contact.link ? (
                                            <a href={contact.link} className="text-xs text-gray-300 hover:text-primary transition-colors font-mono">
                                                {contact.value}
                                            </a>
                                        ) : (
                                            <div className="text-xs text-gray-300 font-mono">{contact.value}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-xs text-primary/60 font-mono opacity-0 group-hover/item:opacity-100 transition-opacity">
                                    {contact.tech}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Phone number with special styling */}
                    <div className="group/item">
                        <div className="flex items-center justify-between hover:bg-primary/10 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <span className="text-primary text-sm">📞</span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-white">Phone</div>
                                    <a href="tel:+971544474970" className="text-xs text-gray-300 hover:text-primary transition-colors font-mono">
                                        +971 544 474 970
                                    </a>
                                </div>
                            </div>
                            <div className="text-xs text-primary/60 font-mono opacity-0 group-hover/item:opacity-100 transition-opacity">
                                TEL
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced tech stack with modern styling */}
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-primary text-xs font-mono">// Core technologies</p>
                        <div className="text-xs text-gray-400 font-mono">v2024.1</div>
                    </div>
                    
                    <div className="space-y-3">
                        {/* Primary stack */}
                        <div>
                            <div className="text-xs text-gray-400 font-mono mb-2">Frontend:</div>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Next.js'].map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="tech-tag bg-primary/20 text-primary px-[10px] py-[3px] rounded-md text-xs font-mono border border-primary/30 hover:bg-primary hover:text-black transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend stack */}
                        <div>
                            <div className="text-xs text-gray-400 font-mono mb-2">Backend:</div>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Express', 'MongoDB'].map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="tech-tag bg-green-500/20 text-green-400 px-[10px] py-[3px] rounded-md text-xs font-mono border border-green-500/30 hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="text-primary text-xs font-mono mt-3 p-2 bg-black/30 rounded border-l-2 border-primary">
                            <span className="text-gray-400">const</span> <span className="text-white">mindset</span> = <span className="text-yellow-300">"continuous learning"</span>;
                        </div>
                    </div>
                </div>

                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/60 rounded-tl-[160px] rounded-br-[160px] transition-all duration-300 pointer-events-none">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}