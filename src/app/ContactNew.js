'use client'
import { Container } from "@/components"
import { useState } from "react"

export default () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
        }, 2000)
    }

    const contactInfo = [
        {
            icon: "icon-mail.png",
            label: "Email",
            value: "ahmed.alkhatim@email.com",
            link: "mailto:ahmed.alkhatim@email.com"
        },
        {
            icon: "icon-map-pin.png", 
            label: "Location",
            value: "Available Worldwide",
            link: null
        },
        {
            icon: "icon-briefcase.png",
            label: "Status",
            value: "Available for Projects",
            link: null
        }
    ]

    return( 
        <div className="py-[64px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap">
                    {`async function sendMessage(data) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            return { success: true, message: 'Message sent!' };
        }
    } catch (error) {
        console.error('Failed to send message:', error);
    }
}`}
                </div>
            </div>

            <Container>
                <div className="space-y-[64px] relative z-10">
                    <div className="text-center space-y-4">
                        <div className="relative inline-block">
                            <h3 className="text-primary text-xlg py-[16px] px-[40px] border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="font-mono text-sm opacity-70">{'</'}</span>
                                    Contact
                                    <span className="font-mono text-sm opacity-70">{'>'}</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </h3>
                            <div className="text-primary/70 text-sm mt-2 font-mono">// Let's connect</div>
                        </div>
                        <p className="text-medium text-gray-300 max-w-md mx-auto">
                            I'm currently available for freelance/fulltime work.<br />
                            <span className="text-primary font-mono text-sm">await collaboration.start();</span>
                        </p>
                    </div>

                    <div className="lap:grid lap:grid-cols-2 gap-12 space-y-8 lap:space-y-0">
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm">
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="font-mono text-primary">const</span> contactInfo = {'{'}
                                </h4>
                                
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="group">
                                            <div className="flex items-start gap-4 p-4 rounded-lg bg-black/30 border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                                                    <img src={`/${info.icon}`} alt={info.label} className="w-5 h-5"/>
                                                </div>
                                                <div>
                                                    <div className="text-primary text-sm font-mono">{info.label}:</div>
                                                    {info.link ? (
                                                        <a 
                                                            href={info.link}
                                                            className="text-white hover:text-primary transition-colors duration-300 font-mono"
                                                        >
                                                            "{info.value}"
                                                        </a>
                                                    ) : (
                                                        <div className="text-white font-mono">"{info.value}"</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-6 text-primary font-mono text-sm">{'}'}</div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm">
                                <h4 className="text-lg font-bold text-white mb-4 font-mono">
                                    // Social connections
                                </h4>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://github.com/Ahmed-Alkhatim"
                                        target="_blank"
                                        className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all duration-300 group"
                                    >
                                        <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 group-hover:scale-110 transition-transform"/>
                                    </a>
                                    <a 
                                        href="https://linkedin.com/in/ahmed-alkhatim"
                                        target="_blank"
                                        className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all duration-300 group"
                                    >
                                        <img src="/icons/discord.svg" alt="LinkedIn" className="w-6 h-6 group-hover:scale-110 transition-transform"/>
                                    </a>
                                    <a 
                                        href="https://instagram.com/ahmed__alkhatim"
                                        target="_blank"
                                        className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all duration-300 group"
                                    >
                                        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 group-hover:scale-110 transition-transform"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-2 to-black/50 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm">
                            <h4 className="text-xl font-bold text-white mb-6 font-mono">
                                <span className="text-primary">function</span> sendMessage() {'{'}
                            </h4>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-primary text-sm font-mono block">
                                        // Your name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-mono"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-primary text-sm font-mono block">
                                        // Your email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-mono"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-primary text-sm font-mono block">
                                        // Your message
                                    </label>
                                    <textarea
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        rows={5}
                                        className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-mono resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary/80 text-black py-4 px-6 rounded-lg font-mono font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                >
                                    <span className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                        {isSubmitting ? 'Sending...' : 'Send Message()'}
                                    </span>
                                    {isSubmitting && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                </button>

                                <div className="text-primary font-mono text-sm mt-4">
                                    {'}'} // End of function
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="text-center bg-gradient-to-r from-gray-2 to-black/30 rounded-[20px] p-8 border border-primary/20 backdrop-blur-sm">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-bold text-white">Ready to start your project?</h4>
                            <p className="text-gray-300 font-mono">
                                <span className="text-primary">if</span> (project.isAwesome) <span className="text-gray-400">{'{'}</span>
                                <br />
                                &nbsp;&nbsp;<span className="text-primary">return</span> <span className="text-yellow-300">"Let's build it together!"</span>;
                                <br />
                                <span className="text-gray-400">{'}'}</span>
                            </p>
                            <div className="flex items-center justify-center space-x-2 text-green-500">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-mono">Available for new projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
