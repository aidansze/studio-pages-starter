import React from "react";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  titleFontSize?: string;
  titleFontWeight?: string;
  subtitleFontSize?: string;
  subtitleFontWeight?: string;
  textColor?: string;
  imageSize?: string;
  imageStyle?: string;
}

export const initialProps: HeroProps = {
  title: "Hero Title",
  subtitle: "Hero Subtitle",
  image: "https://example.com/hero-image.jpg",
  titleFontSize: "2xl",
  titleFontWeight: "normal",
  subtitleFontSize: "xl",
  subtitleFontWeight: "normal",
  textColor: "black",
  imageSize: "full",
  imageStyle: "",
};

const Hero = ({
  title,
  subtitle,
  image,
  titleFontSize,
  titleFontWeight,
  subtitleFontSize,
  subtitleFontWeight,
  textColor,
  imageSize,
  imageStyle,
}: HeroProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`text-${titleFontSize} font-${titleFontWeight} text-${textColor} mb-4`}
      >
        {title}
      </h1>
      <p
        className={`text-${subtitleFontSize} font-${subtitleFontWeight} text-${textColor} mb-8`}
      >
        {subtitle}
      </p>
      <img
        src={image}
        alt="Hero Image"
        className={`w-${imageSize} ${imageStyle}`}
      />
    </div>
  );
};

export default Hero;