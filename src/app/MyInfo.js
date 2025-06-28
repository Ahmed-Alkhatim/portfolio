import { Container } from "@/components";

export default function MyInfo() {
    return(
        <div>
            <h1 className="lap:block hidden mb-[64px] text-xlg text-primary text-center font-mono">
                <span className="text-white">const</span> <span className="text-primary">role</span> = <span className="text-yellow-300">"Developer"</span>;
            </h1>

            <div className="m-auto mb-10 w-[320px] p-[24px] pb-[36px] border-[4px] border-[#FFF] rounded-tl-[160px] rounded-br-[160px] space-y-[32px] relative group hover:border-primary transition-all duration-300 bg-gradient-to-br from-gray-2/50 to-black/30 backdrop-blur-sm">

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-tl-[160px] rounded-br-[160px]">
                    <div className="text-primary text-xs font-mono p-4 leading-relaxed">
                        {`{
  "name": "Ahmed",
  "role": "Frontend",
  "status": "coding",
  "coffee": true
}`}
                    </div>
                </div>

                <div className="text-center relative z-10">
                    <div className="inline-block m-auto relative">
                        <img src="/profile.png" alt="portfolio" className="transition-transform duration-300 group-hover:scale-105"/>
                        {/* Status indicator */}
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold mt-2">
                        <span className="text-primary font-mono">@</span>Alkhatim
                    </h2>
                    <p className="text-medium text-gray-300">
                        <span className="text-primary font-mono">{"<"}</span>
                        Front-end developer
                        <span className="text-primary font-mono">{"/>"}</span>
                    </p>
                </div>

                <ul className="text-medium space-y-[16px] relative z-10">
                    <li className="space-x-2 flex items-center hover:bg-primary/10 p-2 rounded-lg transition-colors">
                        <img src="/icon-mail.png" className="inline-block w-4 h-4"/>
                        <span className="text-sm">alkhatimaw@gmail.com</span>
                    </li>
                    <li className="space-x-2 flex items-center hover:bg-primary/10 p-2 rounded-lg transition-colors">
                        <img src="/icon-map-pin.png" className="inline-block w-4 h-4"/>
                        <span>Emirates</span>
                    </li>
                    <li className="space-x-2 flex items-center hover:bg-primary/10 p-2 rounded-lg transition-colors">
                        <img src="/icon-briefcase.png" className="inline-block w-4 h-4"/>
                        <span>Full-time / Freelancer</span>    
                    </li>
                    <li className="space-x-2 flex items-center hover:bg-primary/10 p-2 rounded-lg transition-colors">
                        <img src="/icon-link.png" className="inline-block w-4 h-4"/>
                        <span className="text-sm">alkhatim.vercel.app</span>
                    </li>
                    <li className="space-x-2 flex items-center hover:bg-primary/10 p-2 rounded-lg transition-colors">
                        <span className="text-primary text-xs font-mono">tel:</span>
                        <a className="text-sm hover:text-primary transition-colors" href="tel:+971544474970">+971544474970</a>
                    </li>
                </ul>

                {/* Enhanced tech stack */}
                <div className="relative z-10">
                    <p className="text-primary text-xs font-mono mb-3">// Tech Stack</p>
                    <div className="text-[#000] space-y-2">
                        <div className="flex flex-wrap gap-2">
                            {['HTML', 'CSS', 'JS', 'React', 'Vue.js'].map((tech, index) => (
                                <button 
                                    key={index} 
                                    className="tech-tag bg-primary px-[12px] py-[4px] rounded-full text-sm font-mono hover:bg-primary-100 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                        <div className="text-primary text-xs font-mono mt-2">
                            // Always learning new technologies
                        </div>
                    </div>
                </div>
                  {/* Hover effect overlay */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-tl-[160px] rounded-br-[160px] transition-all duration-300 pointer-events-none"></div>
            </div>
        </div>
    )
}