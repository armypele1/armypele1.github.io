import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import ModeToggle from "../buttons/mode-toggle";
import { Button } from "../ui/button";

const ThemeCard = () => {
  return (
    <Card className="w-[100%] flex flex-row justify-between">
      <CardHeader>
        <CardTitle>Hey There 👋</CardTitle>
        <CardDescription>this is my portfolio</CardDescription>
      </CardHeader>
      <CardHeader>
        <div className="flex gap-2 flex-wrap">
          <a href="https://github.com/armypele1" target="_blank" rel="noopener noreferrer" className="flex gap-2">
            <Button variant="outline" size="icon">
              <i className="devicon-github-original scale-125"></i>
              <span className="sr-only">Github</span>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/logan-armstrong-2397b51ba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <Button variant="outline" size="icon">
              <i className="devicon-linkedin-plain scale-125"></i>
              <span className="sr-only">Github</span>
            </Button>
          </a>
          <ModeToggle />
        </div>
      </CardHeader>
    </Card>
  );
};

export default ThemeCard;
