import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import {skillsData} from "../constants/index.js"
import {useRef} from "react";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
    const text = "I work with a wide variety of technologies and frameworks, specializing in creating and using machine learning models in conjunction with full-stack apps."
    const skillsRefs = useRef([])
    const isDesktop = useMediaQuery({minWidth: "48rem" });
    useGSAP(() => {
        skillsRefs.current.forEach((el) => {
            if (!el) return;
            gsap.from(el, {
                y: 200,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%"
                },
                duration:1,
                ease: "circ.out"
            })
        })
    }, [])
    return <section
        id="skills"
        className="min-h-screen bg-black rounded-t-4xl">
        <AnimatedHeaderSection
            subTitle={"npm install --global skills@latest"}
            text={text}
            title={"Skills"}
            textColor={"text-white"}
            withScrollTrigger={true}
        />
        {skillsData.map((skill, index) => (
            <div
                ref={(el) => (skillsRefs.current[index] = el)}
                key={index}
                className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
                style={
                    isDesktop
                        ? {
                            top: `calc(10vh + ${index * 5}em)`,
                            marginBottom: `${(skillsData.length - index - 1) * 5}rem`,
                        }
                        : { top: 0 }
                }
            >
                <div
                    className="flex items-center justify-between gap-4 font-light"
                >
                    <div className="flex flex-col gap-6 w-full">
                        <h2 className="text-4xl lg:text-5xl">
                            {skill.title}
                        </h2>
                        <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                            {skill.description}
                        </p>
                        <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                            {skill.items.map((item, itemIndex) => (
                                <div
                                    key={`${index}-${itemIndex}`}
                                >
                                    <h3 className="flex">
                                        <span className="mr-12 text-2xl text-white/30">
                                            0{itemIndex + 1}
                                        </span>
                                        {item.title}
                                    </h3>
                                    {itemIndex < skill.items.length - 1 && (<div className="w-full h-px my-2 bg-white/30"></div>)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </section>
};

export default Skills;