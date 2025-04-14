import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import LoadingFallback from "./components/LoadingFallback";
import { useAuth } from "./context/AuthContext";

// Eager load components
import Hero from "./pages/Hero";

// Lazy load components to improve initial loading performance
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
const MatchesSearch = lazy(() => import("./pages/matchesSearch"));
const OAuthCallback = lazy(() => import("./pages/OAuthCallback"));

// Protected route wrapper component
const ProtectedRoute = () => {
	const { isAuthenticated, isLoading } = useAuth();

	if (isLoading) {
		return <LoadingFallback />;
	}

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// Auth layout wrapper (prevents authenticated users from accessing login/signup)
const AuthLayout = () => {
	const { isAuthenticated, isLoading } = useAuth();

	if (isLoading) {
		return <LoadingFallback />;
	}

	return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

// Root layout to handle conditional rendering of Hero vs HomePage
const RootLayout = () => {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? <Navigate to="/home" /> : <Hero />;
};

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
	},
	{
		element: <AuthLayout />,
		children: [
			{
				path: "/login",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<LoginPage />
					</Suspense>
				),
			},
			{
				path: "/signup",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<SignUpPage />
					</Suspense>
				),
			},
			// Keep the /auth route for backward compatibility
			{
				path: "/auth",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<LoginPage />
					</Suspense>
				),
			},
		],
	},
	{
		path: "/auth/callback",
		element: (
			<Suspense fallback={<LoadingFallback />}>
				<OAuthCallback />
			</Suspense>
		),
	},
	{
		element: <ProtectedRoute />,
		children: [
			{
				path: "/home",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: "/search",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<MatchesSearch />
					</Suspense>
				),
			},
			{
				path: "/profile",
				// Redirect to home for now, but you can create a profile page later
				element: <Navigate to="/home" />,
			},
		],
	},
	// This specially handles the * route to check auth state
	{
		path: "*",
		element: <AuthStateRouter />,
	},
]);

// Component to handle catch-all routes based on auth state
function AuthStateRouter() {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />;
}

export default router;
