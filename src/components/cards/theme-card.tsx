import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import ModeToggle from "../buttons/mode-toggle";
import { useTheme } from "../theme-provider";
import { GlowCard } from "../ui/glow-card/glow-card";

const ThemeCard = () => {
  const theme = useTheme();
  return (
    <GlowCard className="w-[100%] flex flex-row justify-between">
      <CardHeader>
        <CardTitle>Select Theme</CardTitle>
        <CardDescription>{theme.theme}</CardDescription>
      </CardHeader>
      <CardHeader>
        <ModeToggle />
      </CardHeader>
    </GlowCard>
  );
};

export default ThemeCard;
