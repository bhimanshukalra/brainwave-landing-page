import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import SectionSvg from "../assets/svg/SectionSvg";

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: string;
  children?: ReactNode;
}

export const Section = ({
  children,
  className,
  crosses,
  crossesOffset,
  customPaddings,
  id,
}: SectionProps) => {
  return (
    <div
      id={id}
      className={twMerge(
        "relative",
        customPaddings || "py-10 lg:py-16 xl:py-20",
        crosses ? "lg:py-32 xl:py-40" : "",
        className,
      )}
    >
      {children}
      <div className="hidden absolute top-0 left-5 w-px h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 left-5 w-px h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={twMerge(
              "hidden absolute top-0 left-7.5 right-7.5 h-px bg-stroke-1 pointer-events-none lg:block xl:left-10 xl:right-10",
              crossesOffset,
            )}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};
