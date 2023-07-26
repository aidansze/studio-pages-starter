import * as React from "react";

export interface CardProps {
  title: string;
  titleFontSize: "text-sm" | "text-base" | "text-lg" | "text-xl";
  titleFontWeight: "font-light" | "font-normal" | "font-semibold" | "font-bold";
  titleTextColor: "text-gray-900" | "text-white";
  subtitle: string;
  subtitleFontSize: "text-xs" | "text-sm" | "text-base";
  subtitleFontWeight: "font-light" | "font-normal" | "font-semibold";
  subtitleTextColor: "text-gray-700" | "text-gray-400";
  url: string;
}

const Card = ({
  title,
  titleFontSize,
  titleFontWeight,
  titleTextColor,
  subtitle,
  subtitleFontSize,
  subtitleFontWeight,
  subtitleTextColor,
  url,
}: CardProps) => {
  return (
    <>
      <div className="centered-container">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5
                className={`mb-2 ${titleFontSize} ${titleFontWeight} ${titleTextColor}`}
              >
                {title}
              </h5>
            </a>
            <p
              className={`mb-3 ${subtitleFontSize} ${subtitleFontWeight} ${subtitleTextColor}`}
            >
              {subtitle}
            </p>
          </div>
          <div>
            <img className="rounded-t-lg" src={url} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export const initialProps: CardProps = {
  title: "External Asset Fetched at Build Time",
  titleFontSize: "text-xl",
  titleFontWeight: "font-bold",
  titleTextColor: "text-gray-900",
  subtitle: "Default subtitle",
  subtitleFontSize: "text-base",
  subtitleFontWeight: "font-normal",
  subtitleTextColor: "text-gray-700",
  url: "",
};

export default Card;