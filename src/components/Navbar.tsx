import { Link } from "react-router";
import Logo from "./Logo";
import Themetoggle from "./Themetoggle";
import { Button } from "./ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ user }: { user: any }) => {
  if (!user) {
    return (
      <nav className="flex items-center justify-between p-4">
        <Logo />

        <div className="flex items-center gap-2">
          <Themetoggle />
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <Logo />

      <div className="flex items-center gap-2">
        <Themetoggle />
        <span>Welcome, {user.name}</span>
      </div>
    </nav>
  );
};

export default Navbar;
