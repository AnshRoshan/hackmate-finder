import { useEffect, useState } from "react";

function LoadingFallback({
	message = "Please wait while we prepare your experience",
}: { message?: string }) {
	const [loadingDots, setLoadingDots] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setLoadingDots((prev) => (prev.length < 3 ? `${prev}.` : ""));
		}, 400);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
			<div className="flex flex-col items-center">
				<div className="w-16 h-16 border-t-4 border-b-4 border-purple-500 rounded-full animate-spin" />
				<p className="mt-4 text-xl font-semibold text-purple-400">
					Loading{loadingDots}
				</p>
				<p className="mt-2 text-sm text-gray-400">{message}</p>
			</div>
		</div>
	);
}

export default LoadingFallback;
