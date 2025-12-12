import React, { useId } from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const maskId = useId();
  
  // Triangle path optimized to fit 0-100 viewbox with concentric strokes
  const path = "M50 32 L66 60 L34 60 Z";

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Convene Logo"
    >
      <mask id={maskId}>
        <rect width="100" height="100" fill="black" />
        <path d={path} stroke="white" strokeWidth="64" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path} stroke="black" strokeWidth="56" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path} stroke="white" strokeWidth="48" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path} stroke="black" strokeWidth="40" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path} stroke="white" strokeWidth="32" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path} stroke="black" strokeWidth="24" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path} stroke="white" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" />
        <path d={path} stroke="black" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
      </mask>
      <rect width="100" height="100" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
};