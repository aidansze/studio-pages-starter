import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Paragraph from "../components/Paragraph";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: { entityIds: ["9089058652563388842"] },
    fields: ["c_biography", "slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function artist({ document }: TemplateProps) {
  return (
    <Paragraph
      value="haha"
      textSize="base"
      fontWeight="bold"
    />
  );
}
