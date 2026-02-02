import { companyLogos } from "../constants";

interface CompanyLogosProps {
  className: string;
}

export const CompanyLogos = ({ className }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logoItem, index) => (
          <li
            className="flex items-center justify-center flex-1 h-36"
            key={index}
          >
            <img src={logoItem} width={134} height={28} alt={logoItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
