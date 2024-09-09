'use client'

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Dynamically import ReactPlayer to disable SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoComponentProps {
    videoSrc: string;
    demoname: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSrc, demoname }) => {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Set isMounted to true once the component is mounted on the client
        setIsMounted(true);
    }, []);

    const handleShopNowClick = () => {
        router.push('/shop');
    };

    if (!isMounted) {
        // Prevent rendering on the server side (SSR)
        return null;
    }

    return (
        <div className="relative flex items-center justify-center w-auto h-[750px] overflow-hidden mt-0">
            {/* ReactPlayer component */}
            <ReactPlayer
                url={videoSrc}
                className="absolute top-0 left-0 w-full h-full object-cover"
                playing
                muted
                loop
                width="100%"
                height="100%"
            />

            {/* Overlay content with blurred background */}
            <div className="relative z-10 text-left text-white ml-10 p-6 backdrop-blur-lg bg-white/30 rounded-lg">
                {/* Demoname */}
                <h2 className="text-4xl font-bold mb-4">{demoname}</h2>

                {/* Shop Now button */}
                <button
                    className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleShopNowClick}
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default VideoComponent;
