import {AnimatedTextLines} from "./AnimatedTextLines.jsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = () => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const aboutText = "I build neural networks\nand full-stack apps that turn\ncomplex problems into intuitive solutions"

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        })
        tl.from(headerRef.current, {
            opacity: 0,
            y: "200",
            duration: 1,
            ease: "circ.out"
        }, "<+0.2")
    }, [])
    return (
        <div ref={contextRef}>
            <div
                style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
                <div className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
                     ref={headerRef}>
                    <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">403 Errors Forbidden</p>
                    <div className="px-10">
                        <h1 className='flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block leading-none'>Cole Godfrey</h1>
                    </div>
                </div>
            </div>
            <div className="relative px-10 text-black">
                <div className="border-t-2">
                    <div className="py-12 sm:py-16 text-end">
                        <AnimatedTextLines className="font-light uppercase value-text-responsive" text={aboutText} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedHeaderSection;