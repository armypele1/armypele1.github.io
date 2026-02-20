import { ReactNode } from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: (50 + delay) / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCardWrapper;
