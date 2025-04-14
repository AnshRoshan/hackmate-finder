export function MatchTile() {
	return (
		<article
			className="relative bg-gradient-to-br from-gray-800/80 via-gray-800/40 to-gray-800/80 
                          backdrop-blur-md rounded-xl border border-white/10 
                          text-white w-[250px] p-5 flex items-center flex-col 
                          shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)]
                          transition-all duration-300 hover:border-purple-500/20 group"
		>
			{/* Match percentage indicator */}
			<div
				className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 
                          rounded-full flex items-center justify-center font-bold text-white text-sm
                          border-2 border-white/10 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
			>
				92%
			</div>

			<div
				className="mb-4 w-[110px] h-[110px] rounded-full overflow-hidden
                          border-2 border-purple-500/30 
                          shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
			>
				<img
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
					className="w-full h-full object-cover"
					alt="Profile"
				/>
			</div>

			<h1 className="text-lg font-semibold mb-1"> Alex Johnson </h1>
			<p className="text-sm text-gray-300 mb-3">Front-end Developer</p>

			{/* Skills tags */}
			<div className="flex flex-wrap gap-1 justify-center mb-4">
				<span className="px-2 py-1 bg-purple-900/40 rounded-full text-xs border border-purple-500/20 text-purple-300">
					React
				</span>
				<span className="px-2 py-1 bg-purple-900/40 rounded-full text-xs border border-purple-500/20 text-purple-300">
					TypeScript
				</span>
				<span className="px-2 py-1 bg-purple-900/40 rounded-full text-xs border border-purple-500/20 text-purple-300">
					Tailwind
				</span>
			</div>

			<article className="flex gap-3 items-center mb-4">
				<a
					href=""
					className="w-9 h-9 flex items-center justify-center rounded-full
                                   bg-gray-800/80 border border-white/10 
                                   hover:border-purple-500/50 hover:bg-gray-700/80
                                   text-gray-300 hover:text-purple-400
                                   transition-all duration-300
                                   shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(139,92,246,0.2)]"
				>
					<i className="pi pi-github" />
				</a>
				<a
					href="#"
					className="w-9 h-9 flex items-center justify-center rounded-full
                                   bg-gray-800/80 border border-white/10 
                                   hover:border-purple-500/50 hover:bg-gray-700/80
                                   text-gray-300 hover:text-purple-400
                                   transition-all duration-300
                                   shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(139,92,246,0.2)]"
				>
					<i className="pi pi-linkedin" />
				</a>
				<a
					href="#"
					className="w-9 h-9 flex items-center justify-center rounded-full
                                   bg-gray-800/80 border border-white/10 
                                   hover:border-purple-500/50 hover:bg-gray-700/80
                                   text-gray-300 hover:text-purple-400
                                   transition-all duration-300
                                   shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_10px_rgba(139,92,246,0.2)]"
				>
					<i className="pi pi-envelope" />
				</a>
			</article>

			<button
				className="w-full py-2.5 rounded-lg 
                            bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500
                            text-sm font-medium text-white flex items-center justify-center gap-2
                            border border-purple-500/30 
                            shadow-[0_0_10px_rgba(139,92,246,0.2)] hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]
                            transition-all duration-300"
			>
				<i className="pi pi-plus" />
				Connect
			</button>
		</article>
	);
}
