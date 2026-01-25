import type { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  href?: string;
  children?: ReactNode;
  px?: string;
  white?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  href,
  px,
  white,
  onClick,
}: ButtonProps) => {
  const classes = twMerge(
    "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1",
    px || "px-7",
    white ? "text-n-8" : "text-n-1",
    className,
  );

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </a>
  );

  return href ? renderLink() : renderButton();
};
