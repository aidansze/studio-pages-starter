export interface LibertyMutualHeroProps {
  cardImageSrc: string;
  title: string;
  subtitle: string;
  fontSize: string;
  fontWeight: string;
  textColor: string;
}

export const initialProps: LibertyMutualHeroProps = {
  cardImageSrc: "https://example.com/path/to/card-image.jpg",
  title: "Welcome to Liberty Mutual",
  subtitle: "Get the insurance coverage you need",
  fontSize: "text-lg",
  fontWeight: "font-normal",
  textColor: "white"
};


const LibertyMutualHero = ({
  cardImageSrc,
  title,
  subtitle,
  fontSize,
  fontWeight,
  textColor
}: LibertyMutualHeroProps) => {
  return (
    <div className="bg-primary py-20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto rounded-lg overflow-hidden">
          <img className="w-full" src={cardImageSrc} alt="Card Image" />
          <div className="p-6 bg-white">
            <h1 className={`text-4xl font-bold text-${textColor} ${fontSize} ${fontWeight}`}>{title}</h1>
            <p className={`mt-4 text-2xl text-${textColor} ${fontSize} ${fontWeight}`}>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibertyMutualHero;
