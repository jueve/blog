import React from "react";

interface ImageSet {
  src: string;
  alt: string;
  caption: string;
}

export function ImageWithCaption(imageSet: ImageSet): JSX.Element {
  return (
    <div className="mt-6 flex justify-center">
      <div className="">
        <img src={imageSet.src} alt={imageSet.alt} />
        <p className="mt-1 text-gray-600 text-center">{imageSet.caption}</p>
      </div>
    </div>
  );
}
