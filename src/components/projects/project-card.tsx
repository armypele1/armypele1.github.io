import { useState } from "react";
import { createPortal } from "react-dom";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ExternalLink, X } from "lucide-react";

interface Props {
  header: string;
  description: string;
  imageUrl?: string;
  url?: string;
  tile?: boolean;
}

const ProjectCard = ({ header, description, imageUrl, tile, url }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const layoutId = `project-card-${imageUrl}`;

  return (
    <>
      {/* Card */}
      <motion.div
        layoutId={layoutId}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.2, // faster (default is ~0.3–0.5)
          ease: "easeOut",
        }}
      >
        <Card
          onClick={() => setIsOpen(true)}
          className={cn(
            "w-full h-[140px] bg-stone-200 dark:bg-stone-700 bg-cover bg-center cursor-pointer rounded-xl",
            tile && "bg-auto",
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </motion.div>

      {/* Modal — portalled to document.body to escape any positioned ancestors */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Centering container */}
              <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                <motion.div
                  layoutId={layoutId}
                  className="rounded-xl shadow-xl bg-cover bg-center pointer-events-auto max-w-xl w-full mx-6"
                  style={{}}
                  transition={{
                    duration: 0.2, // faster (default is ~0.3–0.5)
                    ease: "easeOut",
                  }}
                >
                  <Card className="relative w-full h-full pt-0 overflow-auto">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-2 right-2 z-50 rounded-xl size-8"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="size-4" />
                    </Button>
                    <img
                      src={imageUrl}
                      alt="Event cover"
                      className="relative z-20 aspect-video w-full object-cover"
                    />
                    <CardHeader>
                      <CardAction>
                        {/* <Badge variant="secondary">Featured</Badge> */}
                      </CardAction>
                      <CardTitle>{header}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button
                        className="w-full"
                        variant="default"
                        onClick={() => window.open(url, "_blank")}
                      >
                        <ExternalLink /> See More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default ProjectCard;
