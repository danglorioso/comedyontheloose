"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 p-4 shadow-md border-t-4 border-[#3dbc27]">
            <div className="max-w-screen-xl mx-auto grid grid grid-cols-5 items-start gap-10 p-4">
                <div className="col-span-1 flex justify-end items-end">
                    <img src="/favicon.png" 
                         alt="Comedy on the Loose" 
                         className="h-25 w-auto" />
                </div>
                <div className="col-span-2">
                    <p className="text-3xl">About Us</p>
                    <p className="text-md text-gray-400 mt-2">
                    Comedy on the Loose, created by Dan and Cam in 2016, airs exclusively on Littleton Community Television and showcases their humorous journey from homemade videos to full-length, studio-produced episodes.
                    </p>
                </div>
                <div className="col-span-2">
                    <p className="text-3xl">Watch Us On</p>
                    <div className="flex flex-row items-end gap-10 mt-2">
                        <a
                            href="https://cloud.castus.tv/vod/littleton/video/64025b373e11cd0008700758?page=HOME&type=live"
                            target="_blank" // Open in new tab
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-slate-200 transition-colors duration-300"
                        >
                            <img src="/lctv.png" 
                                alt="Comedy on the Loose" 
                                className="h-22 w-auto" />
                        </a>
                        <a
                            href="https://www.youtube.com/@comedyontheloose"
                            target="_blank" // Open in new tab
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-slate-200 transition-colors duration-300"
                        >
                            <img src="/yt.png" 
                                alt="Comedy on the Loose" 
                                className="h-22 pb-2 pt-10 w-auto" /> 
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6">
                <p className="mb-2 text-md text-slate-300 leading-tight">
                    Website created by{" "}
                    <a
                    href="https://danglorioso.com"
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-slate-200 transition-colors duration-300"
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