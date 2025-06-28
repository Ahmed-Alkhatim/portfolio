import Container from "./Container";

export default function Header() {
    
    return(
        <div className="py-[24px] border-b-2 border-gray backdrop-blur-sm bg-black/20 sticky top-0 z-50">
            <Container>
            <h1 className="text-medium text-[#FFF] flex justify-between items-center">
               
                <div className="lap:text-lg tablet:text-[20px] space-x-1 group">
                    <span className="text-primary font-mono group-hover:animate-pulse">{'<C/>'}</span>
                    <span className="font-semibold">Ahmed alkhatim</span>
                    <span className="text-primary text-xs font-mono ml-2 opacity-70">// Web Developer</span>
                </div>

                <div className="hidden tablet:flex space-x-[32px] items-center">
                    {/* Social links with enhanced styling */}
                    <a 
                        href="https://linkedin.com/in/ahmed-alkhatim" 
                        target="_blank" 
                        className="relative group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                    >
                        <img src="/icons/discord.svg" alt="linkedin" className="w-6 h-6 group-hover:scale-110 transition-transform"/>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            LinkedIn
                        </div>
                    </a>
                    <a 
                        href="https://github.com/Ahmed-Alkhatim" 
                        target="_blank"
                        className="relative group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                    >
                        <img src="/icons/github.svg" alt="github" className="w-6 h-6 group-hover:scale-110 transition-transform"/>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            GitHub
                        </div>
                    </a>
                    <a 
                        href="https://instagram.com/ahmed__alkhatim" 
                        target="_blank"
                        className="relative group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                    >
                        <img src="/icons/instagram.svg" alt="instagram" className="w-6 h-6 group-hover:scale-110 transition-transform"/>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Instagram
                        </div>
                    </a>
                    
                    {/* Status indicator */}
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-500 font-mono">Available for work</span>
                    </div>
                </div>
            </h1>        </Container>
        </div>
    )
} 