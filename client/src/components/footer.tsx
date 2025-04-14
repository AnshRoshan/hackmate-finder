export default function Footer() {
    return (
        <footer className="relative z-10 mt-16 border-t border-white/10 backdrop-blur-md bg-gray-900/50 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo and description */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-10 w-10 rounded-full overflow-hidden border border-purple-500/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                                <img
                                    className="object-cover h-full w-full"
                                    src="https://img.freepik.com/premium-photo/logo-with-hooded-hacker_941097-26965.jpg?w=360"
                                    alt="HackMate Logo"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                                HackMate Finder
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Find the perfect teammate for your next hackathon based on skills, interests, and coding style with our AI-powered matching algorithm.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="flex gap-12">
                        <div>
                            <h3 className="text-white font-medium mb-3">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-3">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social links */}
                    <div>
                        <h3 className="text-white font-medium mb-3">Connect</h3>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-full border border-white/10 bg-gray-800/60 flex items-center justify-center
                                            hover:border-purple-400/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300">
                                <i className="pi pi-github text-gray-300 hover:text-purple-400" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full border border-white/10 bg-gray-800/60 flex items-center justify-center
                                            hover:border-purple-400/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300">
                                <i className="pi pi-linkedin text-gray-300 hover:text-purple-400" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full border border-white/10 bg-gray-800/60 flex items-center justify-center
                                            hover:border-purple-400/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300">
                                <i className="pi pi-twitter text-gray-300 hover:text-purple-400" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© 2025 HackMate Finder. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-purple-400 text-xs transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-purple-400 text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-purple-400 text-xs transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}