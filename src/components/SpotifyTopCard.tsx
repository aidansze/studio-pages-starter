export interface SpotifyCardProps {
  title: string;
  titleFontSize: "text-sm" | "text-base" | "text-lg" | "text-xl";
  titleFontWeight: "font-light" | "font-normal" | "font-semibold" | "font-bold";
  titleTextColor: "text-gray-900" | "text-white";
  features: string[];
  borderColor?: string;
}

const SpotifyCard = ({
  title,
  titleFontSize,
  titleFontWeight,
  titleTextColor,
  features,
  borderColor,
}: SpotifyCardProps) => {
    return (
        <div className="flex items-center justify-center">
            <div className={`w-5/6 max-w-screen-xl bg-black rounded-lg border border-4 border-${borderColor} overflow-auto`}>
                <div className="p-3">
                    <h5
                        className={`mb-2 ${titleFontSize} ${titleFontWeight} ${titleTextColor} text-center`}
                    >
                        {title}
                    </h5>
                </div>
                <div className="px-6 py-8 sm:p-10 h-1/5">
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
        </div>
      );
    };

export const initialProps: SpotifyCardProps = {
  title: "Title",
  titleFontSize: "text-xl",
  titleFontWeight: "font-bold",
  titleTextColor: "text-white",
  features: ["1 account", "Cancel anytime"],
  borderColor: "pink-400",
};

export default SpotifyCard;