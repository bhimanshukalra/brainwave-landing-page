import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import { Button } from "./Button";
import { Gradient } from "./design/Roadmap";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { TagLine } from "./TagLine";

export const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
          {roadmap.map((roadmapItem) => {
            const status =
              roadmapItem.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={roadmapItem.id}
                className={`md:flex even:md:translate-y-28 p-0.5 rounded-4xl ${roadmapItem.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
              >
                <div className="relative p-8 bg-n-8 rounded-4xl overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-96 mx-8">
                      <TagLine>{roadmapItem.date}</TagLine>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={
                            roadmapItem.status === "done" ? check2 : loading1
                          }
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={roadmapItem.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={roadmapItem.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{roadmapItem.title}</h4>
                    <p className="body-2 text-n-4">{roadmapItem.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};
