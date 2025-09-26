import { Link } from "react-router";
import gsap from "gsap";
import Logo from "./Logo";
import Themetoggle from "./Themetoggle";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ user }: { user: any; currentPage?: string }) => {
  const loginWrapperRef = useRef<HTMLDivElement | null>(null);
  const loginShineRef = useRef<HTMLDivElement | null>(null);

  const registerWrapperRef = useRef<HTMLDivElement | null>(null);
  const registerShineRef = useRef<HTMLDivElement | null>(null);

  const themeToggleRef = useRef<HTMLDivElement | null>(null);

  const handleThemeHover = (isHovering: boolean) => {
    if (themeToggleRef.current) {
      gsap.to(themeToggleRef.current, {
        rotate: isHovering ? 360 : 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    if (loginShineRef.current) gsap.set(loginShineRef.current, { x: "-100%" });
    if (registerShineRef.current)
      gsap.set(registerShineRef.current, { x: "-100%" });
  }, []);

  const handleShineHover = (
    isHovering: boolean,
    wrapperRef: React.RefObject<HTMLDivElement | null>,
    shineRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (shineRef.current && wrapperRef.current) {
      if (isHovering) {
        gsap.to(shineRef.current, {
          x: "100%",
          duration: 0.8,
          ease: "power1.inOut",
          opacity: 0.4,
        });
        gsap.to(wrapperRef.current, {
          y: -3,
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          duration: 0.3,
        });
      } else {
        gsap.to(shineRef.current, {
          x: "-100%",
          duration: 0.8,
          opacity: 0,
        });
        gsap.to(wrapperRef.current, {
          y: 0,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
        });
      }
    }
  };

  if (!user) {
    return (
      <nav className="border-b sticky top-0 z-50 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center space-x-3">
              <div
                ref={themeToggleRef}
                onMouseEnter={() => handleThemeHover(true)}
                onMouseLeave={() => handleThemeHover(false)}
                className="rounded-full overflow-hidden"
              >
                <Themetoggle />
              </div>

              <div
                className="relative overflow-hidden rounded-md"
                ref={loginWrapperRef}
                onMouseEnter={() =>
                  handleShineHover(true, loginWrapperRef, loginShineRef)
                }
                onMouseLeave={() =>
                  handleShineHover(false, loginWrapperRef, loginShineRef)
                }
              >
                <Button
                  asChild
                  className=" text-black bg-transparent dark:text-white hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <div
                  ref={loginShineRef}
                  className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transform -skew-x-12 pointer-events-none rounded-md"
                />
              </div>

              <div
                className="relative overflow-hidden rounded-md"
                ref={registerWrapperRef}
                onMouseEnter={() =>
                  handleShineHover(true, registerWrapperRef, registerShineRef)
                }
                onMouseLeave={() =>
                  handleShineHover(false, registerWrapperRef, registerShineRef)
                }
              >
                <Button
                  asChild
                  className="bg-blue-500 text-white hover:text-black dark:text-white hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  <Link to="/register">Get Started</Link>
                </Button>
                <div
                  ref={registerShineRef}
                  className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transform -skew-x-12 pointer-events-none rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="border-b sticky top-0 z-50 bg-white dark:bg-gray-900">
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
