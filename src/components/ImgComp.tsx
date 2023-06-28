import React from 'react';

export type picInfo = {
    caption: string;
    hiddenCaption: string;
  };

export interface ImgCompProps {
    url?: string;
    alt: string;
    widthPct: number;
    border: "rounded-full" | "rounded-lg" | "rounded";
    padding: number;
    picInfo?: picInfo;
}

export const initialProps: ImgCompProps = {
    alt: "your image here",
    widthPct: 50,
    border: "rounded",
    padding: 0,
};

const ImgComp = ({ picInfo, url, alt, widthPct, border, padding }: ImgCompProps) => {
    return (
        <div className={`${border} place-self-auto`}>
            <img
            alt={alt}
            src={url}
            width={`${widthPct}%`}
            className={`${border} place-self-auto shadow-none hover:shadow-x2l p-${padding}`}

            />
            <h1>{picInfo?.caption}</h1>
        </div>

    );
};

export default ImgComp;