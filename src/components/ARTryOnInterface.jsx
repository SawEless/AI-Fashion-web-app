import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, X, Check, RotateCcw, Download, Heart } from 'lucide-react';
import { useExperienceStore } from '../store';

const ARTryOnInterface = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showOutfitSelector, setShowOutfitSelector] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { arState, updateARState, captureARImage } = useExperienceStore();

  const outfits = [
    {
      id: 1,
      name: 'Casual Summer Dress',
      category: 'Dress',
      color: 'Blue Floral',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop',
      style: 'casual'
    },
    {
      id: 2,
      name: 'Professional Blazer',
      category: 'Blazer',
      color: 'Navy',
      price: '$129.99',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop',
      style: 'professional'
    },
    {
      id: 3,
      name: 'Evening Gown',
      category: 'Gown',
      color: 'Black',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop',
      style: 'formal'
    },
    {
      id: 4,
      name: 'Street Style Jacket',
      category: 'Jacket',
      color: 'Leather',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
      style: 'street'
    }
  ];

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
        updateARState({ isActive: true });
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      // Fallback to mock camera for demo
      setIsCameraActive(true);
    }
  }, [updateARState]);

  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsCameraActive(false);
    updateARState({ isActive: false });
  }, [updateARState]);

  const captureImage = useCallback(() => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const imageData = canvas.toDataURL('image/jpeg');
      setCapturedImage(imageData);
      captureARImage({ data: imageData, timestamp: new Date() });
      stopCamera();
    }
  }, [stopCamera, captureARImage]);

  const handleOutfitSelect = (outfit) => {
    setSelectedOutfit(outfit);
    setShowOutfitSelector(false);
    setIsProcessing(true);
    
    // Simulate AR processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  const resetTryOn = () => {
    setCapturedImage(null);
    setSelectedOutfit(null);
    setIsProcessing(false);
  };

  const saveOutfit = () => {
    if (selectedOutfit && capturedImage) {
      // Save to wishlist or favorites
      console.log('Saving outfit:', selectedOutfit);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* AR Try-On Header */}
      <div className="glass-fashion rounded-t-2xl p-6 border-b border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center neon-glow-classic">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">AR Try-On</h3>
              <p className="text-slate-600">Virtual fitting room experience</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            {!isCameraActive && !capturedImage && (
              <button
                onClick={startCamera}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Camera className="w-4 h-4" />
                <span>Start Camera</span>
              </button>
            )}
            
            {capturedImage && (
              <button
                onClick={resetTryOn}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Camera/Image Display */}
          <div className="space-y-4">
            {!capturedImage ? (
              <div className="relative bg-slate-100 rounded-2xl overflow-hidden h-96">
                {isCameraActive ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 text-white px-4 py-2 rounded-lg">
                        Position yourself in the frame
                      </div>
                    </div>
                    <button
                      onClick={captureImage}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-500">
                    <Camera className="w-16 h-16 mb-4" />
                    <p className="text-lg font-medium">Camera not active</p>
                    <p className="text-sm">Click "Start Camera" to begin</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                {selectedOutfit && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{selectedOutfit.name}</h4>
                      <p className="text-sm opacity-90">{selectedOutfit.color} • {selectedOutfit.price}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Hidden canvas for image capture */}
            <canvas ref={canvasRef} className="hidden" />
          </div>

          {/* Outfit Selection & Controls */}
          <div className="space-y-6">
            {!capturedImage ? (
              <div className="glass-fashion rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow-classic">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Try On?</h3>
                <p className="text-slate-600 mb-4">
                  First, take a photo of yourself to get started with the AR try-on experience.
                </p>
                <button
                  onClick={startCamera}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Camera className="w-4 h-4" />
                  <span>Start Camera</span>
                </button>
              </div>
            ) : (
              <>
                {/* Outfit Selection */}
                <div className="glass-fashion rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">Choose an Outfit</h3>
                    <button
                      onClick={() => setShowOutfitSelector(!showOutfitSelector)}
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                    >
                      {showOutfitSelector ? <X className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
                    </button>
                  </div>

                  {selectedOutfit ? (
                    <div className="text-center">
                      <img
                        src={selectedOutfit.image}
                        alt={selectedOutfit.name}
                        className="w-32 h-40 object-cover rounded-xl mx-auto mb-4"
                      />
                      <h4 className="font-semibold text-slate-800 mb-2">{selectedOutfit.name}</h4>
                      <p className="text-sm text-slate-600 mb-4">{selectedOutfit.color} • {selectedOutfit.price}</p>
                      
                      {isProcessing ? (
                        <div className="flex items-center justify-center space-x-2 text-slate-600">
                          <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
                          <span>Processing AR overlay...</span>
                        </div>
                      ) : (
                        <div className="flex space-x-3 justify-center">
                          <button
                            onClick={saveOutfit}
                            className="btn-secondary inline-flex items-center space-x-2"
                          >
                            <Heart className="w-4 h-4" />
                            <span>Save</span>
                          </button>
                          <button
                            onClick={() => setSelectedOutfit(null)}
                            className="btn-primary inline-flex items-center space-x-2"
                          >
                            <Check className="w-4 h-4" />
                            <span>Try Another</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-slate-600 mb-4">Select an outfit to try on virtually</p>
                      <button
                        onClick={() => setShowOutfitSelector(true)}
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Browse Outfits</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Outfit Grid */}
                <AnimatePresence>
                  {showOutfitSelector && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="glass-fashion rounded-2xl p-6"
                    >
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Available Outfits</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {outfits.map((outfit) => (
                          <motion.div
                            key={outfit.id}
                            className="cursor-pointer group"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleOutfitSelect(outfit)}
                          >
                            <div className="relative overflow-hidden rounded-xl">
                              <img
                                src={outfit.image}
                                alt={outfit.name}
                                className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="mt-2 text-center">
                              <p className="text-sm font-medium text-slate-800">{outfit.name}</p>
                              <p className="text-xs text-slate-600">{outfit.price}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARTryOnInterface;
