import React from "react";
import EducationInfo from "./education-info";
import { Card, CardHeader, CardContent } from "../ui/card";
import { GraduationCap, University } from "lucide-react";

const infoArr: Array<{
  title: string;
  dateRange: string;
  description: string;
  icon: React.ReactNode;
}> = [
  {
    title: "B.Sc. Computer Science (First Class)",
    dateRange: "2020-2023",
    description: "Durham University",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
  },
  {
    title: "A Levels",
    dateRange: "2018-2020",
    description: "A* Computer Science, A Mathematics, B Physics",
    icon: <University className="h-8 w-8 text-primary" />,
  },
];

const EducationCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="text-xl font-bold">Education</CardHeader>
      <CardContent>
        {infoArr.map((info, i) => (
          <div key={i}>
            <EducationInfo {...info} />
            {i !== infoArr.length - 1 && <hr className="my-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EducationCard;
