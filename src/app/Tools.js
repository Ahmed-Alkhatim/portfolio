'use client'
import { useState, useEffect } from 'react';

export default () => {
    const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [activeMetric, setActiveMetric] = useState(null);

    const finalStats = [15, 50, 5]; // Updated values: Programming Languages, Projects, Years
    const labels = ['Programming Languages', 'Completed Projects', 'Years of Experience'];
    const descriptions = [
        'Modern web technologies mastered',
        'Successful projects delivered',
        'Years of continuous learning'
    ];
    const colors = ['text-blue-400', 'text-green-400', 'text-purple-400'];
    const bgColors = ['bg-blue-400/10', 'bg-green-400/10', 'bg-purple-400/10'];
    const icons = ['💻', '🚀', '⚡'];

    // Animate numbers on mount
    useEffect(() => {
        setIsVisible(true);
        const duration = 2000; // 2 seconds
        const intervals = finalStats.map((finalValue, index) => {
            let currentValue = 0;
            const increment = finalValue / (duration / 50);
            
            return setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    currentValue = finalValue;
                    clearInterval(intervals[index]);
                }
                setAnimatedStats(prev => {
                    const newStats = [...prev];
                    newStats[index] = Math.floor(currentValue);
                    return newStats;
                });
            }, 50);
        });

        // Update time
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            intervals.forEach(interval => clearInterval(interval));
            clearInterval(timeInterval);
        };
    }, []);

    return(
        <div className="relative group">
            {/* Enhanced container with terminal-style design */}
            <div className="w-[280px] bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 rounded-xl border border-primary/30 shadow-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-primary/20">
                
                {/* Terminal header */}
                <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse hover:bg-green-400 transition-colors cursor-pointer"></div>
                        <span className="ml-2 text-primary text-xs font-mono">stats.json</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>LIVE</span>
                    </div>
                </div>

                {/* Background matrix effect */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="matrix-bg"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 space-y-6">
                    {/* Header with typing animation */}
                    <div className="text-center mb-6">
                        <div className="text-primary font-mono text-sm mb-2">
                            // Developer metrics dashboard
                        </div>
                        <div className="text-xs text-gray-400 font-mono">
                            Last updated: {currentTime.toLocaleTimeString()}
                        </div>
                    </div>

                    {/* Enhanced stats with interactive elements */}
                    {finalStats.map((finalValue, index) => (
                        <div 
                            key={index}
                            className={`group/stat relative p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                                activeMetric === index 
                                    ? `border-primary/60 ${bgColors[index]}` 
                                    : 'border-gray-700/50 hover:border-primary/30'
                            }`}
                            onMouseEnter={() => setActiveMetric(index)}
                            onMouseLeave={() => setActiveMetric(null)}
                        >
                            {/* Animated background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            
                            <div className="relative z-10 flex items-center space-x-4">
                                {/* Icon with animation */}
                                <div className="text-3xl group-hover/stat:animate-bounce transition-transform duration-300">
                                    {icons[index]}
                                </div>
                                
                                <div className="flex-1">
                                    {/* Animated number */}
                                    <div className="flex items-baseline space-x-2">
                                        <span className={`text-4xl font-bold font-mono ${colors[index]} transition-all duration-300 group-hover/stat:text-primary`}>
                                            {animatedStats[index]}
                                            {index === 1 ? '+' : ''}
                                        </span>
                                        {index === 2 && (
                                            <span className={`text-lg ${colors[index]} font-mono`}>years</span>
                                        )}
                                    </div>
                                    
                                    {/* Label */}
                                    <div className="text-sm text-gray-300 font-medium mt-1 group-hover/stat:text-white transition-colors">
                                        {labels[index]}
                                    </div>
                                    
                                    {/* Description on hover */}
                                    <div className={`text-xs text-gray-500 mt-1 font-mono opacity-0 group-hover/stat:opacity-100 transition-all duration-300 ${
                                        activeMetric === index ? 'max-h-10' : 'max-h-0'
                                    } overflow-hidden`}>
                                        {descriptions[index]}
                                    </div>
                                </div>

                                {/* Status indicator */}
                                <div className="flex flex-col items-center space-y-1">
                                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        activeMetric === index ? 'bg-primary animate-ping' : 'bg-gray-600'
                                    }`}></div>
                                    <div className={`w-1 h-8 rounded-full transition-all duration-500 ${colors[index].replace('text-', 'bg-')}`} 
                                         style={{
                                             height: `${(animatedStats[index] / finalValue) * 32}px`,
                                             minHeight: '4px'
                                         }}>
                                    </div>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-3 w-full bg-gray-700/50 rounded-full h-1.5 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                                <div 
                                    className={`h-1.5 rounded-full transition-all duration-1000 ${colors[index].replace('text-', 'bg-')}`}
                                    style={{
                                        width: `${(animatedStats[index] / finalValue) * 100}%`
                                    }}
                                ></div>
                            </div>

                            {/* Floating data points */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                                <div className={`w-2 h-2 rounded-full ${colors[index].replace('text-', 'bg-')} animate-ping`}></div>
                            </div>
                        </div>
                    ))}

                    {/* Enhanced code snippet at bottom */}
                    <div className="mt-6 p-4 bg-black/40 rounded-lg border border-gray-700">
                        <div className="font-mono text-xs space-y-1">
                            <div className="text-gray-500">// Performance summary</div>
                            <div>
                                <span className="text-purple-400">const</span>{' '}
                                <span className="text-blue-400">developer</span>{' '}
                                <span className="text-gray-300">=</span>{' '}
                                <span className="text-gray-300">{'{'}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-yellow-300">"experience"</span>
                                <span className="text-gray-300">:</span>{' '}
                                <span className="text-green-300">"{animatedStats[2]}+ years"</span>
                                <span className="text-gray-300">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-yellow-300">"projects"</span>
                                <span className="text-gray-300">:</span>{' '}
                                <span className="text-green-300">"{animatedStats[1]}+"</span>
                                <span className="text-gray-300">,</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-yellow-300">"status"</span>
                                <span className="text-gray-300">:</span>{' '}
                                <span className="text-green-300">"available"</span>
                            </div>
                            <div>
                                <span className="text-gray-300">{'};'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom status bar */}
                    <div className="flex items-center justify-between text-xs font-mono text-gray-500 pt-2 border-t border-gray-700/50">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Real-time data</span>
                        </div>
                        <div>v2024.1.0</div>
                    </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
                
                {/* Corner glow effect */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: '2s'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}