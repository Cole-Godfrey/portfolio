import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const AnimatedTextLines = ({text, className}) => {
    const lines = text.split('\n').filter((line) => line.trim() !== '')
    const containerRef = useRef(null);
    const lineRefs = useRef([]);

    useGSAP(() => {
        if (lineRefs.current.length > 0) {
            gsap.from(lineRefs.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "back.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    markers: false
                }
            })
        }
    })
    return <div className={className}
                ref={containerRef}>{lines.map((line, index) => (
        <span key={index}
              className="block leading-relaxed tracking-wide text-pretty"
              ref={(el) => (lineRefs.current[index] = el)}>{line}</span>
    ))}</div>;
}