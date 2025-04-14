import type React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col">
			{/* Background gradient and accent effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0" />
			<div className="absolute inset-0 opacity-10 z-0">
				<div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl" />
				<div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl" />
			</div>

			{/* Main content */}
			<main className="container mx-auto px-6 py-16 relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-between gap-12">
				{/* Left column - Text content */}
				<div className="lg:w-1/2 space-y-8">
					<h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
						Find Your Perfect
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
							Hackathon Teammate
						</span>
					</h1>

					<p className="text-xl text-gray-300 max-w-lg">
						Connect with like-minded developers, designers, and innovators based
						on your skills, interests, and coding style.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<Link
							to="/auth/register"
							className="px-8 py-4 bg-purple-700 hover:bg-purple-600 rounded-xl font-bold transition-all
                           shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                           border border-purple-500/30 backdrop-blur-sm"
						>
							Sign Up
						</Link>

						<Link
							to="/auth/login"
							className="px-8 py-4 bg-gray-800/70 hover:bg-gray-700/70 rounded-xl font-bold transition-all
                           backdrop-blur-sm border border-white/10 hover:border-white/20"
						>
							Login
						</Link>
					</div>

					<div className="pt-8 flex items-center space-x-4 text-gray-400">
						<span className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-purple-400 mr-2"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<title>sign</title>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							AI-powered matching
						</span>
						<span className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-purple-400 mr-2"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<title>sign</title>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							Resume parsing
						</span>
					</div>
				</div>

				{/* Right column - Feature card */}
				<div className="lg:w-1/2 w-full">
					<div
						className="w-full rounded-2xl 
                       border border-white/10 backdrop-blur-md
                       bg-gradient-to-br from-gray-800/80 via-gray-800/40 to-gray-800/80
                       shadow-[0_0_15px_rgba(0,0,0,0.3)]
                       overflow-hidden"
					>
						<div className="border-b border-white/10 px-8 py-5 flex justify-between items-center">
							<h3 className="font-semibold text-xl">Find your match</h3>
							<div className="flex space-x-2">
								<div className="w-3 h-3 rounded-full bg-red-400" />
								<div className="w-3 h-3 rounded-full bg-yellow-400" />
								<div className="w-3 h-3 rounded-full bg-green-400" />
							</div>
						</div>

						<div className="p-8">
							<div className="space-y-5">
								<div className="flex gap-4 items-start">
									<div className="w-10 h-10 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center">
										<span className="font-bold">92%</span>
									</div>
									<div>
										<h4 className="font-medium text-white">Sarah Chen</h4>
										<p className="text-gray-400 text-sm">
											Full-stack developer • React, Node.js, MongoDB
										</p>
									</div>
								</div>

								<div className="flex gap-4 items-start">
									<div className="w-10 h-10 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center">
										<span className="font-bold">87%</span>
									</div>
									<div>
										<h4 className="font-medium text-white">James Wilson</h4>
										<p className="text-gray-400 text-sm">
											UI/UX Designer • Figma, Adobe XD, CSS
										</p>
									</div>
								</div>

								<div className="flex gap-4 items-start">
									<div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center">
										<span className="font-bold">75%</span>
									</div>
									<div>
										<h4 className="font-medium text-white">Alex Johnson</h4>
										<p className="text-gray-400 text-sm">
											ML Engineer • Python, TensorFlow, PyTorch
										</p>
									</div>
								</div>
							</div>

							<div className="mt-8 p-5 rounded-xl bg-black/20 border border-purple-500/30">
								<p className="text-gray-300 text-sm">
									Finding teammates now with AI enhancement to match skills,
									projects, and coding styles for optimal team composition.
								</p>
							</div>
						</div>

						<div className="px-8 py-5 border-t border-white/10 flex justify-between">
							<Link
								to="/auth/register"
								className="text-purple-400 hover:text-purple-300 transition-colors"
							>
								Create your profile
							</Link>
							<span className="text-gray-400 text-sm">Updated just now</span>
						</div>
					</div>
				</div>
			</main>

			{/* Bottom accent - floating shapes */}
			<div className="relative z-10 h-32 overflow-hidden">
				<div className="absolute -bottom-8 -left-10 w-64 h-32 bg-purple-800/20 rounded-full filter blur-2xl" />
				<div className="absolute -bottom-8 left-1/3 w-64 h-32 bg-indigo-800/20 rounded-full filter blur-2xl" />
				<div className="absolute -bottom-8 right-1/3 w-64 h-32 bg-purple-800/20 rounded-full filter blur-2xl" />
				<div className="absolute -bottom-8 -right-10 w-64 h-32 bg-indigo-800/20 rounded-full filter blur-2xl" />
			</div>
		</div>
	);
};

export default Hero;
