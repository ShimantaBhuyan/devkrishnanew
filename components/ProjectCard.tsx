import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECT_TYPE } from "../data/projects";

export const ProjectCard = ({
  type,
  project,
  moveToEnd,
  animation,
  canDrag,
  draggableRef,
  index,
}: {
  type: "stack" | "grid";
  project: PROJECT_TYPE;
  canDrag?: boolean;
  draggableRef?: React.RefObject<HTMLDivElement>;
  moveToEnd?: (num: number) => void;
  index?: number;
  animation?: any;
}) => {
  const router = useRouter();
  return type === "stack" ? (
    <motion.div
      key={`PROJECT_CARD_${project.id}`}
      className={`absolute w-[290px] sm:w-[350px] h-[230px] rounded-md list-none origin-top-center flex flex-col items-center justify-center backdrop-blur-md bg-purple-500/30`}
      style={{
        // backgroundColor: "#36a18b",
        cursor: canDrag ? "grab" : "auto",
      }}
      animate={animation}
      //   dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      drag={canDrag ? "y" : false}
      dragConstraints={draggableRef}
      onDragEnd={() => moveToEnd && moveToEnd(index ?? 0)}
      whileTap={{ cursor: "grabbing" }}
      onClick={() => router.push(project.to)}
      //   dragElastic={0.5}
    >
      <Image
        src={project.img}
        alt={project.title}
        width={350}
        height={230}
        style={{ objectFit: "contain" }}
        className="w-[290px] sm:w-[350px] h-[230px] p-3 pointer-events-none"
      />
      {/* <h2 className="text-gray-600 text-md m-[2px]">{project.title}</h2> */}
    </motion.div>
  ) : (
    <motion.div
      key={`PROJECT_CARD_${project.id}`}
      className={`w-[290px] sm:w-[350px] h-fit rounded-md list-none origin-top-center flex flex-col items-center justify-center bg-purple-500/40 cursor-pointer`}
      onClick={() => router.push(project.to)}
    >
      <Image
        src={project.img}
        alt={project.title}
        width={350}
        height={230}
        style={{ objectFit: "contain" }}
        className="w-[290px] sm:w-[350px] h-[230px] p-3 pointer-events-none"
      />
      <h2 className="text-md sm:text-lg p-5">{project.title}</h2>
    </motion.div>
  );
};
