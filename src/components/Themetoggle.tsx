import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { forwardRef } from "react";

const Themetoggle = forwardRef<HTMLButtonElement>((props, ref) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button ref={ref} variant="ghost" onClick={toggleTheme} {...props}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
});

export default Themetoggle;
