
export interface SpotifyButtonProps {
    buttonText?: string;
    fontWeight?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
    bgColor?: string;
    paddingX?: 'px-1' | 'px-2' | 'px-3' | 'px-4' | 'px-12';
    paddingY?: 'py-1' | 'py-2' | 'py-3' | 'py-4' | 'py-5';
}

const SpotifyButton = ({
    buttonText,
    fontWeight,
    bgColor,
    paddingX,
    paddingY
}: SpotifyButtonProps) => {
    return (
        <button className={`${bgColor} ${fontWeight} ${paddingX} ${paddingY} text-white text-sm rounded-full w-5/6`}>
            {buttonText}
        </button>
    );
};

export default SpotifyButton;