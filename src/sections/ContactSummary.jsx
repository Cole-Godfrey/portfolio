import {useRef} from "react";
import Marquee from "../components/Marquee.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
    const containerRef = useRef(null);
    const items = ["Innovation", "Precision", "Collaboration", "Excellence"]
    const items2 = ["contact me", "contact me", "contact me", "contact me"]
    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        });
    });
    return (
        <section ref={containerRef}
        className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
            <Marquee items={items}/>
            <div className="overflow-hidden font-light text-center contact-text-responsive">
                <p>
                    " Programming isn't about <br/>
                    <span className="font-normal">what you</span>{" "}<span className="italic">know</span> ; <br/>
                    it's about <br/>
                    <span className="font-normal">what you</span><span className="text-gold"> can figure out</span>. "'
                    <br/>
                </p>
                <p className="text-4xl">
                    - Chris Pine, "Learn to Program"
                </p>
            </div>
            <Marquee items={items2} reverse={true}
                     className={"text-black bg-transparent border-y-2"}
                     iconClassName="stroke-gold stroke-2 text-primary"
                     icon={"material-symbols-light:square"}
            />

        </section>
    )
}

export default ContactSummary;