import type { ReactNode } from "react";
import { Brackets } from "../assets/svg";

interface TagLineProps {
  className?: string;
  children?: ReactNode;
}

export const TagLine = ({ className, children }: TagLineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      <Brackets position="left" />
      <div className="mx-3 text-n-3">{children}</div>
      <Brackets position="right" />
    </div>
  );
};
