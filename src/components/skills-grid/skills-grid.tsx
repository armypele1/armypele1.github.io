import { TooltipProvider } from "../ui/tooltip";
import SkillIcon from "./skill-icon";
import SkillsGroup from "./skills-group";

const languages = ["typescript", "javascript", "csharp", "python", "bash"];
const frontend = ["html5", "css3", "react", "tailwindcss", "capacitor"];
const backend = [
  "nodejs",
  "nestjs",
  "express",
  "prisma",
  "postgresql",
  "sqlite",
  "redis",
  "mongodb",
];
const toolsAndInfra = [
  "git",
  "github",
  "githubactions",
  "terraform",
  "docker",
  "googlecloud",
  "cloudrun",
  "firebase",
  "unity",
];

const baseDelay = 0;
const delayIncrease = 50;

const SkillsGrid = () => {
  const categories = [
    { title: "Backend", items: backend },
    { title: "Tools & Infra", items: toolsAndInfra },
    { title: "Frontend", items: frontend },
    { title: "Languages", items: languages },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {categories.map(({ title, items }) => (
          <SkillsGroup key={title} title={title}>
            {items.map((item, idx) => (
              <SkillIcon
                key={item}
                name={item}
                delay={baseDelay + idx * delayIncrease}
              />
            ))}
          </SkillsGroup>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SkillsGrid;
