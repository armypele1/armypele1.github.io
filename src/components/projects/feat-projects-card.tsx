import { Button } from "../ui/button";
import { CardHeader, CardContent, CardFooter } from "../ui/card";
import ProjectCard from "./project-card";
import alienTossThumbnail from "../../assets/alientoss.jpg";
import ddpmThumbnail from "../../assets/ddpm.jpg";
import vrEngineThumbnail from "../../assets/VREngine.jpg";
import firemapperThumbnail from "../../assets/firemapper.jpg";
import { GlowCard } from "../ui/glow-card/glow-card";

const FeatProjectsCard = () => {
  return (
    <GlowCard>
      <CardHeader className={"text-xl font-bold"}>Featured Projects</CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <ProjectCard url="https://alientoss.com" imageUrl={alienTossThumbnail} />
        <ProjectCard imageUrl={firemapperThumbnail} url="https://github.com/armypele1/firemapper" />
        <ProjectCard url="https://github.com/armypele1/VR-Graphics-Engine" imageUrl={vrEngineThumbnail} />
        <ProjectCard url="https://github.com/armypele1/Deep-Learning-Generative-Model" imageUrl={ddpmThumbnail} tile />
      </CardContent>
      <CardFooter className="flex justify-end pl-1">
        <a href="https://github.com/armypele1" target="_blank" rel="noopener noreferrer" className="flex gap-2">
          <Button variant={"link"} className="flex gap-2 items-end">
            View All
          </Button>
        </a>
      </CardFooter>
    </GlowCard>
  );
};

export default FeatProjectsCard;
