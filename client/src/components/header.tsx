export default function Header() {
    return (
        <header className="flex border-b-[1px] border-gray-700 rounded-lg shadow-lg items-center justify-between backdrop-blur-lg shadow-mds">
            <div className="logo flex items-center gap-2">
                <img className="object-contain h-[70px]" src="https://img.freepik.com/premium-photo/logo-with-hooded-hacker_941097-26965.jpg?w=360" alt="" />
                <h1 className="text-2xl font-medium text-violet-400">Hacker Finder</h1>
            </div>
            <nav>
                <ul className="flex flex-1 max-w-[600px] gap-5 px-5 items-center py-4">
                    <li className="relative">
                        <button className="relative w-10 h-10 rounded-full 
                                       border border-white/20 hover:border-purple-400/50
                                       bg-gray-800/60 backdrop-blur-md
                                       flex items-center justify-center
                                       transition-all duration-300
                                       shadow-[0_0_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_12px_rgba(139,92,246,0.3)]
                                       group">
                            <i className="pi pi-bell text-gray-300 group-hover:text-purple-400 transition-colors" />
                            {/* Notification indicator */}
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full
                                         border border-white/20 flex items-center justify-center text-[10px] font-bold">
                                3
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="bg-gradient-to-r from-purple-600 to-indigo-600
                                       hover:from-purple-500 hover:to-indigo-500
                                       text-white font-medium py-2 px-4 rounded-lg
                                       transition-all duration-300
                                       border border-purple-500/30 hover:border-purple-500/50
                                       shadow-[0_0_10px_rgba(139,92,246,0.2)] hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]
                                       backdrop-blur-sm flex items-center gap-2">
                            <i className="pi pi-sign-out text-sm" />
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}