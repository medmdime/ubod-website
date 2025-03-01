import React from "react";

interface PhoneFrameProps {
  imageUrl: string;
  alt: string;
}

const PhoneFrame = ({ imageUrl, alt }: PhoneFrameProps) => {
  return (
    <div className="relative max-w-[1000px] mx-auto">
      <img src={imageUrl} alt={alt} className="rounded-[2rem] w-full" />
    </div>
  );
};

export default PhoneFrame;
