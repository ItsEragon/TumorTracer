import React, { useState, useRef } from 'react';

const DetectionSection = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFile = (selectedFile) => {
        if (selectedFile.type.startsWith('image/')) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onload = (e) => setPreview(e.target.result);
            reader.readAsDataURL(selectedFile);
        } else {
            alert('Please select an image file');
        }
    };

    const handleFileInput = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("https://itseragon-brain-tumor-api.hf.space/predict/", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            setResult(data);
        } catch (err) {
            alert("Something went wrong! Please try again.");
            console.error(err);
        }
        setLoading(false);
    };

    const resetForm = () => {
        setFile(null);
        setPreview(null);
        setResult(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <section id="detection" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Brain Tumor Detection
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Upload your MRI scan and get instant AI-powered analysis with results and segmentation
                    </p>
                </div>

                <div className="flex flex-col gap-10 items-center max-w-2xl mx-auto">
                    {/* Upload Section */}
                    <div className="space-y-6 w-full">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                                Upload MRI Scan
                            </h3>

                            {/* Drag & Drop Area */}
                            <div
                                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${dragActive
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-300 hover:border-blue-400'
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <div className="space-y-4">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <p className="text-lg font-medium text-gray-900">
                                            Drop your MRI scan here
                                        </p>
                                        <p className="text-gray-500">or click to browse</p>
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileInput}
                                        className="hidden"
                                    />
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                                    >
                                        Choose File
                                    </button>
                                </div>
                            </div>

                            {/* File Info */}
                            {file && (
                                <div className="mt-6 bg-white rounded-lg p-4 border">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <div>
                                                <p className="font-medium text-gray-900">{file.name}</p>
                                                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={resetForm}
                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Analyze Button */}
                            <button
                                onClick={handleUpload}
                                disabled={!file || loading}
                                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Analyzing...
                                    </div>
                                ) : (
                                    'Analyze MRI Scan'
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6 w-full">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                                Analysis Results
                            </h3>

                            {!result && !preview && (
                                <div className="text-center py-12">
                                    <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p className="mt-4 text-gray-500">Upload an MRI scan to see results</p>
                                </div>
                            )}

                            {result && (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        {/* Original Image */}
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">Original Image</h4>
                                            <div className="bg-white rounded-lg p-4 border flex items-center justify-center min-h-[200px]">
                                                <img
                                                    src={preview}
                                                    alt="Input MRI"
                                                    className="w-full h-48 object-contain rounded"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500 mt-2 text-center">Input MRI</p>
                                        </div>
                                        {/* Segmented Tumor */}
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">Segmented Tumor</h4>
                                            <div className="bg-white rounded-lg p-4 border flex items-center justify-center min-h-[200px]">
                                                {result.mask ? (
                                                    <img
                                                        src={`data:image/png;base64,${result.mask}`}
                                                        alt="Predicted Tumor Mask"
                                                        className="w-full h-48 object-contain rounded bg-black"
                                                    />
                                                ) : (
                                                    <span className="text-gray-400">No mask available</span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-2 text-center">Predicted Tumor Mask</p>
                                        </div>
                                    </div>

                                    {/* Tumor Region Percentage (only if tumor detected) */}
                                    {result.tumor && typeof result.tumor_coverage_percent === 'number' && (
                                        <div className="mb-6 text-center">
                                            <span className="text-gray-700 text-base md:text-lg">
                                                Detected tumor region covers approximately <span className="font-semibold">{result.tumor_coverage_percent.toFixed(2)}%</span> of the image
                                            </span>
                                        </div>
                                    )}

                                    {/* Overlay Visualization (only if tumor detected) */}
                                    {result.tumor && result.overlay && (
                                        <div className="mb-8">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">Overlay Visualization</h4>
                                            <div className="bg-white rounded-lg p-4 border flex items-center justify-center min-h-[200px]">
                                                <img
                                                    src={`data:image/png;base64,${result.overlay}`}
                                                    alt="Tumor Overlay"
                                                    className="w-full h-72 object-contain rounded"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500 mt-2 text-center">Tumor Overlay</p>
                                        </div>
                                    )}

                                    {/* Detection Result */}
                                    <div className="bg-white rounded-lg p-6 border mb-6">
                                        <h4 className="text-lg font-medium text-gray-900 mb-4">Detection Result</h4>
                                        <div className="flex items-center space-x-3">
                                            {result.tumor ? (
                                                <>
                                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-xl font-semibold text-red-600">Tumor Detected</p>
                                                        <p className="text-gray-600">Please consult with a medical professional</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-xl font-semibold text-green-600">No Tumor Detected</p>
                                                        <p className="text-gray-600">Scan appears normal</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetectionSection; 