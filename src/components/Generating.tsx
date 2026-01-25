import { twMerge } from "tailwind-merge";
import { loading } from "../assets";

interface GeneratingProps {
  className?: string;
}

export const Generating = ({ className }: GeneratingProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center h-14 px-6 bg-n-8/80 rounded-2xl text-base",
        className,
      )}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};
