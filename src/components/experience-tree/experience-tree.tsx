import { Card, CardHeader } from "../ui/card";
import ExperienceCard from "./experience-card";
import { advancedResponsibilities, circadacareResponsibilities } from "./responsibilities";

const ExperienceTree = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="absolute top-8 left-1/2 bottom-8 w-[20px] bg-stone-400 dark:bg-stone-500 -z-10" />
      <Card className="relative z-10">
        <CardHeader className="text-xl font-bold">Experience</CardHeader>
      </Card>
      <ExperienceCard
        roleName="Full Stack Engineer"
        companyName="Circadacare"
        startDate="Oct 2023"
        endDate="Present"
        responsibilities={circadacareResponsibilities}
        className="relative z-10"
      />
      <ExperienceCard
        roleName="SWE Intern"
        companyName="Advanced"
        startDate="Summer 2019"
        responsibilities={advancedResponsibilities}
        className="relative z-10"
      />
    </div>
  );
};

export default ExperienceTree;
