import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridCols from "../components/GridCols";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import SpotifyCard from "../components/SpotifyCard";
import SpotifyTopCard from "../components/SpotifyTopCard";
import VStack from "../components/VStack";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["ce_PaymentPlan"] },
    fields: [],
  },
};
export const getPath: GetPath<TemplateProps> = () => {
  return `PayPlan`;
};

export default function PayPlan() {
  return (
    <>
      <PageLayout backgroundColor="#000000">
        <VStack>
          <Paragraph
            value="Paragraph"
            textSize="base"
            fontWeight="normal"
            textAlign="text-left"
          />
          <Paragraph
            value={`Experience the difference`}
            textSize="3xl"
            fontWeight="extrabold"
            textAlign="text-center"
            textColor="text-white"
          />
          <Paragraph
            value={`Go Premium and enjoy full control of your listening. Cancel anytime.`}
            textSize="xl"
            fontWeight="light"
            textAlign="text-center"
            textColor="text-white"
          />
        </VStack>
        <Paragraph
          value="Paragraph"
          textSize="base"
          fontWeight="normal"
          textAlign="text-left"
          textColor="text-black"
        />
        <SpotifyTopCard
          title={`All premium plans include`}
          titleFontSize="text-lg"
          titleFontWeight="font-bold"
          titleTextColor="text-white"
          features={[
            `Ad-free music listening`,
            `Download to listen offline`,
            `Turn off shuffle`,
            `High audio quality`,
            `Listen with friends in real time`,
            `Personalized recommendations for playlists`,
            `Organize listening queue`,
          ]}
          borderColor="pink-400"
        />
        <GridCols margin={`2`} NumCols="3" space={`2`}>
          <SpotifyCard
            title={`Premium Individual`}
            titleFontSize="text-xl"
            titleFontWeight="font-bold"
            titleTextColor="text-white"
            subtitle={`Terms apply`}
            subtitleFontSize="text-xs"
            subtitleFontWeight="font-normal"
            subtitleTextColor="text-white"
            features={[`1 account`, "Cancel anytime"]}
            SpotifyButtonProps={{
              buttonText: "Sign Up",
              fontWeight: "font-normal",
              bgColor: `bg-yellow-400`,
              paddingX: "px-4",
              paddingY: "py-2",
            }}
            subtitleLink=""
            price={`10.99`}
            borderColor={`yellow-400`}
          />
          <SpotifyCard
            title={`Premium Duo`}
            titleFontSize="text-xl"
            titleFontWeight="font-bold"
            titleTextColor="text-white"
            subtitle={`Terms apply`}
            subtitleFontSize="text-xs"
            subtitleFontWeight="font-normal"
            subtitleTextColor="text-white"
            features={[`2 accounts`, "Cancel anytime"]}
            SpotifyButtonProps={{
              buttonText: "Sign Up",
              fontWeight: "font-normal",
              bgColor: `bg-purple-200`,
              paddingX: "px-12",
              paddingY: "py-2",
            }}
            subtitleLink=""
            price={`14.99`}
            borderColor={`purple-200`}
          />
          <SpotifyCard
            title={`Premium Family`}
            titleFontSize="text-xl"
            titleFontWeight="font-bold"
            titleTextColor="text-white"
            subtitle={`Terms apply`}
            subtitleFontSize="text-xs"
            subtitleFontWeight="font-normal"
            subtitleTextColor="text-white"
            features={[
              `Up to 6 accounts`,
              `Block explicit music`,
              `Access to Spotify kids`,
              `Cancel anytime`,
            ]}
            SpotifyButtonProps={{
              buttonText: "Sign Up",
              fontWeight: "font-normal",
              bgColor: `bg-pink-500`,
              paddingX: "px-4",
              paddingY: "py-2",
            }}
            subtitleLink=""
            price={`16.99`}
            borderColor={`pink-400`}
          />
        </GridCols>
      </PageLayout>
      <Paragraph
        value="Paragraph"
        textSize="base"
        fontWeight="normal"
        textAlign="text-left"
      />
    </>
  );
}
