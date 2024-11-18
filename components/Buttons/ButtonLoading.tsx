"use client";
import React, { useState } from 'react';

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate API call or action
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <button
      className={`bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${
        isLoading ? 'opacity-80 pointer-events-none' : ''
      }`}
      onClick={handleClick}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2"
            viewBox="0 0 24 24"
          >
            <circle
              className="fill-none stroke-white stroke-2"
              cx="12"
              cy="12"
              r="10"
            />
          </svg>
          Loading...
        </span>
      ) : (
        'Loading'
      )}
    </button>
  );
};

export default LoadingButton;