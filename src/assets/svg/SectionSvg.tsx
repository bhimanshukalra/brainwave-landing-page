import PlusSvg from "./PlusSvg";

interface SectionSvgProps {
  crossesOffset?: string;
}

const SectionSvg = ({ crossesOffset }: SectionSvgProps) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-1.25 left-6.25 ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-8.75`}
      />

      <PlusSvg
        className={`hidden absolute  -top-1.25 right-6.25 ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-8.75`}
      />
    </>
  );
};

export default SectionSvg;
