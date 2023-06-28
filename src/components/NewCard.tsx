import { Card, Grid, Text, Link } from "@nextui-org/react";

export interface NewCardProps {
    url: string;
    alt: string;
    PicWidthPct: number;
    PicHeightPct: number;
    caption: string;
}

export const initialProps: NewCardProps = {
    url: "",
    alt: "Add your image",
    PicWidthPct: 50,
    PicHeightPct: 50,
    caption: "Add your caption",
};

const NewCard = ({ url, alt, PicWidthPct, PicHeightPct, caption }: NewCardProps) => {
    return (
      <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
          <img
            alt={alt}
            src={url}
            width={`${PicWidthPct}%`}
            height={`${PicHeightPct}%`}
          />
          <Grid.Container css={{ pl: "$6" }}>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>
            {caption}
          </Text>
        </Card.Body>
        <Card.Footer>
          <Link
            color="primary"
            target="_blank"
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Card.Footer>
      </Card>
    );
  };

  export default NewCard;
