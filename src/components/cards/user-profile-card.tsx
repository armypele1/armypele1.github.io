import { CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { GlowCard } from "../ui/glow-card/glow-card";
import profilePic from "../../assets/profile-pic.jpeg";

const UserProfileCard = () => {
  const name = "Logan Armstrong";
  const description = "Full Stack Engineer";
  // Get initials for avatar fallback
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <GlowCard className="relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-secondary dark:bg-secondary/30" />
      <CardHeader className="flex flex-col items-center space-y-3">
        <Avatar className="h-32 w-32 border-2">
          <AvatarImage src={profilePic} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold relative">{name}</CardTitle>
          <CardDescription className="text-md">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <a href="https://drive.google.com/file/d/1Nq6JGysSYfGOCJdhvwrlSJ6mmOOYgdwe/view?usp=sharing" target={"_blank"}>
          <Button>
            <FileText />
            Download CV
          </Button>
        </a>
      </CardFooter>
    </GlowCard>
  );
};

export default UserProfileCard;
