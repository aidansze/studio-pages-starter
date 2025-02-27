import { twMerge } from "tailwind-merge";
import React from 'react';


export interface CtaProps {
  buttonText?: string;
  url?: string;
  style?: string;
}

const Cta = (props: CtaProps) => {
  const { buttonText, url, style } = props;

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
    </a>
  );
};

export default Cta;
