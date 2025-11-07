import { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface Props {
  big?: boolean;
  title?: string;
  content?: boolean;
}

const PlaceholderCard = ({ big, title, children, content = true }: PropsWithChildren<Props>) => {
  const classes = "text-xl font-bold";

  return (
    <Card>
      <CardHeader className={classes}>{title || "Placeholder"}</CardHeader>
      {!big && content ? (
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad impedit deserunt nostrum doloremque
            excepturi fugiat harum, facere veniam tempore! Inventore tempora hic praesentium explicabo soluta dolorem
            recusandae. Quia, odit?
          </p>
        </CardContent>
      ) : (
        children
      )}
    </Card>
  );
};

export default PlaceholderCard;
