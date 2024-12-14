import React from 'react';

interface PhoneFrameProps {
  imageUrl: string;
  alt: string;
}

const PhoneFrame = ({ imageUrl, alt }: PhoneFrameProps) => {
  return (
    <div className="relative max-w-[300px] mx-auto">
      <div className="absolute inset-0 bg-darkBrown/5 rounded-[3rem] transform rotate-3"></div>
      <div className="relative bg-darkBg rounded-[2.5rem] p-3 shadow-xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-darkBg rounded-b-2xl"></div>
        <img 
          src={imageUrl} 
          alt={alt}
          className="rounded-[2rem] w-full"
        />
      </div>
    </div>
  );
};

export default PhoneFrame;