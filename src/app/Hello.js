'use client'
import { Container } from "@/components"
import { useState, useEffect } from 'react';

export default () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [typewriterText, setTypewriterText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('intro');

    const fullText = "Welcome to my digital workspace...";

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setTypewriterText(fullText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => setIsLoading(false), 500);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Update time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="mb-10 desk:pl-20 space-y-[32px] relative group">
            {/* Enhanced background code pattern with animations */}            <div className="absolute inset-0 text-primary/5 text-xs font-mono pointer-events-none overflow-hidden">
                <div className="space-y-2 p-4 animate-fade-in-slow">
                    <div className="opacity-30">// ============================================</div>
                    <div className="opacity-40">// DEVELOPER INTRODUCTION MODULE</div>
                    <div className="opacity-30">// ============================================</div>
                    <div className="opacity-25">import &#123; Developer &#125; from './alkhatim';</div>
                    <div className="opacity-25">import &#123; Skills, Passion &#125; from './core';</div>
                    <div className="opacity-20">&nbsp;</div>                    <div className="opacity-35">const introduction = () =&gt; &#123;</div>
                    <div className="opacity-30">  return (</div>
                    <div className="opacity-25">    &lt;WelcomeMessage</div>
                    <div className="opacity-25">      developer="Ahmed Alkhatim"</div>
                    <div className="opacity-25">      role="Full-Stack Developer"</div>
                    <div className="opacity-25">      status="available"</div>
                    <div className="opacity-25">      passion="creating amazing experiences"</div>
                    <div className="opacity-30">    /&gt;</div>
                    <div className="opacity-30">  );</div>
                    <div className="opacity-35">&#125;;</div>
                    <div className="opacity-20">&nbsp;</div>
                    <div className="opacity-25">export default introduction;</div>
                </div>
            </div>

            {/* Terminal-style header */}
            <div className="relative z-10 mb-6">
                <div className="bg-gradient-to-r from-black/80 to-gray-900/80 rounded-lg border border-primary/30 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse hover:bg-green-400 transition-colors cursor-pointer"></div>
                            <span className="ml-4 text-primary text-sm font-mono">~/introduction.js</span>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-400 font-mono">
                            <span>{currentTime.toLocaleTimeString()}</span>
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>LIVE</span>
                            </div>
                        </div>
                    </div>
                    <div className="font-mono text-sm text-green-400">
                        <span className="text-gray-400">$</span> {typewriterText}
                        <span className="animate-pulse text-white">|</span>
                    </div>
                </div>
            </div>

            {/* Enhanced main content with IDE-style tabs */}
            <div className="relative z-10">
                {/* IDE Tabs */}
                <div className="flex items-center space-x-1 mb-4">
                    {['intro', 'skills', 'contact'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-mono rounded-t-lg transition-all duration-300 ${
                                activeTab === tab 
                                    ? 'bg-primary text-black border-b-2 border-primary' 
                                    : 'bg-gray-800/50 text-gray-400 hover:text-primary hover:bg-gray-700/50'
                            }`}
                        >
                            {tab}.js
                        </button>
                    ))}
                    <div className="flex-1 bg-gray-800/30 h-10 rounded-t-lg border-b border-gray-600"></div>
                </div>

                {/* Content based on active tab */}
                <div className="bg-gradient-to-br from-black/60 to-gray-900/60 rounded-lg border border-primary/20 p-6 backdrop-blur-sm">                    {activeTab === 'intro' && (
                        <div className="space-y-4">
                            <div className="space-y-3">
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'<IntroComponent>'}</span>
                                <div className="ps-[16px] py-3 relative">
                                    <div className="space-y-1 text-sm">
                                        <div className="flex items-center flex-wrap gap-1">
                                            <span className="text-primary font-mono">console.log(</span>
                                            <span className="text-yellow-300">"Hey there! 👋"</span>
                                            <span className="text-primary font-mono">);</span>
                                        </div>
                                        <div className="flex items-center flex-wrap gap-1">
                                            <span className="text-blue-400 font-mono">const</span>
                                            <span className="text-white">developer =</span>
                                            <span className="text-green-300">"Ahmed Alkhatim";</span>
                                        </div>
                                        <div className="flex items-center flex-wrap gap-1">
                                            <span className="text-blue-400 font-mono">const</span>
                                            <span className="text-white">role =</span>
                                            <span className="text-green-300">"Full-Stack Developer";</span>
                                        </div>
                                        <div className="flex items-center flex-wrap gap-1">
                                            <span className="text-blue-400 font-mono">const</span>
                                            <span className="text-white">passion =</span>
                                            <span className="text-green-300">"Amazing Experiences";</span>
                                        </div>
                                    </div>
                                    
                                    {/* Floating status indicator */}
                                    <div className="absolute -top-1 -right-1 flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                                        <span className="text-xs text-green-400 font-mono">ACTIVE</span>
                                    </div>
                                </div>
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'</IntroComponent>'}</span>
                            </div>

                            <div className="space-y-3">
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">{'<Description>'}</span>
                                <div className="ps-[16px] space-y-3">
                                    <p className="text-sm leading-relaxed">
                                        I help businesses grow by crafting <span className="text-primary font-semibold relative">
                                            amazing web experiences
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 animate-pulse"></div>
                                        </span>. 
                                        Looking for a developer who likes to <span className="text-primary font-semibold relative">
                                            get stuff done
                                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 animate-pulse"></div>
                                        </span>?
                                    </p>
                                    <div className="bg-black/40 rounded p-3 border border-gray-700">
                                        <div className="text-xs text-primary/70 font-mono space-y-1">
                                            <div>// Focus Areas:</div>
                                            <div className="grid grid-cols-2 gap-1 pl-2 text-gray-300">
                                                <div>• Performance</div>
                                                <div>• UX Design</div>
                                                <div>• Architecture</div>
                                                <div>• Modern Tech</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">{'</Description>'}</span>
                            </div>
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="space-y-4">
                            <div className="text-primary font-mono text-lg mb-4">// Current Tech Stack</div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h3 className="text-green-400 font-mono text-sm">Frontend</h3>
                                    <div className="space-y-1 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <span>React.js</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <span>Next.js</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                            <span>TypeScript</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-yellow-400 font-mono text-sm">Backend</h3>
                                    <div className="space-y-1 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>Node.js</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            <span>Express.js</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                            <span>MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="space-y-4">
                            <div className="text-primary font-mono text-lg mb-4">// Let's Connect</div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 p-3 bg-black/30 rounded border border-gray-700 hover:border-primary/50 transition-colors">
                                    <span className="text-green-400">📧</span>
                                    <span className="font-mono text-sm">alkhatimaw@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3 p-3 bg-black/30 rounded border border-gray-700 hover:border-primary/50 transition-colors">
                                    <span className="text-blue-400">💼</span>
                                    <span className="font-mono text-sm">Available for opportunities</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Enhanced call-to-action */}
                <div className="flex items-center space-x-4 pt-6">
                    <h3 className="text-lg text-primary font-bold font-mono">
                        <span className="text-gray-400">//</span> ready to collaborate?
                    </h3>
                    <div className="group cursor-pointer">
                        <div className="relative">
                            <span className="inline-flex items-center justify-center bg-gradient-to-r from-primary/20 to-primary/40 hover:from-primary hover:to-primary-100 w-[50px] h-[50px] rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 border border-primary/30 hover:border-primary">
                                <img src="/message.png" className="inline w-6 h-6 group-hover:filter group-hover:brightness-0 transition-all duration-300" alt="Contact me"/>
                            </span>
                            {/* Pulse rings */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping group-hover:border-primary"></div>
                            <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs text-primary/70 font-mono">
                            // Click to start conversation
                        </div>
                        <div className="text-xs text-gray-500 font-mono">
                            Response time: &lt; 24h
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}