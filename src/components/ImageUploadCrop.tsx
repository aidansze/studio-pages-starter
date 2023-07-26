import React, { useState } from "react";

export interface ImageUploadCropProps {
  imageUrl: string;
  width: number;
  height: number;
  size: string;
}

const ImageUploadCrop = ({
  imageUrl,
  width,
  height,
  size,
}: ImageUploadCropProps) => {
  const [cropWidth, setCropWidth] = useState(width);
  const [cropHeight, setCropHeight] = useState(height);

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCropWidth(Number(event.target.value));
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCropHeight(Number(event.target.value));
  };

  return (
    <div className={`w-${cropWidth} h-${cropHeight} ${size}`}>
      <img src={imageUrl} alt="Uploaded Image" className="object-cover w-full h-full" />
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">
          Width:
          <input
            type="number"
            value={cropWidth}
            onChange={handleWidthChange}
            className="ml-2 w-16 px-2 py-1 border border-gray-300 rounded-md"
          />
        </label>
      </div>
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">
          Height:
          <input
            type="number"
            value={cropHeight}
            onChange={handleHeightChange}
            className="ml-2 w-16 px-2 py-1 border border-gray-300 rounded-md"
          />
        </label>
      </div>
    </div>
  );
};

const initialProps: ImageUploadCropProps = {
  imageUrl: "",
  width: 300,
  height: 200,
  size: "w-full h-full",
};

export { ImageUploadCropProps, initialProps };
export default ImageUploadCrop;