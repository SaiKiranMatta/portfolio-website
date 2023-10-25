import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Things I am good at
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    SkillSet.
                </h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
                {technologies.map((technology) => (
                    <motion.div
                        variants={textVariant(0.3)}
                        className="w-28 h-28"
                        key={technology.name}
                    >
                        {/* <BallCanvas icon={technology.icon} /> */}
                        <img
                            className=" w-[70%] h-[70%]"
                            src={technology.icon}
                            alt={technology.name}
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
