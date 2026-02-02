import { twMerge } from "tailwind-merge";

interface HeadingProps {
  title: string;
  text: string;
  className?: string;
}

export const Heading = ({ title, className, text }: HeadingProps) => {
  return (
    <div className={twMerge("max-w-3xl mx-auto mb-12 lg:mb-20", className)}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};
