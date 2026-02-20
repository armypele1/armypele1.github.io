import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import ProjectCard from "./project-card";
import alienTossThumbnail from "../../assets/alientoss.jpg";
import ddpmThumbnail from "../../assets/ddpm.jpg";
import vrEngineThumbnail from "../../assets/VREngine.jpg";
import firemapperThumbnail from "../../assets/firemapper.jpg";

const cards = [
  {
    header: "Alien Toss",
    description: "A 3D physics-based mobile game built with Unity.",
    url: "https://alientoss.com",
    imageUrl: alienTossThumbnail,
  },
  {
    header: "Firemapper",
    description:
      "A toy ORM for Firestore that supports complex queries and relationships.",
    url: "https://github.com/armypele1/firemapper",
    imageUrl: firemapperThumbnail,
  },
  {
    header: "VR Graphics Engine",
    description: "A graphics engine built in Python for VR applications.",
    url: "https://github.com/armypele1/VR-Graphics-Engine",
    imageUrl: vrEngineThumbnail,
  },
  {
    header: "Diffusion Model",
    description: "A deep learning generative model implemented in PyTorch.",
    url: "https://github.com/armypele1/Deep-Learning-Generative-Model",
    imageUrl: ddpmThumbnail,
    tile: true,
  },
];

const FeatProjectsCard = () => {
  return (
    <Card>
      <CardHeader className={"text-xl font-bold"}>Featured Projects</CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((card) => (
          <ProjectCard key={card.header} {...card} />
        ))}
      </CardContent>
      <CardFooter className="flex justify-end pl-1">
        <a
          href="https://github.com/armypele1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
        >
          <Button variant={"link"} className="flex gap-2 items-end">
            View All
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default FeatProjectsCard;
