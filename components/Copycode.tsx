"use client";

import React, { useState, useRef } from 'react';

interface CopyButtonProps {
  code: string;
  className?: string; // Added optional className prop
}

const CopyButton: React.FC<CopyButtonProps> = ({ code, className = '' }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const handleCopy = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={className}> 
      <p ref={textRef} className="hidden">
        {code}
      </p>
      <button className={`underline ${className}`} onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyButton;