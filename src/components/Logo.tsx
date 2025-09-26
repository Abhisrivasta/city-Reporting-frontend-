import { useRef } from "react";
import { MapPin, Sparkles } from "lucide-react";
import gsap from "gsap";

const Logo = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={logoRef}
      className="flex items-center space-x-3 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <MapPin className="h-8 w-8  text-blue-500" />
        <Sparkles className="h-3 w-3 text-accent-500 absolute -top-1 -right-1 animate-pulse" />
      </div>
      <div>
       <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-accent-500 bg-clip-text text-transparent">
          CityReport
        </span>

        <div className="text-xs text-muted-foreground">
          Smart City Solutions
        </div>
      </div>
    </div>
  );
};

export default Logo;
