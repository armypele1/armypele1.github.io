import { useState } from "react";

interface Props {
  name: string;
  delay?: number;
}

const SkillIcon = ({ name }: Props) => {
  const [isExpanding, setIsExpanding] = useState(false);

  const handleClick = () => {
    if (isExpanding) return;
    setIsExpanding(true);
    // Reset the spinning state after animation completes
    setTimeout(() => {
      setIsExpanding(false);
    }, 1000); // 500ms = 1 rotation
  };

  const prettifyName = (name: string) => {
    switch (name) {
      case "googlecloud":
        return "google cloud";
      case "githubactions":
        return "github actions";
      case "materialui":
        return "mui";
      default:
        return name;
    }
  };

  return (
    <div
      className={`flex flex-col justify-center m-1 items-center transition-transform duration-500 opacity-100 translate-y-0`}
      onClick={handleClick}
    >
      <i
        className={`text-5xl transition-colors devicon-${name}-original devicon-${name}-plain  ${
          isExpanding
            ? "animate-clean-bounce text-primary dark:text-primary"
            : "dark:text-stone-200 text-stone-600"
        } `}
      ></i>
      <p className={"text-center text-sm font-medium leading-none mt-2"}>
        {prettifyName(name)}
      </p>
    </div>
  );
};

export default SkillIcon;
