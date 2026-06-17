import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
}

const sizes = {
  sm: { width: 110, height: 44 },
  md: { width: 70, height: 50 },
  lg: { width: 180., height: 72 },
};

export default function Logo({
  size = "md",
  variant = "dark",
  className = "",
}: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="https://cherishdermaclinic.com/logo.png"
        alt="Cherish Derma Clinic"
        width={width}
        height={height}
        className={`object-contain ${variant === "light" ? "brightness-0 invert" : ""}`}
        priority
      />
    </div>
  );
}
