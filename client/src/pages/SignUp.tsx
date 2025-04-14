import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { signup } = useAuth();
	const navigate = useNavigate();

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();

		// Form validation
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		setIsLoading(true);
		setError("");

		try {
			// Replace with your actual signup implementation
			await signup({ email, password, name });
			navigate("/home");
		} catch (err) {
			setError("Failed to create an account. Please try again.");
			console.error("Signup error:", err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleOAuthSignUp = (provider: string) => {
		// OAuth signup implementation
		const githubClientId =
			import.meta.env.GITHUB_CLIENT_ID || "your_github_client_id";
		const linkedinClientId =
			import.meta.env.LINKEDIN_CLIENT_ID || "your_linkedin_client_id";

		// Set the redirect URI
		const redirectUri = `${window.location.origin}/auth/callback`;

		// Build the authorization URL based on the provider
		let authUrl = "";

		if (provider === "github") {
			authUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:email`;
		} else if (provider === "linkedin") {
			authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedinClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=r_liteprofile%20r_emailaddress`;
		}

		// Store that this is a new user
		localStorage.setItem("isNewUser", "true");

		// Redirect to the authorization URL
		window.location.href = authUrl;
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

				<div className="space-y-6 p-6">
					<div className="text-center mb-6">
						<h2 className="text-xl font-medium text-white mb-2">
							Create Your Account
						</h2>
						<p className="text-gray-400 text-sm">
							Join and connect with your ideal hackathon teammates
						</p>
					</div>

					{error && (
						<div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
							{error}
						</div>
					)}

					<form onSubmit={handleSignUp} className="space-y-4">
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
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full bg-gray-800/80 border border-white/10 rounded-lg px-4 py-2.5 
                                     text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
								placeholder="Enter your full name"
							/>
						</div>

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
								placeholder="Create a password"
							/>
						</div>

						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-300 mb-1"
							>
								Confirm Password
							</label>
							<input
								id="confirmPassword"
								type="password"
								required
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="w-full bg-gray-800/80 border border-white/10 rounded-lg px-4 py-2.5 
                                     text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
								placeholder="Confirm your password"
							/>
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
									Creating Account...
								</span>
							) : (
								"Sign Up"
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
							onClick={() => handleOAuthSignUp("github")}
							className="w-full bg-gray-800/80 hover:bg-gray-700/80 duration-300 flex items-center justify-center gap-3 text-white py-2.5 px-4 rounded-lg
                                   border border-white/5 hover:border-white/10 transition-all
                                   shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
						>
							<i className="pi pi-github text-lg" />
							<span>Sign up with GitHub</span>
						</button>

						<button
							onClick={() => handleOAuthSignUp("linkedin")}
							className="w-full bg-blue-700/80 hover:bg-blue-600/80 duration-300 flex items-center justify-center gap-3 text-white py-2.5 px-4 rounded-lg
                                   border border-blue-500/30 hover:border-blue-500/50 transition-all
                                   shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
						>
							<i className="pi pi-linkedin text-lg" />
							<span>Sign up with LinkedIn</span>
						</button>
					</div>

					<div className="text-center text-gray-400 mt-6">
						Already have an account?{" "}
						<Link to="/login" className="text-purple-400 hover:text-purple-300">
							Sign in
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
