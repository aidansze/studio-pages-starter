import React from 'react';

export type picInfo = {
    caption: string;
    hiddenCaption: string;
  };

export interface ImgCompProps {
    url: string;
    alt: string;
    contWidth: number;
    contHeight: number;
    picWidth: number;
    picHeight: number;
    border: "rounded-full" | "rounded-lg" | "rounded";
    padding: number;
    blur?: "blur-none" | "blur-sm" | "blur" | "blur-lg";
    filter?: "filter grayscale" | "" | "filter sepia" | "filter invert";
    imgCrop: "object-contain" | "object-cover" | "object-fill";
    dropShadow?: "drop-shadow" | "drop-shadow-2xl" | "drop-shadow-none"; 
}

export const initialProps: ImgCompProps = {
    alt: "your image here",
    url: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
    contWidth: 96,
    contHeight: 96,
    picWidth: 96,
    picHeight: 96,
    border: "rounded",
    padding: 0,  
    imgCrop: "object-cover",
};

const ImgComp = ({ imgCrop, dropShadow, filter, blur, url, alt, contWidth, picWidth, contHeight, picHeight, border, padding }: ImgCompProps) => {
    return (
        <div className={`w-${contWidth} h-${contHeight}`}>
                <img
                alt={alt}
                src={url}
                // width={`${widthPct}%`}
                className={`w-${picWidth} h-${picHeight} ${border} ${imgCrop} ${blur} ${filter} p-${padding} ${dropShadow}`}

                />
        </div>
    );
};

export default ImgComp;