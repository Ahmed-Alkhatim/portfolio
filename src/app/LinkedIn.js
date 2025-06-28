import { Container } from "@/components"

export default () => {    const linkedinPosts = [
        {
            id: "7335975128213684225",
            url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7335975128213684225",
            title: "Latest Professional Update",
            description: "Recent insights and achievements in web development",
            height: "600"
        },
        {
            id: "7332756577814261760",
            url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7332756577814261760",
            title: "Development Insights",
            description: "Sharing knowledge and best practices in modern web development",
            height: "957"
        },
        {
            id: "7331232351567396864",
            url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7331232351567396864",
            title: "Technical Deep Dive",
            description: "In-depth discussion on frontend technologies and methodologies",
            height: "1293"
        }
    ]

    return (
        <div className="py-[64px] bg-gradient-to-br from-black to-gray-2 relative overflow-hidden">
            {/* Background code pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="text-primary text-xs font-mono leading-relaxed p-8 whitespace-pre-wrap">
                    {`// Professional Network
async function fetchLinkedInPosts() {
    const posts = await api.getProfessionalUpdates();
    return posts.filter(post => post.isRelevant);
}`}
                </div>
            </div>

            <Container>
                <div className="space-y-[48px] relative z-10">
                    {/* Section Header */}
                    <div className="text-center space-y-4">
                        <div className="inline-block">
                            <div className="text-primary tablet:text-xlg text-lg py-[16px] px-[40px] text-center border-[4px] border-primary rounded-tl-[40px] rounded-br-[40px] bg-black/30 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10">Professional Updates</span>
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            {/* Code comment styling */}
                            <div className="text-primary/70 text-sm mt-2 font-mono">// Latest from LinkedIn</div>
                        </div>
                        
                        <p className="text-medium text-gray-300 max-w-2xl mx-auto">
                            Stay updated with my latest professional insights, project updates, and industry thoughts.
                        </p>
                    </div>                    {/* LinkedIn Posts Grid */}
                    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                        {linkedinPosts.map((post, index) => (
                            <div key={post.id} className="group">
                                <div className="p-6 bg-gradient-to-br from-gray-2 to-black/50 rounded-[24px] border border-primary/20 backdrop-blur-sm relative overflow-hidden">
                                    {/* Code line numbers */}
                                    <div className="absolute left-4 top-4 text-primary/40 text-xs font-mono">
                                        <div>{String(index + 1).padStart(2, '0')}</div>
                                    </div>

                                    {/* Post header */}
                                    <div className="mb-4 pl-8">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'<LinkedInPost>'}</span>
                                            <div className="h-px bg-primary/30 flex-1"></div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                                        <p className="text-sm text-gray-400 font-mono">{post.description}</p>
                                    </div>

                                    {/* LinkedIn Embed */}
                                    <div className="relative">
                                        <div className="bg-black/20 rounded-lg p-4 border border-primary/10">                                            <iframe 
                                                src={post.url}
                                                height={post.height} 
                                                width="100%" 
                                                frameBorder="0" 
                                                allowFullScreen="" 
                                                title={`LinkedIn post ${index + 1}`}
                                                className="rounded-lg max-w-full"
                                                loading="lazy"
                                            />
                                        </div>
                                        
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-300 pointer-events-none"></div>
                                    </div>

                                    {/* Post footer */}
                                    <div className="mt-4 pl-8">
                                        <div className="flex items-center gap-2">
                                            <div className="h-px bg-primary/30 flex-1"></div>
                                            <span className="text-primary text-sm font-mono bg-primary/10 px-2 py-1 rounded">{'</LinkedInPost>'}</span>
                                        </div>
                                        <div className="text-primary/70 text-xs mt-2 font-mono">
                                            // Click to view full post on LinkedIn
                                        </div>
                                    </div>

                                    {/* Interactive elements */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* View More Card */}
                        <div className="group cursor-pointer">
                            <div className="p-6 bg-gradient-to-br from-gray-2/50 to-black/30 rounded-[24px] border-2 border-dashed border-primary/30 backdrop-blur-sm relative overflow-hidden h-full flex flex-col items-center justify-center min-h-[300px] group-hover:border-primary/60 transition-all duration-300">
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">View More Posts</h3>
                                        <p className="text-sm text-gray-400 font-mono">// Check out my LinkedIn profile</p>
                                    </div>
                                    <a 
                                        href="https://linkedin.com/in/ahmed-alkhatim" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-primary hover:text-primary-100 transition-colors font-mono text-sm"
                                    >
                                        <span>linkedin.com/in/ahmed-alkhatim</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-5 pointer-events-none">
                                    <div className="text-primary text-xs font-mono p-4">
                                        {`{
  "platform": "LinkedIn",
  "status": "active",
  "engagement": "high"
}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code snippet at bottom */}
                    <div className="text-center">
                        <div className="inline-block p-4 bg-black/30 rounded-lg border border-primary/20">
                            <p className="text-primary text-sm font-mono">
                                <span className="text-gray-400">const</span> <span className="text-white">networkStatus</span> = <span className="text-yellow-300">"actively networking"</span>;
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
