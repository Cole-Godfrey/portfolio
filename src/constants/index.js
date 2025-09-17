export const skillsData = [
    {
        title: "Frontend Development",
        description:
            'import { frontendSkills } from "skills.jsx"',
        items: [
            {
                title: "React",
                description: "(Component-based UI library for building dynamic applications)",
            },
            {
                title: "TailwindCSS",
                description: "(Utility-first CSS framework for rapid styling and customization)",
            },
            {
                title: "Next.js",
                description: "(React framework for server-side rendering and static site generation)",
            },
            {
                title: "Three.js",
                description: "(JavaScript library for creating 3D graphics in the browser)",
            },
        ],
    },
    {
        title: "Backend & AI Development",
        description:
            "from skills import Backend, AI",
        items: [
            {
                title: "Python",
                description: "(Versatile language for scripting, automation, and data processing)",
            },
            {
                title: "PyTorch",
                description: "(Deep learning framework for building and training neural networks)",
            },
        ],
    },
];
export const projects = [
    {
        id: 1,
        name: "BOTTI (Neural Network For Valorant)",
        description:
            "A Deep Q Network designed to play first person shooter games.",
        href: "",
        image: "/assets/projects/botti.png",
        bgImage: "/assets/backgrounds/valorantbg.jpg",
        github: "https://github.com/Cole-Godfrey/botti",
        frameworks: [
            { id: 1, name: "Python" },
            { id: 2, name: "PyTorch" },
            { id: 3, name: "OpenCV" },
        ],
    },
    {
        id: 2,
        name: "Audio CNN from Scratch",
        description:
            "An audio classification model trained from scratch using a convolutional neural network.",
        href: "",
        image: "/assets/projects/audiocnn.png",
        bgImage: "/assets/backgrounds/cnnbg.jpg",
        github: "https://github.com/Cole-Godfrey/audio-cnn",
        frameworks: [
            { id: 1, name: "Python" },
            { id: 2, name: "PyTorch" },
            { id: 3, name: "Next.js" },
            { id: 4, name: "React" },
            { id: 5, name: "TailwindCSS" },
        ],
    },
    {
        id: 3,
        name: "Mario Reinforcement Learning",
        description:
            "A reinforcement learning agent trained to play Super Mario Bros. using proximal policy optimization.",
        href: "",
        image: "/assets/projects/marioppo.png",
        bgImage: "/assets/backgrounds/mariobg.jpg",
        github: "https://github.com/Cole-Godfrey/mariorlppo",
        frameworks: [
            { id: 1, name: "Python" },
            { id: 2, name: "PyTorch" },
            { id: 3, name: "Stable Baselines" },
            { id: 4, name: "Gymnasium" },
            { id: 5, name: "OpenCV" },
        ],
    }
];
export const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/c-godfrey/" },
    { name: "GitHub", href: "https://github.com/Cole-Godfrey/" },
];