import React from "react";

export interface Card3Props {
  image: string;
  title: string;
  subtitle: string;
  link: string;
  titleFontSize?: string;
  titleFontWeight?: string;
  subtitleFontSize?: string;
  subtitleFontWeight?: string;
  textColor?: string;
  imageStyle?: string;
}

export const initialProps: Card3Props = {
  image: "https://example.com/card-image.jpg",
  title: "Card Title",
  subtitle: "Card Subtitle",
  link: "#",
  titleFontSize: "text-lg",
  titleFontWeight: "font-medium",
  subtitleFontSize: "text-base",
  subtitleFontWeight: "font-normal",
  textColor: "text-black",
  imageStyle: "w-full",
};

const Card3 = ({
  image,
  title,
  subtitle,
  link,
  titleFontSize,
  titleFontWeight,
  subtitleFontSize,
  subtitleFontWeight,
  textColor,
  imageStyle,
}: Card3Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt="Card Image" className={`object-cover ${imageStyle}`} />
      <div className="px-6 py-4">
        <div className={`font-bold ${titleFontSize} ${titleFontWeight} ${textColor} mb-2`}>
          {title}
        </div>
        <p className={`text-gray-700 ${subtitleFontSize} ${subtitleFontWeight} ${textColor}`}>
          {subtitle}
        </p>
      </div>
      <div className="px-6 py-4">
        <a href={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Link
        </a>
      </div>
    </div>
  );
};

export default Card3;