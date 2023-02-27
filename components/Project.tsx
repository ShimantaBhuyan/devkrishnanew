import { useRef, useState } from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import move from "lodash-move";
import Image from "next/image";
import { ProjectCard } from "./ProjectCard";

const CARD_OFFSET = 15;
const SCALE_FACTOR = 0.05;

export const Project = ({ projectView }: { projectView: "stack" | "grid" }) => {
  const draggableRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState(Object.values(projects));
  const moveToEnd = (from: number) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return projectView === "stack" ? (
    <div
      className="relative flex items-center justify-center w-[290px] sm:w-[350px] h-[230px] max-h-[230px] sm:mb-20 mt-10 sm:mt-20"
      ref={draggableRef}
    >
      <div className="relative w-fit w-[290px] sm:w-[350px] h-[230px] max-h-[230px] flex justify-center items-center">
        {cards.map((project, index) => {
          const canDrag = index === 0;

          return (
            // <motion.div
            //   key={`PROJECT_CARD_${project.id}`}
            //   className={`absolute w-[290px] sm:w-[350px] h-[230px] rounded-md list-none origin-top-center flex flex-col items-center justify-center backdrop-blur-md bg-purple-500/30`}
            //   style={{
            //     // backgroundColor: "#36a18b",
            //     cursor: canDrag ? "grab" : "auto",
            //   }}
            //   animate={{
            //     top: index * -CARD_OFFSET,
            //     scale: 1 - index * SCALE_FACTOR,
            //     zIndex: cards.length - index,
            //   }}
            //   dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            //   drag={canDrag ? "y" : false}
            //   dragConstraints={draggableRef}
            //   onDragEnd={() => moveToEnd(index)}
            //   whileTap={{ cursor: "grabbing" }}
            //   //   dragElastic={0.5}
            // >
            //   <Image
            //     src={project.img}
            //     alt={project.title}
            //     width={350}
            //     height={230}
            //     style={{ objectFit: "contain" }}
            //     className="w-[290px] sm:w-[350px] h-[230px] p-3 pointer-events-none"
            //   />
            //   {/* <h2 className="text-gray-600 text-md m-[2px]">{project.title}</h2> */}
            // </motion.div>

            <ProjectCard
              key={`PROJECT_CARD_${project.id}`}
              type={projectView}
              project={project}
              moveToEnd={moveToEnd}
              canDrag={canDrag}
              draggableRef={draggableRef}
              index={index}
              animation={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-wrap gap-10">
      {cards.map((project, index) => {
        return <ProjectCard key={`PROJECT_CARD_${project.id}`} type={projectView} project={project} />;
      })}
    </div>
  );
};
