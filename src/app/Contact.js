'use client'
import { Container } from "@/components"
import { useState, useEffect, useRef } from "react"

export default () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState(null)
    const [currentTime, setCurrentTime] = useState(new Date())
    const [typingText, setTypingText] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [hoverCount, setHoverCount] = useState(0)
    const [connectionStatus, setConnectionStatus] = useState('connecting')
    const particlesRef = useRef([])

    const fullText = "Initializing contact interface...";

    // Typing animation
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
        }, 5000); // Update every 5 seconds
        return () => clearInterval(interval);
    }, []);

    // Simulate connection status
    useEffect(() => {
        const statuses = ['connecting', 'connected', 'secure'];
        let statusIndex = 0;
        
        const interval = setInterval(() => {
            setConnectionStatus(statuses[statusIndex]);
            statusIndex = (statusIndex + 1) % statuses.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Generate particles for background
    useEffect(() => {
        particlesRef.current = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 2 + 1,
            direction: Math.random() * 360
        }));
    }, []);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setShowSuccess(true)
            setTimeout(() => setShowSuccess(false), 3000)
        }, 2000)
    }

    const contactInfo = [
        {
            icon: "icon-mail.png",
            label: "Email",
            value: "alkhatimaw@gmail.com",
            link: "mailto:alkhatimaw@gmail.com",
            status: "📧",
            description: "Best way to reach me"
        },
        {
            icon: "icon-map-pin.png", 
            label: "Location",
            value: "UAE, Remote Available",
            link: null,
            status: "🌍",
            description: "GMT+4 timezone"
        },
        {
            icon: "icon-briefcase.png",
            label: "Status",
            value: "Available for Projects",
            link: null,
            status: "✅",
            description: "Ready to collaborate"
        }
    ]

    return( 
        <div className="py-[64px] relative overflow-hidden">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap animate-fade-in-slow">
                    {`async function sendMessage(data) {
    try {
        console.log('Connecting to server...', '${currentTime.toLocaleTimeString()}');
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                ...data,
                timestamp: '${currentTime.toISOString()}',
                source: 'portfolio-v3.0'
            })
        });
        
        if (response.ok) {
            return { 
                success: true, 
                message: 'Message sent successfully!',
                status: 200 
            };
        }
    } catch (error) {
        console.error('Connection failed:', error);
        return { success: false, error: error.message };
    }
}`}
                </div>
            </div>            {/* Reduce floating contact particles for better performance */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-primary/20 font-mono text-xs animate-float-slow"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 1}s`,
                            animationDuration: `${5 + Math.random() * 2}s`
                        }}
                    >
                        {['@', '#', '&', '*'][Math.floor(Math.random() * 4)]}
                    </div>
                ))}
            </div>

            <Container>
                <div className="space-y-[64px] relative z-10">
                    {/* Enhanced animated header */}
                    <div className="text-center space-y-6">
                        {/* Terminal-style header */}
                        <div className="bg-gradient-to-r from-black/80 to-gray-900/80 rounded-lg border border-primary/30 p-6 backdrop-blur-sm max-w-2xl mx-auto">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                                    <span className="ml-4 text-primary text-sm font-mono">~/contact.js</span>
                                </div>                                <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">                                    <div className={`w-2 h-2 rounded-full animate-connection-pulse ${
                                        connectionStatus === 'connecting' ? 'bg-yellow-400' : 
                                        connectionStatus === 'connected' ? 'bg-green-400' : 'bg-blue-400'
                                    }`}></div>
                                    <span className="capitalize">{connectionStatus}</span>
                                    <span>|</span>
                                    <span>{currentTime.toLocaleTimeString()}</span>
                                    <span>|</span>
                                    <span>Interactions: {hoverCount}</span>
                                </div>
                            </div>
                            <div className="font-mono text-sm text-green-400 mb-2">
                                <span className="text-gray-400">$</span> {typingText}
                                <span className="animate-pulse text-white">|</span>
                            </div>
                        </div>

                        <div className="relative inline-block">
                            <h3 className="text-primary text-xlg py-[16px] px-[40px] border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="font-mono text-sm opacity-70 animate-pulse">{'</'}</span>
                                    Contact
                                    <span className="font-mono text-sm opacity-70 animate-pulse">{'>'}</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary via-transparent to-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin rounded-tl-[40px] rounded-br-[40px]" style={{animationDuration: '3s'}}></div>
                            </h3>
                            <div className="text-primary/70 text-sm mt-2 font-mono animate-pulse">// Let's build something amazing together</div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-medium text-gray-300 max-w-md mx-auto animate-fade-in-slow">
                                I'm currently available for freelance/fulltime work.<br />
                                <span className="text-primary font-mono text-sm">await collaboration.start();</span>
                            </p>
                            <div className="flex items-center justify-center space-x-4 text-xs font-mono text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                                    <span>Response time: &lt; 24h</span>
                                </div>
                                <span>|</span>
                                <span>Last seen: {currentTime.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>                    <div className="lap:grid lap:grid-cols-2 gap-12 space-y-8 lap:space-y-0">
                        {/* Enhanced Contact Information */}
                        <div className="space-y-8 animate-fade-in-slow">
                            <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="font-mono text-primary">const</span> contactInfo = {'{'}
                                    <div className="ml-auto flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                                        <span className="text-xs text-green-400 font-mono">API Ready</span>
                                    </div>
                                </h4>
                                
                                <div className="space-y-6">                                    {contactInfo.map((info, index) => (
                                        <div 
                                            key={index} 
                                            className="group/item animate-fade-in-slow cursor-pointer" 
                                            style={{animationDelay: `${index * 0.2}s`}}
                                            onMouseEnter={() => setHoverCount(prev => prev + 1)}
                                        >
                                            <div className="flex items-start gap-4 p-4 rounded-lg bg-black/30 border border-primary/10 group-hover/item:border-primary/40 group-hover/item:bg-black/50 transition-all duration-300 relative overflow-hidden">
                                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover/item:bg-primary/40 group-hover/item:scale-110 transition-all duration-300 relative">
                                                    <img src={`/${info.icon}`} alt={info.label} className="w-6 h-6 group-hover/item:scale-110 transition-transform duration-300"/>
                                                    <div className="absolute -top-1 -right-1 text-xs">{info.status}</div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-primary text-sm font-mono group-hover/item:text-yellow-300 transition-colors duration-300">{info.label}:</div>
                                                    {info.link ? (
                                                        <a 
                                                            href={info.link}
                                                            className="text-white hover:text-primary transition-colors duration-300 font-mono group-hover/item:underline"
                                                        >
                                                            "{info.value}"
                                                        </a>
                                                    ) : (
                                                        <div className="text-white font-mono group-hover/item:text-gray-200 transition-colors duration-300">"{info.value}"</div>
                                                    )}
                                                    <div className="text-xs text-gray-500 font-mono mt-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                                        // {info.description}
                                                    </div>
                                                </div>
                                                
                                                {/* Hover effect indicator */}
                                                <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover/item:opacity-100 animate-ping"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-6 text-primary font-mono text-sm flex items-center justify-between">
                                    <span>{'}'}</span>
                                    <span className="text-xs text-gray-500">// Updated: {currentTime.toLocaleString()}</span>
                                </div>

                                {/* Background animation */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Enhanced Social Links */}
                            <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 group animate-fade-in-slow" style={{animationDelay: '0.3s'}}>
                                <h4 className="text-lg font-bold text-white mb-6 font-mono flex items-center justify-between">
                                    <span>// Social connections</span>
                                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                        <span>Active</span>
                                    </div>
                                </h4>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://github.com/Ahmed-Alkhatim"
                                        target="_blank"
                                        className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 hover:scale-125 hover:rotate-12 transition-all duration-300 group/social relative overflow-hidden"
                                    >
                                        <img src="/icons/github.svg" alt="GitHub" className="w-7 h-7 group-hover/social:scale-110 transition-transform"/>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                    <a 
                                        href="https://linkedin.com/in/ahmed-alkhatim"
                                        target="_blank"
                                        className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 hover:scale-125 hover:rotate-12 transition-all duration-300 group/social relative overflow-hidden"
                                    >
                                        <img src="/icons/discord.svg" alt="LinkedIn" className="w-7 h-7 group-hover/social:scale-110 transition-transform"/>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                    <a 
                                        href="https://instagram.com/ahmed__alkhatim"
                                        target="_blank"
                                        className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 hover:scale-125 hover:rotate-12 transition-all duration-300 group/social relative overflow-hidden"
                                    >
                                        <img src="/icons/instagram.svg" alt="Instagram" className="w-7 h-7 group-hover/social:scale-110 transition-transform"/>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                </div>
                                
                                {/* Social stats */}
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    <div className="p-3 bg-black/30 rounded-lg border border-gray-700">
                                        <div className="text-primary font-mono text-lg font-bold">50+</div>
                                        <div className="text-xs text-gray-400">Repositories</div>
                                    </div>
                                    <div className="p-3 bg-black/30 rounded-lg border border-gray-700">
                                        <div className="text-green-400 font-mono text-lg font-bold">24h</div>
                                        <div className="text-xs text-gray-400">Response Time</div>
                                    </div>
                                    <div className="p-3 bg-black/30 rounded-lg border border-gray-700">
                                        <div className="text-yellow-400 font-mono text-lg font-bold">100%</div>
                                        <div className="text-xs text-gray-400">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>                        {/* Enhanced Contact Form */}
                        <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 group relative overflow-hidden animate-fade-in-slow" style={{animationDelay: '0.5s'}}>
                            <h4 className="text-xl font-bold text-white mb-6 font-mono flex items-center justify-between">
                                <span>
                                    <span className="text-primary">function</span> sendMessage() {'{'}
                                </span>
                                <div className="flex items-center space-x-2 text-xs text-gray-400">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                                    <span>Form Active</span>
                                </div>
                            </h4>

                            {/* Success message */}
                            {showSuccess && (
                                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-fade-in-slow">
                                    <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
                                        <span>✅</span>
                                        <span>console.log("Message sent successfully!");</span>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">                                <div className="space-y-2 group/input">
                                    <label className="text-primary text-sm font-mono flex items-center justify-between">
                                        <span>// Your name</span>
                                        {focusedField === 'name' && (
                                            <span className="text-xs text-green-400 animate-pulse">typing...</span>
                                        )}
                                    </label>
                                    <div className="relative">                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-mono group-hover/input:border-primary/50 ${focusedField === 'name' ? 'animate-form-focus animate-contact-glow' : ''}`}
                                            required
                                        />
                                        {focusedField === 'name' && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                                        )}
                                    </div>
                                </div>                                <div className="space-y-2 group/input">
                                    <label className="text-primary text-sm font-mono flex items-center justify-between">
                                        <span>// Your email</span>
                                        {focusedField === 'email' && (
                                            <span className="text-xs text-green-400 animate-pulse">typing...</span>
                                        )}
                                    </label>
                                    <div className="relative">                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-mono group-hover/input:border-primary/50 ${focusedField === 'email' ? 'animate-form-focus animate-contact-glow' : ''}`}
                                            required
                                        />
                                        {focusedField === 'email' && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                                        )}
                                    </div>
                                </div>                                <div className="space-y-2 group/input">
                                    <label className="text-primary text-sm font-mono flex items-center justify-between">
                                        <span>// Your message</span>
                                        {focusedField === 'message' && (
                                            <span className="text-xs text-green-400 animate-pulse">typing...</span>
                                        )}
                                    </label>
                                    <div className="relative">                                        <textarea
                                            placeholder="Tell me about your project..."
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            rows={5}
                                            className={`w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-mono resize-none group-hover/input:border-primary/50 ${focusedField === 'message' ? 'animate-form-focus animate-contact-glow' : ''}`}
                                            required
                                        ></textarea>
                                        {focusedField === 'message' && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary/80 text-black py-4 px-6 rounded-lg font-mono font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group/btn"
                                >
                                    <span className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                        {isSubmitting ? 'Sending...' : 'Send Message()'}
                                    </span>
                                    {isSubmitting && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    
                                    {/* Button hover effects */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-shimmer"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                </button>

                                <div className="flex items-center justify-between text-primary font-mono text-sm mt-4">
                                    <span>{'}'} // End of function</span>
                                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                        <span>Secure SSL</span>
                                    </div>
                                </div>
                            </form>

                            {/* Form progress indicator */}
                            <div className="mt-6 space-y-2">
                                <div className="flex justify-between text-xs text-gray-400 font-mono">
                                    <span>Form completion:</span>
                                    <span>{Math.round(((formData.name ? 1 : 0) + (formData.email ? 1 : 0) + (formData.message ? 1 : 0)) / 3 * 100)}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-1">
                                    <div 
                                        className="bg-primary h-1 rounded-full transition-all duration-500"
                                        style={{
                                            width: `${((formData.name ? 1 : 0) + (formData.email ? 1 : 0) + (formData.message ? 1 : 0)) / 3 * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Background animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>                    {/* Enhanced Call to Action */}
                    <div className="text-center bg-gradient-to-r from-gray-2 to-black/30 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm hover:border-primary/40 hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-fade-in-slow" style={{animationDelay: '0.7s'}}>
                        <div className="space-y-6">
                            <h4 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">Ready to start your project?</h4>
                            <div className="max-w-md mx-auto">
                                <p className="text-gray-300 font-mono leading-relaxed">
                                    <span className="text-primary">if</span> (project.isAwesome) {`{`}
                                    <br />
                                    &nbsp;&nbsp;<span className="text-primary">return</span> <span className="text-green-300">"Let's build it together!"</span>;
                                    <br />
                                    {`}`}
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-center space-x-6">
                                <div className="flex items-center space-x-2 text-green-500 group/status">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                    <span className="font-mono group-hover/status:text-green-300 transition-colors duration-300">Available for new projects</span>
                                </div>
                                <div className="text-gray-500 font-mono text-sm">|</div>
                                <div className="flex items-center space-x-2 text-blue-400 group/response">
                                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                    <span className="font-mono text-sm group-hover/response:text-blue-300 transition-colors duration-300">Response &lt; 24h</span>
                                </div>
                            </div>

                            {/* Project stats */}
                            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                                <div className="p-4 bg-black/30 rounded-lg border border-primary/20 group/stat hover:border-primary/40 transition-all duration-300">
                                    <div className="text-primary font-mono text-xl font-bold group-hover/stat:text-yellow-300 transition-colors duration-300">50+</div>
                                    <div className="text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors duration-300">Projects</div>
                                </div>
                                <div className="p-4 bg-black/30 rounded-lg border border-green-500/20 group/stat hover:border-green-500/40 transition-all duration-300">
                                    <div className="text-green-400 font-mono text-xl font-bold group-hover/stat:text-green-300 transition-colors duration-300">3+</div>
                                    <div className="text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors duration-300">Years</div>
                                </div>
                                <div className="p-4 bg-black/30 rounded-lg border border-yellow-500/20 group/stat hover:border-yellow-500/40 transition-all duration-300">
                                    <div className="text-yellow-400 font-mono text-xl font-bold group-hover/stat:text-yellow-300 transition-colors duration-300">100%</div>
                                    <div className="text-xs text-gray-400 group-hover/stat:text-gray-300 transition-colors duration-300">Quality</div>
                                </div>
                            </div>

                            {/* Additional info */}
                            <div className="pt-4 border-t border-primary/20">
                                <p className="text-sm text-gray-400 font-mono">
                                    <span className="text-primary">console.log(</span>
                                    <span className="text-green-300">"Excited to collaborate on your next project!"</span>
                                    <span className="text-primary">);</span>
                                </p>
                                <div className="mt-2 text-xs text-gray-500 font-mono">
                                    // Last active: {currentTime.toLocaleString()}
                                </div>
                            </div>
                        </div>                        {/* Reduce floating particles for better performance */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                                    style={{
                                        top: `${30 + Math.random() * 40}%`,
                                        left: `${30 + Math.random() * 40}%`,
                                        animationDelay: `${i * 0.5}s`
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* Background gradient animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}