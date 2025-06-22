import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper to determine if mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <header className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Hamburger */}
                    <div className="flex items-center">
                        <a
                            href="#home"
                            className="flex items-center cursor-pointer ml-2 select-none group"
                            style={{ textDecoration: 'none' }}
                            onClick={e => {
                                if (window.innerWidth < 768) {
                                    e.preventDefault();
                                    setIsMenuOpen(v => !v);
                                }
                                // else, allow default anchor scroll
                            }}
                        >
                            {isMenuOpen && isMobile ? (
                                // Close icon on mobile when menu is open
                                <svg
                                    className="w-9 h-9 text-blue-600 translate-y-[4.5px] group-hover:text-blue-700 transition-colors duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    style={{ display: 'block' }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon otherwise
                                <svg
                                    className="w-9 h-9 text-blue-600 translate-y-[4.5px] group-hover:text-blue-700 transition-colors duration-200"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    style={{ display: 'block' }}
                                >
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            )}
                            <span className="text-2xl font-bold text-blue-600 select-none leading-none ml-1">
                                Tumor Tracer
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer">
                            Home
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer">
                            About
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer">
                            Contact
                        </a>
                        <a
                            href="https://github.com/ItsEragon/OncoType"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center cursor-pointer"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                    </nav>

                    {/* Mobile Navigation */}
                    <div
                        className={`md:hidden absolute left-1/2 top-16 transition-all duration-300 ease-in-out z-[60] ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}
                        style={{ width: '80vw', transform: 'translateX(-50%)' }}
                    >
                        <div className="flex flex-col items-center bg-white border rounded-2xl py-4 space-y-2 shadow-lg w-full">
                            <a href="#home" className="w-full max-w-xs mx-auto text-center text-gray-700 hover:text-blue-600 block px-6 py-3 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </a>
                            <a href="#about" className="w-full max-w-xs mx-auto text-center text-gray-700 hover:text-blue-600 block px-6 py-3 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                About
                            </a>
                            <a href="#contact" className="w-full max-w-xs mx-auto text-center text-gray-700 hover:text-blue-600 block px-6 py-3 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </a>
                            <a
                                href="https://github.com/ItsEragon/OncoType"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="max-w-[100px] text-center bg-gray-800 text-white block px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200 mt-2 flex items-center justify-center cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 