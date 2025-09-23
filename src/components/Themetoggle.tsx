import {Sun,Moon} from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/button"
const Themetoggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if(theme === "light") setTheme("dark")
        else setTheme("light")
  }
  return (
    <div>
        <Button variant="ghost" onClick={toggleTheme}>
            {theme === "dark" ? <Sun/> : <Moon/>}
        </Button>
    </div>
  )
}

export default Themetoggle