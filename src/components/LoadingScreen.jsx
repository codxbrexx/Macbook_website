import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => {
                gsap.to('.loading-screen', {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        if (onLoadingComplete) onLoadingComplete();
                    },
                });
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [progress, onLoadingComplete]);

    return (
        <div className="loading-screen fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
                {/* Apple Logo Animation */}
                <div className="mb-8 animate-pulse">
                    <svg
                        className="w-20 h-20 mx-auto text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                </div>

                {/* MacBook Pro Text */}
                <h1 className="text-white text-4xl font-semibold mb-8 tracking-tight">
                    MacBook Pro
                </h1>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>

                {/* Loading Text */}
                <p className="text-gray-400 mt-4 text-sm">
                    {progress < 100 ? 'Loading...' : 'Ready'}
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
