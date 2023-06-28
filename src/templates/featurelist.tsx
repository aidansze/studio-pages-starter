import { GetPath, TemplateProps } from "@yext/pages";
import ImgComp from "../components/ImgComp";
import ProductImage2 from "../components/ProductImage2";

export const getPath: GetPath<TemplateProps> = () => {
  return "featurelist";
};

export default function featurelist() {
  return (
    <>
      <ImgComp
        alt="your image here"
        widthPct={31}
        border="rounded-full"
        url={`https://m.media-amazon.com/images/I/81pJUrECVzL.jpg`}
        padding={2}
        picInfo={{ hiddenCaption: ``, caption: `` }}
      />
      <ProductImage2
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9g-bxz7Wi3Ia5FRKHiH9tTQaO1qG18E0HhZlMcaM&s`}
        alt="Light green backpack with black canvas straps and front zipper pouch."
        widthFraction="1/4"
      />
    </>
  );
}
