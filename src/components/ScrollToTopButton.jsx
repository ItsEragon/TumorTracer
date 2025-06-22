import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user is 300px from bottom
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.body.offsetHeight - 300;
            setVisible(scrollPosition >= threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return visible ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
            aria-label="Scroll to top"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    ) : null;
};

export default ScrollToTopButton; 