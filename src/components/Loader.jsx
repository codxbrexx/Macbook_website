const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white text-lg">Loading MacBook Experience...</p>
            </div>
        </div>
    )
}

export default Loader
