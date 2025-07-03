import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="flex flex-col items-center justify-center gap-4 mt-6">
                <div className="flex items-center mb-2">
                    <a href="#home" className="flex items-center mt-6 cursor-pointer select-none group" style={{ textDecoration: 'none' }}>
                        <svg className="w-9 h-9 translate-y-[4.5px] text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-2xl font-bold text-blue-400 ml-2">Tumor Tracer</span>
                    </a>
                </div>
                <p className="text-gray-300 mb-2 text-center max-w-xl">
                    We're trying to revolutionize brain tumor detection with cutting-edge AI technology. Providing healthcare professionals with rapid, accurate, and reliable diagnostic support.
                </p>
            </div>
            {/* Bottom Bar */}
            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                <div className="text-gray-400 pb-6 text-sm">
                    Copyright © {currentYear} Tumor Tracer - All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer; 