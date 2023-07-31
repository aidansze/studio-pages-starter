import { GetPath, TemplateProps } from "@yext/pages";
import LibertyMutualNavigationBar from "../components/LibertyMutualNavigationBar";

export const getPath: GetPath<TemplateProps> = () => {
  return "Liberty";
};

export default function Liberty() {
  return (
    <LibertyMutualNavigationBar
      logoSrc={`https://1000logos.net/wp-content/uploads/2020/09/Liberty-Mutual-Logo.png`}
      links={[
        { text: "Shop insurance", url: "/Shop" },
        { text: "Claims", url: "/Claims" },
        { text: "Customer Support", url: "/CustomerSupport" },
      ]}
      fontWeight="font-normal"
      textColor="blue-900"
    />
  );
}
