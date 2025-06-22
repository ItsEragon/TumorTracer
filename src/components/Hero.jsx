import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center sm:text-left px-2 sm:px-0 max-w-xl mx-auto lg:mx-0">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Advanced{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Brain Tumor
                                </span>{' '}
                                Detection
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Leveraging cutting-edge AI technology to provide accurate and rapid brain tumor detection from MRI scans.
                                Get instant results with our state-of-the-art machine learning model.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                                onClick={() => {
                                    const el = document.getElementById('detection');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Start Detection
                            </button>
                            <button
                                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
                                onClick={() => {
                                    const el = document.getElementById('about');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Learn More
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">99%</div>
                                <div className="text-sm text-gray-600">Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">&lt;30s</div>
                                <div className="text-sm text-gray-600">Processing Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">24/7</div>
                                <div className="text-sm text-gray-600">Availability</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Illustration */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6">
                                    <div className="flex items-center justify-center mb-4">
                                        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                                        AI-Powered Analysis
                                    </h3>
                                    <p className="text-gray-600 text-center text-sm">
                                        Upload your MRI scan and get instant, accurate results
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
                        <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-200 rounded-full opacity-50"></div>
                    </div>
                </div>

                {/* Wave decoration */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero; 