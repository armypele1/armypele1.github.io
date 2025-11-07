import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Card, CardContent, CardHeader } from "../ui/card";

export interface Props {
  roleName: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  responsibilities: {
    [key: string]: JSX.Element | string;
  };
  className?: string;
}

const ExperienceCard = ({ roleName, companyName, startDate, endDate, responsibilities, className }: Props) => {
  return (
    <Card className={className}>
      <CardHeader className="text-xl font-bold flex flex-row justify-between">
        <div>
          {roleName} <div className="text-sm text-primary">@{companyName}</div>
        </div>
        <p className="text-sm font-light">
          {startDate} {endDate ? "-" : ""} {endDate}
        </p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full max-w-6xl">
          {Object.entries(responsibilities).map(([key, value]) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger>{key}</AccordionTrigger>
              <AccordionContent>{value}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
