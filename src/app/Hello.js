import { Container } from "@/components"

export default () => {
    return(
        <div className="mb-10 desk:pl-20 space-y-[32px] relative">
            {/* Background code pattern */}
            <div className="absolute -top-4 -left-4 text-primary/10 text-xs font-mono pointer-events-none">
                <div>// Welcome message</div>
                <div>function introduction() {'{'}...{'}'}</div>
            </div>

            <div className="relative z-10">
                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'<h1>'}</span>
                <h2 className="lap:leading-[67px] tablet:text-xlg text-lg ps-[16px] py-4">
                    <span className="text-primary font-mono text-sm">console.log(</span>
                    <span className="text-white">"Hey, </span><br />
                    <span className="text-white">I am </span><span className="text-primary font-bold animate-pulse">Alkhatim</span>
                    <span className="text-white">"</span><br />
                    <span className="text-gray-300">A </span><span className="text-primary font-semibold">Front-end developer</span>
                    <span className="text-gray-300"> passionate about</span><br />
                    <span className="text-primary font-mono">creating amazing experiences</span>
                    <span className="text-primary font-mono text-sm">);</span>
                </h2>
                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'</h1>'}</span>
            </div>

            <div className="space-y-[16px] relative z-10">
                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">{'<p>'}</span>
                <div className="ps-[16px] space-y-2">
                    <h2 className="text-medium leading-relaxed">
                        I help businesses grow by crafting <span className="text-primary font-semibold">amazing web experiences</span>. 
                        If you're looking for a developer who likes to <span className="text-primary font-semibold">get stuff done</span>,
                    </h2>
                    <div className="text-xs text-primary/70 font-mono">
                        // Focused on performance, accessibility, and user experience
                    </div>
                </div>
                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">{'</p>'}</span>
                
                <div className="flex items-center space-x-4 pt-4">
                    <h3 className="text-lg text-primary font-bold">let's connect</h3>
                    <div className="group">
                        <span className="inline-flex items-center justify-center bg-gradient-to-r from-gray to-primary/20 hover:from-primary hover:to-primary-100 w-[50px] h-[50px] rounded-full transition-all duration-300 cursor-pointer group-hover:scale-110 group-hover:rotate-12">
                            <img src="/message.png" className="inline w-6 h-6 group-hover:filter group-hover:brightness-0" alt="message"/>
                        </span>
                    </div>
                    <div className="text-xs text-primary/70 font-mono">
                        // Available for new opportunities
                    </div>
                </div>
            </div>
        </div>
    )
}