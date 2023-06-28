import React from 'react';

export interface ProductImage2Props {
  src: string;
  alt: string;
  widthFraction: "1/5" | "1/4" | "1/3" | "1/2" | "3/5" | "2/3" | "3/4" | "4/5" | "full";
}

export const initialProps: ProductImage2Props = {
  src: "https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280",
  alt: "Light green backpack with black canvas straps and front zipper pouch.",
  widthFraction: "1/2",
};

export default function ProductImage2({ src, alt, widthFraction }: ProductImage2Props) {
  return (
    <div className="col-start-2 row-span-2 self-center">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          className={`h-full w-${widthFraction} object-cover object-center`}
        />
      </div>
    </div>
  );
}
