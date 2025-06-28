"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 p-4 shadow-md border-t-4 border-[#3dbc27] mt-2">
            <div className="max-w-screen-lg px-15 mx-auto flex gap-4 p-4">
                <div className="basic-">
                    <div className="text-2xl font-bold text-[#3dbc27]">
                        <img src="/favicon.png" alt="Comedy on the Loose" className="h-22 w-auto" />
                    </div>
                </div>
                <div className="basic-lg">
                    <p className="text-4xl">
                        About Us
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        Comedy on the Loose, created by Dan and Cam in 2016 and airing exclusively on Littleton Community Television, showcases their humorous journey from homemade videos to full-length episodes.
                    </p>
                </div>
                <div className="basic-lg">Column 3</div>
                            
                
                
                
                {/* <div className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Comedy on the Loose. All rights reserved.
                </div>
                <div className="text-sm text-gray-600">
                    Follow us on{" "}
                    <a href="https://www.youtube.com/@comedyontheloose" target="_blank" rel="noopener noreferrer" className="text-[#3dbc27] hover:underline">
                        YouTube
                    </a>
                </div> */}
            </div>
            <div className="text-center mt-4">
                <p className="mb-2 text-md text-slate-300 leading-tight">
                    Website created by{" "}
                    <a
                    href="https://danglorioso.com"
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-200 transition-colors duration-300"
                    >
                    Dan Glorioso
                    </a>
                    .
                </p>
                <p className="text-md text-neutral-300 leading-tight">
                    Copyright © {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}