import { Card } from "@nextui-org/react";
import { GetPath, TemplateProps } from "@yext/pages";
import HStack from "../components/HStack";
import LibertyMutualNavigationBar from "../components/LibertyMutualNavigationBar";

export const getPath: GetPath<TemplateProps> = () => {
  return "Liberty";
};

export default function Liberty() {
  return (
    <>
      <HStack space="1">
        <Card
          title="External Asset Fetched at Build Time"
          titleFontSize="text-xl"
          titleFontWeight="font-bold"
          titleTextColor="text-gray-900"
          subtitle="Default subtitle"
          subtitleFontSize="text-base"
          subtitleFontWeight="font-normal"
          subtitleTextColor="text-gray-700"
          url=""
        />
      </HStack>
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
    </>
  );
}
