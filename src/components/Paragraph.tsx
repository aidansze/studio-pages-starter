export interface ParagraphProps {
  value: string;
  textSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  textAlign?: "text-left" | "text-center" | "text-right";
  textColor?: "text-white" | "text-black" | "text-gray-500";
}

export const initialProps: ParagraphProps = {
  value: "Paragraph",
  textSize: "base",
  fontWeight: "normal",
  textAlign: "text-left",
};

const Paragraph = ({  textAlign, value, textSize, fontWeight, textColor }: ParagraphProps) => {
  return (
    <section aria-labelledby="information-heading" className="mt-4">
      <div className="mt-4 space-y-2">
        <p className={`font-sans text-${textSize} ${textColor} ${textAlign} font-${fontWeight}`}>
          {value}
        </p>
      </div>
    </section>
  );
};

export default Paragraph;
