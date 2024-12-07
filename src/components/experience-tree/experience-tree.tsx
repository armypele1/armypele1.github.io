import { CardHeader } from "../ui/card";
import { GlowCard } from "../ui/glow-card/glow-card";
import ExperienceCard from "./experience-card";
import { advancedResponsibilities, circadacareResponsibilities } from "./responsibilities";

const ExperienceTree = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="absolute top-8 left-1/2 bottom-8 w-[20px] bg-stone-400 dark:bg-stone-500" />
      <GlowCard>
        <CardHeader className="text-xl font-bold">Experience</CardHeader>
      </GlowCard>
      <ExperienceCard
        roleName="Full Stack Engineer"
        companyName="Circadacare"
        startDate="Oct 2023"
        endDate="Present"
        responsibilities={circadacareResponsibilities}
      />
      <ExperienceCard
        roleName="SWE Intern"
        companyName="Advanced"
        startDate="Summer 2019"
        responsibilities={advancedResponsibilities}
      />
    </div>
  );
};

export default ExperienceTree;
