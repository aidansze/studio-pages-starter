import { twMerge } from "tailwind-merge";

export interface CtaProps {
  buttonText?: string;
  buttonSubtitle: string;
  url?: string;
  style?: string;
}

const Cta = (props: CtaProps) => {
  const { buttonText, buttonSubtitle, url, style } = props;

  return (
    <a
      href={url}
      className={twMerge(
        " py-4 px-6 text-base font-bold text-white rounded-lg",
        style
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
      <p>{buttonSubtitle}</p>
    </a>
  );
};

export default DoubleCTA;