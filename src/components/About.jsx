import React from 'react';

const About = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
            ),
            title: "Lightning Fast",
            description: "Get results in under 10 seconds with our optimized AI model"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "High Accuracy",
            description: "75% accuracy rate with advanced deep learning algorithms"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            ),
            title: "Segmentation Analysis",
            description: "Brain tumor segmentation with precise boundary detection"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Easy to Use",
            description: "Simple drag-and-drop interface for seamless user experience"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
            ),
            title: "Secure & Private",
            description: "Your data is processed securely and never stored permanently"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            ),
            title: "24/7 Availability",
            description: "Access our service anytime, anywhere with cloud-based processing"
        }
    ];

    return (
        <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center px-2 sm:px-0 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About Tumor Tracer
                    </h2>
                    <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        We're trying to revolutionize brain tumor detection with cutting-edge artificial intelligence technology,
                        providing healthcare professionals and patients with rapid, accurate, and reliable diagnostic support.
                    </p>
                </div>

                {/* Technology Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6 text-center sm:text-left px-2 sm:px-0">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Advanced AI Technology
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Our system utilizes state-of-the-art deep learning model trained on extensive datasets of brain MRI scans.
                            The AI can detect brain tumor with exceptional accuracy, providing segmentation
                            and analysis in real-time.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Built on the latest computer vision and medical imaging techniques, our model continuously learns and
                            improves to provide the most accurate results possible for early detection and diagnosis.
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
                            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                                Deep Learning
                            </div>
                            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                                Computer Vision
                            </div>
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-2">
                                Medical AI
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                                        <div className="text-sm text-gray-600">Accuracy</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600 mb-2">&lt;10s</div>
                                        <div className="text-sm text-gray-600">Processing</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-600 mb-2">4K+</div>
                                        <div className="text-sm text-gray-600">Scans</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                                        <div className="text-sm text-gray-600">Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 text-center sm:text-left px-2 sm:px-0 mb-12">
                        Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center sm:text-left mx-auto sm:mx-0 max-w-md">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 mx-auto sm:mx-0">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Our Mission
                        </h3>
                        <p className="text-lg opacity-90 max-w-3xl mx-auto">
                            To democratize access to advanced medical imaging technology, making early brain tumor detection
                            accessible to healthcare providers worldwide, ultimately saving lives through timely diagnosis and intervention.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 