import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import profilePic from "../../assets/profile.jpg";

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
    <Card className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-secondary from-60% to-transparent" />
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
        <a
          href="https://drive.google.com/file/d/14pOmDXhu4zeWwpjoYPiDXosr0GDdZNQOFHftUnx54ew/preview"
          target={"_blank"}
        >
          <Button>
            <FileText />
            Download CV
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default UserProfileCard;
