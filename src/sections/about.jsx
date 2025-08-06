import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import {useRef} from "react";
import {AnimatedTextLines} from "../components/AnimatedTextLines.jsx";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'

const About = () => {
    const text = `I build high-performant full-stack applications and machine learning models to solve the problems I'm passionate about.
`
    const imgRef = useRef(null)
    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });
    const aboutText = `As a computer science student at Washington State University, I have a deep passion for neural networks and their potential to solve complex problems through intelligent systems. This passion has fueled my personal projects, from building a convolutional neural network from scratch to analyze audio waveforms, to creating a vision model to aim, shoot, and move around in first person shooter games. When I'm not coding, I enjoy playing sports video games like MLB the Show, hanging out with friends, and managing my fantasy football team.`
    return (
        <section
            id="about"
            className="min-h-screen bg-black rounded-b-4xl"
        >
            <AnimatedHeaderSection
                subTitle={"The future belongs to those who code."}
                title={"About"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    src="images/profilepic.png"
                    alt="Me"
                    className="w-md rounded-3xl"
                    ref={imgRef}
                />
                <AnimatedTextLines text={aboutText} className="w-full"/>
            </div>
        </section>
    );
};

export default About;