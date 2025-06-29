"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 p-4 shadow-md border-t-4 border-[#3dbc27] mt-2">
            <div className="max-w-screen-lg mx-auto grid grid grid-cols-5 items-start gap-4 p-4">
                <div className="col-span-1 flex justify-center items-center">
                    <img src="/favicon.png" 
                         alt="Comedy on the Loose" 
                         className="h-25 w-auto" />
                </div>
                <div className="col-span-2 mr-6">
                    <p className="text-3xl">About Us</p>
                    <p className="text-md text-gray-400 mt-2">
                    Comedy on the Loose, created by Dan and Cam in 2016, airs exclusively on Littleton Community Television and showcases their humorous journey from homemade videos to full-length, studio-produced episodes.
                    </p>
                </div>
                <div className="col-span-2">
                    <p className="text-3xl">Watch Us On</p>
                </div>
            </div>
            <div className="text-center mt-6">
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