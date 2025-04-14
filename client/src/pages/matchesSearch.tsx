import { useState } from "react";
import { MatchTile } from "../components/matchTile";

export default function MatchSearches() {
	const [selectedFilter, setSelectedFilter] = useState<string>("all");
	const [searchQuery, setSearchQuery] = useState<string>("");

	// Mock data for filters
	const filters = [
		{ id: "all", label: "All Matches" },
		{ id: "favorites", label: "Favorites" },
		{ id: "recent", label: "Recent" },
		{ id: "pending", label: "Pending" },
	];

	return (
		<section className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-10 px-6 relative overflow-hidden">
			{/* Purple accent background elements */}
			<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
				<div className="absolute top-[20%] left-[10%] w-96 h-96 bg-purple-800/20 rounded-full filter blur-[120px]" />
				<div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-indigo-800/20 rounded-full filter blur-[120px]" />
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header with search */}
				<div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-10">
					<div>
						<h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
							Your{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
								Potential Matches
							</span>
						</h1>
						<p className="text-gray-400 max-w-xl">
							Discover developers with similar skills and interests for your
							next hackathon project
						</p>
					</div>

					<div className="relative w-full md:w-auto min-w-[280px]">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<i className="pi pi-search text-gray-400" />
						</div>
						<input
							type="text"
							className="w-full bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-lg pl-10 pr-4 py-2.5
									 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
							placeholder="Search by name or skill..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
				</div>

				{/* Filter tabs */}
				<div className="flex overflow-x-auto hide-scrollbar mb-8 pb-2">
					<div className="flex gap-2 p-1 rounded-lg backdrop-blur-sm bg-gray-800/30 border border-white/10 shadow-lg">
						{filters.map((filter) => (
							<button
								type="button"
								key={filter.id}
								className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap
										${
											selectedFilter === filter.id
												? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.3)]"
												: "text-gray-300 hover:text-white hover:bg-white/5"
										}`}
								onClick={() => setSelectedFilter(filter.id)}
							>
								{filter.label}
							</button>
						))}
					</div>
				</div>

				{/* Match grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{Array(8)
						.fill(0)
						.map((_, i) => (
							<MatchTile key={i} />
						))}
				</div>

				{/* Load more button */}
				<div className="flex justify-center mt-12">
					<button
						type="button"
						className="px-6 py-3 rounded-lg bg-gray-800/60 backdrop-blur-md
									text-gray-200 hover:text-white border border-white/10 hover:border-purple-500/30
									transition-all duration-300 flex items-center gap-2
									shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
					>
						<i className="pi pi-refresh" />
						Load More Matches
					</button>
				</div>

				{/* Stats card */}
				<div
					className="mt-16 p-6 rounded-xl bg-gradient-to-br from-gray-800/60 via-gray-800/30 to-gray-800/60
							backdrop-blur-lg border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
				>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="text-center">
							<div
								className="inline-flex items-center justify-center w-12 h-12 rounded-full
										bg-purple-900/30 border border-purple-500/30 mb-3"
							>
								<i className="pi pi-users text-purple-400 text-xl" />
							</div>
							<h3 className="text-2xl font-bold text-white">94%</h3>
							<p className="text-gray-400 text-sm">Match Compatibility</p>
						</div>

						<div className="text-center">
							<div
								className="inline-flex items-center justify-center w-12 h-12 rounded-full
										bg-purple-900/30 border border-purple-500/30 mb-3"
							>
								<i className="pi pi-star text-purple-400 text-xl" />
							</div>
							<h3 className="text-2xl font-bold text-white">12</h3>
							<p className="text-gray-400 text-sm">Perfect Matches</p>
						</div>

						<div className="text-center">
							<div
								className="inline-flex items-center justify-center w-12 h-12 rounded-full
										bg-purple-900/30 border border-purple-500/30 mb-3"
							>
								<i className="pi pi-check-circle text-purple-400 text-xl" />
							</div>
							<h3 className="text-2xl font-bold text-white">24</h3>
							<p className="text-gray-400 text-sm">Connection Requests</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
