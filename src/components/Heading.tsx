import { twMerge } from "tailwind-merge";

interface HeadingProps {
  className: string;
  title: string;
}

export const Heading = ({ title, className }: HeadingProps) => {
  return (
    <div className={twMerge("max-w-12 mx-auto mb-12 lg:mb-20", className)}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};
