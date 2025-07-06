export default function Page401() {
	return (
		<div className="error-page flex flex-col items-center justify-center min-h-dvh text-center h-screen overflow-hidden">
			<h1 className="text-4xl font-bold">401 - Unauthorized</h1>
			<p className="text-lg mt-4">You must be logged in to access this page.</p>
		</div>
	);
}
