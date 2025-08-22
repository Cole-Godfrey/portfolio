import {useRef} from "react";

const ContactSummary = () => {
    const containerRef = useRef(null);
    return (
        <section ref={containerRef}
        className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
            {/* Marquee */}
            <div className="overflow-hidden font-light text-center contact-text-responsive">
                <p>
                    " Programming isn't about <br/>
                    <span className="font-normal">what you</span>{" "}<span className="italic">know</span> ; <br/>
                    it's about <br/>
                    <span className="font-normal">what you</span><span className="text-gold"> can figure out</span>. "'
                    <br/>
                </p>
                <br/>
                <p className="text-4xl">
                    - Chris Pine, "Learn to Program"
                </p>
            </div>
        </section>
    )
}

export default ContactSummary;