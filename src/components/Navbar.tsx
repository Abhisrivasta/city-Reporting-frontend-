import { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";

import Logo from "./Logo";
import Themetoggle from "./Themetoggle";
import { Button } from "./ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ user, currentPage }: { user: any; currentPage?: string }) => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  if (!user) {
    return (
      <nav
        ref={navRef}
        className="border-b bg-card/80 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />

            <div className="flex items-center space-x-3">
              <Themetoggle />

              <Button
                variant={currentPage === "login" ? "default" : "ghost"}
                asChild
                className="btn-modern hover-lift"
              >
                <Link to="/login">Login</Link>
              </Button>

              <Button
                variant={currentPage === "register" ? "default" : "ghost"}
                asChild
                className="btn-modern hover-lift gradient-primary border-0 text-white shadow-modern"
              >
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={navRef}
      className="border-b bg-card/80 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="flex items-center space-x-3">
            <Themetoggle />
            <span className="font-medium">Welcome, {user.name}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
