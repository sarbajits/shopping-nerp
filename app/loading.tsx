export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
                <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
            </div>
        </div>
    );
}