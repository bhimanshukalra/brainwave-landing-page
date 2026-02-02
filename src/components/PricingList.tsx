import { check } from "../assets";
import { pricing } from "../constants";
import { Button } from "./Button";

export const PricingList = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-80 max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-2xl lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-16 mb-3 text-n-1/50">{item.description}</p>

          <div className="flex items-center h-24 mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-8xl leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:test@email.com"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
