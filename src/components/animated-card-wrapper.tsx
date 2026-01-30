import { ReactNode, useEffect, useState } from "react";

interface AnimatedCardWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCardWrapper = ({
  children,
  delay = 0,
  className = "",
}: AnimatedCardWrapperProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 50 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${shouldAnimate ? "animate-pop-in" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCardWrapper;
