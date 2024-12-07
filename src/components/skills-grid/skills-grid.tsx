import { TooltipProvider } from "../ui/tooltip";
import SkillIcon from "./skill-icon";
import SkillsGroup from "./skills-group";

const languages = ["typescript", "javascript", "python", "csharp", "c", "bash"]; // add go soon
const frontend = ["html5", "css3", "react", "capacitor", "redux", "materialui", "tailwindcss"];
const technologies = [
  "git",
  "github",
  "githubactions",
  "terraform",
  "googlecloud",
  "firebase",
  "docker",
  "pytorch",
  "android",
  "apple",
  "unity",
  "blender",
  "gimp",
];
const backend = [
  "nodejs",
  "dotnetcore",
  "denojs",
  "express",
  "nestjs",
  "swagger",
  "postgresql",
  "sqlite",
  "redis",
  "mongodb",
];

const baseDelay = 0;
const delayIncrease = 50;

const SkillsGrid = () => {
  const categories = [
    { title: "Technologies", items: technologies },
    { title: "Backend", items: backend },
    { title: "Languages", items: languages },
    { title: "Frontend", items: frontend },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {categories.map(({ title, items }) => (
          <SkillsGroup key={title} title={title}>
            {items.map((item, idx) => (
              <SkillIcon key={item} name={item} delay={baseDelay + idx * delayIncrease} />
            ))}
          </SkillsGroup>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SkillsGrid;
