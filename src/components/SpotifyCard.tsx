import * as React from "react";
import SpotifyButton, { SpotifyButtonProps } from './SpotifyButton';


export interface SpotifyCardProps {
  title: string;
  titleFontSize: "text-sm" | "text-base" | "text-lg" | "text-xl";
  titleFontWeight: "font-light" | "font-normal" | "font-semibold" | "font-bold";
  titleTextColor: "text-gray-900" | "text-white";
  subtitle: string;
  subtitleFontSize: "text-xs" | "text-sm" | "text-base";
  subtitleFontWeight: "font-light" | "font-normal" | "font-semibold";
  subtitleTextColor: "text-gray-700" | "text-gray-400" | "text-white";
  subtitleLink?: string;
  features: string[];
  price?:string;
  SpotifyButtonProps: SpotifyButtonProps;
  borderColor?: string;
}

const SpotifyCard = ({
  title,
  titleFontSize,
  titleFontWeight,
  titleTextColor,
  subtitle,
  subtitleFontSize,
  subtitleFontWeight,
  subtitleTextColor,
  subtitleLink,
  features,
  price,
  borderColor,
  SpotifyButtonProps
}: SpotifyCardProps) => {
  return (
    <div className="centered-container h-full">
        <div className={`h-full max-w-sm bg-black rounded-lg border border-4 border-${borderColor} dark:bg-gray-800`}>
            <div className="p-5">
                <div className="grid grid-cols-6 gap-2">
                        <div className="col-start-1 col-span-3">
                            <h5
                                className={`mb-2 ${titleFontSize} ${titleFontWeight} ${titleTextColor}`}
                            >
                                {title}
                            </h5>
                        </div>
                        <div className="col-start-5 col-span-2">
                            <div className="grid grid-rows-3">
                                <div className="row-span-2 gap-0">
                                    <p className="text-white text-xl font-bold">{`$ ${price}`}</p>
                                </div>
                                <div className="row-span-1">
                                    <p className="text-white text-xs">/ MONTH</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="px-6 py-8 sm:p-10 h-1/2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="h-6 flex items-center sm:h-7">
                                <svg
                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                                        />
                                </svg>
                            </span>
                            <p className="ml-2 text-sm text-white">{feature}</p>
                        </li>
                    ))}
                </div>
            </div>
            <div className="object-none object-bottom">
                <div className="text-center">
                    <SpotifyButton {...SpotifyButtonProps} /> 
                </div>
                <div className="text-center">
                    <a href={subtitleLink}
                        className={`underline mb-3 ${subtitleFontSize} ${subtitleFontWeight} ${subtitleTextColor}`}
                        >
                        {subtitle}
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export const initialProps: SpotifyCardProps = {
  title: "External Asset Fetched at Build Time",
  titleFontSize: "text-xl",
  titleFontWeight: "font-bold",
  titleTextColor: "text-white",
  subtitle: "External Link",
  subtitleFontSize: "text-xs",
  subtitleFontWeight: "font-normal",
  subtitleTextColor: "text-white",
  subtitleLink: "",
  features: ["1 account", "Cancel anytime"],
  borderColor: "pink-400",
  SpotifyButtonProps: {
    buttonText: "Sign Up",
    fontWeight: "font-normal",
    bgColor: "bg-blue-500",
    paddingX: 'px-4',
    paddingY: 'py-2',
  },
};

export default SpotifyCard;