import { useToast } from "@/hooks/use-toast";
import { Card } from "../ui/card";

interface Props {
  imageUrl?: string;
  url?: string;
  tile?: boolean;
}

const ProjectCard = ({ imageUrl, url, tile }: Props) => {
  const { toast } = useToast();

  let classes =
    "w-full h-[140px] bg-stone-200 dark:bg-stone-700 bg-cover \
    bg-center cursor-pointer transition-transform hover:scale-[1.01] \
    brightness-110";

  if (tile) {
    classes += " bg-auto";
  }

  const handleClick = () => {
    if (!url) {
      toast({
        title: "Coming Soon!",
        description: "I'm currently working on the Github page for this project.",
      });
    }
  };

  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex gap-2">
        <Card
          onClick={handleClick}
          className={classes}
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
        ></Card>
      </a>
    </div>
  );
};

export default ProjectCard;
