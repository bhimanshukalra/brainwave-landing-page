import { twMerge } from "tailwind-merge";
import { TagLine } from "./TagLine";

interface HeadingProps {
  title?: string;
  text?: string;
  tag?: string;
  className?: string;
}

export const Heading = ({ title, className, text, tag }: HeadingProps) => {
  return (
    <div
      className={twMerge(
        "max-w-3xl mx-auto mb-12 lg:mb-20 md:text-center",
        className,
      )}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};
