import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const StudyCard = ({
    index,
    title,
    subject,
    grade,
    date,
    company_name,
    icon,
}) => (
    <Tilt className="xs:w-[333px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt="College"
                    className=" w-24 h-24 rounded-full object-contain self-center mb-3"
                />

                <h3 className="text-white text-[16px] font-bold text-center">
                    {title}
                </h3>
                <p>{subject}</p>
                <p className="text-[#915EFF]">{grade}</p>
                <p className=" text-center">{company_name}</p>
                <p>{date}</p>
            </div>
        </motion.div>
    </Tilt>
);

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I am a dedicated and enthusiastic learner currently pursuing my
                Bachelor's in Computer Science. I am committed to consistently
                maintaining excellent grades and am always eager to expand my
                knowledge in the field.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {education.map((course, index) => (
                    <StudyCard key={course.title} index={index} {...course} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
