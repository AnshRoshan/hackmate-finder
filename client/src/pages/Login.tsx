import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
	const [isNewUser, setIsNewUser] = useState(false);
	const [step, setStep] = useState(1); // 1: Auth, 2: Profile
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [resumeFile, setResumeFile] = useState<File | null>(null);
	const [skills, setSkills] = useState<string[]>([]);
	const [skillInput, setSkillInput] = useState("");
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleEmailPasswordLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			// Replace with your actual login implementation
			await login({ email, password });

			// If user is new and login successful, proceed to profile step
			if (isNewUser) {
				setStep(2);
			} else {
				navigate("/home");
			}
		} catch (err) {
			setError("Invalid email or password. Please try again.");
			console.error("Login error:", err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleOAuthLogin = (provider: string) => {
		// Real OAuth implementation
		const githubClientId =
			import.meta.env.GITHUB_CLIENT_ID || "your_github_client_id";
		const linkedinClientId =
			import.meta.env.LINKEDIN_CLIENT_ID || "your_linkedin_client_id";

		// Set the redirect URI - this should be configured in your OAuth app settings
		const redirectUri = `${window.location.origin}/auth/callback`;

		// Build the authorization URL based on the provider
		let authUrl = "";

		if (provider === "github") {
			authUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:email`;
		} else if (provider === "linkedin") {
			authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedinClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=r_liteprofile%20r_emailaddress`;
		}

		// Store the isNewUser state in localStorage so we can access it after redirect
		localStorage.setItem("isNewUser", isNewUser.toString());

		// Redirect to the authorization URL
		window.location.href = authUrl;

		// Note: The code below won't execute due to the redirect
		// The auth callback should handle the token and redirect to the appropriate page
	};

	const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.[0]) {
			setResumeFile(e.target.files[0]);
		}
	};

	const addSkill = () => {
		if (skillInput && !skills.includes(skillInput)) {
			setSkills([...skills, skillInput]);
			setSkillInput("");
		}
	};

	const removeSkill = (skillToRemove: string) => {
		setSkills(skills.filter((skill) => skill !== skillToRemove));
	};

	const handleProfileSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// In a real implementation, you would send this data to your backend
		console.log({
			name,
			resumeFile,
			skills,
		});

		// Navigate to home after profile completion
		navigate("/home");
	};

	return (
		<section className="flex items-center justify-center min-h-screen bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
			<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/30 rounded-full filter blur-3xl" />
			</div>

			<div
				className="relative z-10 max-w-md w-full rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.3)] 
                         border border-white/10 backdrop-blur-xl 
                         bg-gradient-to-br from-gray-800/60 via-gray-800/30 to-gray-800/60 
                         overflow-hidden"
			>
				<div className="flex items-center py-5 px-6 border-b border-white/10 justify-center">
					<div className="logo flex items-center gap-3">
						<div className="h-[60px] w-[60px] rounded-full overflow-hidden border-2 border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
							<img
								className="object-cover h-full w-full"
								src="https://img.freepik.com/premium-photo/logo-with-hooded-hacker_941097-26965.jpg?w=360"
								alt="Hacker Finder Logo"
							/>
						</div>
						<h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
							HackMate Finder
						</h1>
					</div>
				</div>

				{step === 1 ? (
					<div className="space-y-6 p-6">
						<div className="text-center mb-8">
							<h2 className="text-xl font-medium text-white mb-2">
								Welcome Back
							</h2>
							<p className="text-gray-400 text-sm">
								Sign in to find your perfect hackathon teammate
							</p>
						</div>

						{error && (
							<div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
								{error}
							</div>
						)}

						<form onSubmit={handleEmailPasswordLogin} className="space-y-4">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-300 mb-1"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full bg-gray-800/80 border border-white/10 rounded-lg px-4 py-2.5 
                                         text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
									placeholder="Enter your email"
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-300 mb-1"
								>
									Password
								</label>
								<input
									id="password"
									type="password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full bg-gray-800/80 border border-white/10 rounded-lg px-4 py-2.5 
                                         text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
									placeholder="Enter your password"
								/>
							</div>

							<div className="flex items-center justify-between text-sm">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-gray-300"
									>
										Remember me
									</label>
								</div>
								<div className="text-purple-400 hover:text-purple-300 cursor-pointer">
									Forgot password?
								</div>
							</div>

							<button
								type="submit"
								disabled={isLoading}
								className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 
                                     hover:from-purple-500 hover:to-indigo-500 
                                     text-white font-medium py-2.5 rounded-lg transition-all duration-300
                                     shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                                     border border-purple-500/30 flex items-center justify-center"
							>
								{isLoading ? (
									<span className="flex items-center">
										<svg
											className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											{" "}
											<title>sign</title>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
										</svg>
										Signing in...
									</span>
								) : (
									"Sign In"
								)}
							</button>
						</form>

						<div className="relative flex items-center justify-center my-6">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-600/30" />
							</div>
							<div className="relative px-4 bg-gray-800/30 text-sm text-gray-400">
								Or continue with
							</div>
						</div>

						<div className="space-y-3">
							<button
								type="button"
								onClick={() => handleOAuthLogin("github")}
								className="w-full bg-gray-800/80 text-xl font-semibold hover:bg-gray-700/80 duration-300 flex items-center justify-center gap-3 text-white py-3 px-4 rounded-lg
                                       border border-white/5 hover:border-white/10 transition-all
                                       shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
							>
								<i className="pi pi-github text-lg" />
								<span>Sign in with Github</span>
							</button>

							<button
								type="button"
								onClick={() => handleOAuthLogin("linkedin")}
								className="w-full bg-purple-700/80 text-xl font-semibold hover:bg-purple-600/80 duration-300 flex items-center justify-center gap-3 text-white py-3 px-4 rounded-lg
                                       border border-purple-500/30 hover:border-purple-500/50 transition-all
                                       shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
							>
								<i className="pi pi-linkedin text-lg" />
								<span>Sign in with LinkedIn</span>
							</button>
						</div>
					</div>
				) : (
					<div className="space-y-4 p-6">
						<div className="text-center mb-6">
							<h2 className="text-xl font-medium text-white mb-2">
								Complete Your Profile
							</h2>
							<p className="text-gray-400 text-sm">
								Help us match you with the perfect teammates
							</p>
						</div>

						<form onSubmit={handleProfileSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-300 mb-1"
								>
									Full Name
								</label>
								<input
									id="name"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									placeholder="John Doe"
								/>
							</div>

							<div>
								<label
									htmlFor="resume"
									className="block text-sm font-medium text-gray-300 mb-1"
								>
									Upload Resume
								</label>
								<div className="flex items-center justify-center w-full">
									<label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-500 hover:border-purple-400 rounded-lg cursor-pointer bg-gray-700/30 hover:bg-gray-700/50 transition-all">
										<div className="flex flex-col items-center justify-center pt-5 pb-6">
											{resumeFile ? (
												<>
													<i className="pi pi-file-pdf text-3xl text-purple-400 mb-2" />
													<p className="text-sm text-gray-300">
														{resumeFile.name}
													</p>
													<p className="text-xs text-gray-400 mt-1">
														Click to change
													</p>
												</>
											) : (
												<>
													<i className="pi pi-cloud-upload text-3xl text-gray-400 mb-2" />
													<p className="text-sm text-gray-400">
														Click to upload or drag and drop
													</p>
													<p className="text-xs text-gray-500 mt-1">
														PDF, DOCX up to 5MB
													</p>
												</>
											)}
										</div>
										<input
											id="resume"
											type="file"
											className="hidden"
											accept=".pdf,.doc,.docx"
											onChange={handleResumeUpload}
											required
										/>
									</label>
								</div>
							</div>

							<div>
								<label
									htmlFor="skills"
									className="block text-sm font-medium text-gray-300 mb-1"
								>
									Skills
								</label>
								<div className="flex gap-2">
									<input
										id="skills"
										type="text"
										value={skillInput}
										onChange={(e) => setSkillInput(e.target.value)}
										className="flex-grow bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
										placeholder="Add a skill (e.g. React, Node.js)"
										onKeyDown={(e) =>
											e.key === "Enter" && e.preventDefault() && addSkill()
										}
									/>
									<button
										type="button"
										onClick={addSkill}
										className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-lg"
									>
										Add
									</button>
								</div>
								<div className="flex flex-wrap gap-2 mt-2">
									{skills.map((skill) => (
										<div
											key={skill}
											className="flex items-center bg-purple-800/50 text-purple-200 px-3 py-1 rounded-full text-sm"
										>
											{skill}
											<button
												type="button"
												onClick={() => removeSkill(skill)}
												className="ml-2 text-purple-300 hover:text-white"
											>
												<i className="pi pi-times" />
											</button>
										</div>
									))}
								</div>
							</div>

							<button
								type="submit"
								className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-purple-500/20 transition-all"
							>
								Complete Profile
							</button>
						</form>
					</div>
				)}

				<div className="px-6 py-4 text-center border-t border-white/10">
					{step === 1 ? (
						<div className="text-center text-gray-400">
							<div className="flex items-center justify-center mb-2">
								<input
									type="checkbox"
									id="newUser"
									checked={isNewUser}
									onChange={() => setIsNewUser(!isNewUser)}
									className="mr-2 accent-purple-500"
								/>
								<label htmlFor="newUser" className="text-gray-400 text-sm">
									I'm a new user
								</label>
							</div>
							Don't have an account?{" "}
							<Link
								to="/signup"
								className="text-purple-400 hover:text-purple-300"
							>
								Sign up
							</Link>
						</div>
					) : (
						<button
							type="button"
							onClick={() => setStep(1)}
							className="text-purple-400 hover:text-purple-300 text-sm"
						>
							<i className="pi pi-arrow-left mr-1" /> Back to login
						</button>
					)}
				</div>
			</div>
		</section>
	);
}
