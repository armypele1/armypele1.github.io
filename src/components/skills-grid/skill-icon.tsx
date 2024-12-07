import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props {
  name: string;
  delay?: number;
}

const SkillIcon = ({ name, delay }: Props) => {
  const [isExpanding, setIsExpanding] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (isExpanding) return;
    setIsExpanding(true);
    setOpen(true);
    // Reset the spinning state after animation completes
    setTimeout(() => {
      setIsExpanding(false);
      setOpen(false);
    }, 1000); // 500ms = 1 rotation
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Tooltip delayDuration={0} open={open} onOpenChange={(open) => setOpen(open)}>
      <TooltipTrigger asChild>
        <div
          className={`flex flex-col justify-center m-1 items-center transition-all duration-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          onClick={handleClick}
        >
          <i
            className={`text-5xl transition-colors devicon-${name}-original devicon-${name}-plain  ${
              isExpanding ? "animate-clean-bounce text-primary dark:text-primary" : "text-stone-600 dark:text-stone-200"
            } `}
          ></i>
          {/* <p className={"text-center text-sm font-medium leading-none mt-1"}>{iconName}</p> */}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SkillIcon;
