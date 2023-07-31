import { Card } from "@nextui-org/react";
import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";

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
  return <Card />;
}
