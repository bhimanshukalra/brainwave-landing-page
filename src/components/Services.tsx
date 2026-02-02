import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { Generating } from "./Generating";
import { Heading } from "./Heading";
import { Section } from "./Section";

export const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <PrimaryService />

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <SecondaryService />
            <TertiaryService />
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

function PrimaryService() {
  return (
    <div className="relative z-1 flex items-center h-160 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-184">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
        <img
          src={service1}
          className="w-full h-full object-cover md:object-right"
          width={800}
          height={730}
          alt="Smartest AI"
        />
      </div>
      <div className="relative z-1 max-w-3xs ml-auto">
        <h4 className="h4 mb-4">Smartest AI</h4>
        <p className="body-2 mb-12 text-n-3">
          Brainwave unlocks the potential of AI-powered applications
        </p>
        <ul className="body-2">
          {brainwaveServices.map((serviceItem, index) => (
            <li
              key={index}
              className="flex items-start py-4 border-t border-n-6"
            >
              <img src={check} width={24} height={24} />
              <p className="ml-4">{serviceItem}</p>
            </li>
          ))}
        </ul>
      </div>
      <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:bottom-8 lg:-translate-x-1/2" />
    </div>
  );
}

function SecondaryService() {
  return (
    <div className="relative min-h-160 border border-n-1/10 rounded-3xl overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={service2}
          className="h-full w-full object-cover"
          width={630}
          height={750}
          alt="robot"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-b from-n-8/0 to-n-8/90 lg:p-16">
        <h4 className="h4 mb-4">Photo editing</h4>
        <p className="body-2 mb-12 text-n-3">
          Automatically enhance your photos using our AI app&apos;s photo
          editing feature. Try it now!
        </p>
      </div>
      <PhotoChatMessage />
    </div>
  );
}

function TertiaryService() {
  return (
    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-184">
      <div className="py-12 px-4 xl:px-8">
        <h4 className="h4 mb-4">Video generation</h4>
        <p className="body-2 mb-8 text-n-3">
          The world&apos;s most powerful AI photo and video art generation
          enginer. What will you create?
        </p>
        <ul className="flex items-center justify-between">
          {brainwaveServicesIcons.map((serviceItem, index) => (
            <li
              key={index}
              className={`flex items-center justify-center rounded-2xl ${index === 2 ? "size-12 p-0.5 bg-conic-gradient md:size-20" : "flex size-10 bg-n-6 md:size-15"}  `}
            >
              <div
                className={
                  index === 2
                    ? "flex items-center justify-center w-full h-full bg-n-7 rounded-2xl"
                    : ""
                }
              >
                <img
                  src={serviceItem}
                  width={24}
                  height={24}
                  alt={serviceItem}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-80 bg-n-8 rounded-xl overflow-hidden md:h-96">
        <img
          src={service3}
          className="w-full h-full object-cover"
          width={520}
          height={400}
          alt="Scary robot"
        />
        <VideoChatMessage />
        <VideoBar />
      </div>
    </div>
  );
}
