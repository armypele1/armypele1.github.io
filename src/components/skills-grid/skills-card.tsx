import SkillsGrid from "./skills-grid";
import { CardHeader, CardContent } from "../ui/card";
import { GlowCard } from "../ui/glow-card/glow-card";

const SkillsCard = () => {
  return (
    <GlowCard>
      <CardHeader className={"text-xl font-bold"}>Skills</CardHeader>
      <CardContent className="overflow-x-auto">
        <SkillsGrid />
      </CardContent>
    </GlowCard>
  );
};

export default SkillsCard;
