import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import BigButton from "../components/BigButton";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["ce_artist"] },
    fields: ["headshot", "name", "c_biography", "slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function artist({ document }: TemplateProps) {
  return (
    <>
      <ProductImage src="" alt={`${document.name}`} />
      <BigButton title={`${document.c_birthday}`} href="#" />
      <Paragraph
        value={`${document.c_biography}`}
        textSize="base"
        fontWeight="bold"
      />
    </>
  );
}
