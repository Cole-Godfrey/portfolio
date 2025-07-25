import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const SkillsSummary = () => {
    useGSAP(() => {
        gsap.to("#title-skill-1", {
            xPercent: 20,
            scrollTrigger: {
                target: "#title-skill-1",
                scrub: true
            }
        });
        gsap.to("#title-skill-2", {
            xPercent: -30,
            scrollTrigger: {
                target: "#title-skill-2",
                scrub: true
            }
        });
        gsap.to("#title-skill-3", {
            xPercent: 100,
            scrollTrigger: {
                target: "#title-skill-3",
                scrub: true
            }
        });
    })
    return (
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
            <div id="title-skill-1">
                <p>React</p>
            </div>
            <div id="title-skill-2" className="flex items-center justify-center gap-3 translate-x-16">
                <p className="font-normal">Tailwind CSS</p>
                <div className="w-10 h-1 md:w-32 bg-gold"></div>
                <p>Python</p>
            </div>
            <div id="title-skill-3" className="flex items-center justify-center gap-3 -translate-x-48">
                <p>PyTorch</p>
                <div className="w-10 h-1 md:w-32 bg-gold"></div>
                <p className="italic">Next.js</p>
                <div className="w-10 h-1 md:w-32 bg-gold"></div>
                <p>Three.js</p>
            </div>
        </section>

    )
}

export default SkillsSummary;