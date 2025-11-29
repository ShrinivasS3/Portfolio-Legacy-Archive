import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
        IconUser,
} from "@tabler/icons-react";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-stars";
import { Briefcase, Camera, Code2Icon, Pencil } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { BiBookOpen, BiLinkExternal } from "react-icons/bi";
import { LiaLinkedin } from "react-icons/lia";
import { TbCube3dSphere } from "react-icons/tb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Main() {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full z-10"> 
            <Header />
            <BentoGrid className="z-20 w-full"
            >
                {items.map((item, i) => (
                        <BentoGridItem
                                key={i}
                                link={item.link}
                                tar={item.tar}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={item.className}
                        />
                ))}
            </BentoGrid>
            <Footer />
            </div>
        );
}
const Skeleton = ({
    title,
    icon,
}: {
    title?: string | React.ReactNode;
    icon?: React.ReactNode;
}) => {
return (
    <div className="flex flex-1 w-full h-full min-h-[4rem] rounded-xl">
        <GlowingStarsBackgroundCard className="w-full rounded-xl">
            <div className="absolute px-5 items-center justify-center bottom-3 flex flex-row group-hover/bento:-translate-y-2 transition duration-200 group-hover/bento:scale-105">
                <GlowingStarsTitle className="pr-6">{icon}</GlowingStarsTitle>
                <GlowingStarsDescription className=" text-lg">{title}</GlowingStarsDescription>
            </div>
        </GlowingStarsBackgroundCard>
    </div>
);
};

const items = [
                {
                    link: "",
                    title: "Currently Working On",
                    description: "",
                    tar: "",
                    header: <Skeleton title={"Building an end-to-end LLM-based application and exploring personal brand development."} icon={<Code2Icon className="h-8 w-8 text-highlight" />}/>,
                    className: "md:col-span-2 md:row-span-1", // High importance
                },
                {
                    link: "https://portfolio.shrinivassesadri.in",
                    title: "My Portfolio",
                    description: <BiLinkExternal className="h-4 w-4"/>,
                    tar: "_blank",
                    header: <Skeleton title={"Dive into my world of creativity, from 3D modeling to AI-driven innovations."} icon={<Briefcase className="h-8 w-8 text-highlight" />}/>,
                    className: "md:col-span-1 md:row-span-2", // Medium-high importance
                },
                {
                    link: "",
                    title: "About Me",
                    description: "",
                    tar: "",
                    header: <Skeleton title={"A creative and technical all-rounder exploring the intersection of art, technology, and time, blending music, 3D modeling, photography, and AI research."} icon={<IconUser className="h-8 w-8 text-highlight" />} />,
                    className: "md:col-span-1 md:row-span-2", // High importance
                },
                {
                    link: "https://github.com/ShrinivasS3",
                    title: "GitHub",
                    description: <BiLinkExternal className="h-4 w-4"/>,
                    tar: "_blank",
                    header: <Skeleton title={"Journeying through the vast landscape of research."} icon={<FaGithub className="h-8 w-8 text-highlight" />} />,
                    className: "md:col-span-1", // Medium-high importance
                },
                {
                    link: "https://www.artstation.com/shrinivassesadri",
                    title: "ArtStation",
                    description: <BiLinkExternal className="h-4 w-4"/>,
                    tar: "_blank",
                    header: <Skeleton title={"Where I create concepts and environments."} icon={<TbCube3dSphere className="h-8 w-8 text-highlight" />} />,
                    className: "md:col-span-1", // Medium importance
                },
                {
                    link: "https://www.deviantart.com/3ss123",
                    title: "DeviantArt",
                    description: <BiLinkExternal className="h-4 w-4"/>,
                    tar: "_blank",
                    header: <Skeleton title={"Explore my art from Traditional to Digital."} icon={<Pencil className="h-8 w-8 text-highlight" />} />,
                    className: "md:col-span-1", // Medium importance
                },
                {
                    link: "https://www.behance.net/shrinivassesadri",
                    title: "Behance",
                    description: <BiLinkExternal className="h-4 w-4"/>,
                    tar: "_blank",
                    header: <Skeleton title={"Capturing the world's magic through frames"} icon={<Camera className="h-8 w-8 text-highlight" />} />,
                    className: "md:col-span-1", // Medium-low importance
                },
                {
                    link: "https://blog.shrinivassesadri.in",
                    title: "Blog - Synchronized Chaos",
                    description: <BiLinkExternal className="h-4 w-4"/>,
                    tar: "_blank",
                    header: <Skeleton title={"Explore my thoughts on my passion..."} icon={<BiBookOpen className="h-8 w-8 text-highlight" />} />,
                    className: "md:col-span-1", // Medium-low importance
                },
                {
                    link: "https://www.linkedin.com/in/shrinivassesadri/",
                    title: "LinkedIn",
                    description: <BiLinkExternal className="h-4 w-4"/>,
                    tar: "_blank",
                    header: <Skeleton title={"Connect with me on LinkedIn"} icon={<LiaLinkedin className="h-8 w-8 text-highlight" />} />,
                    className: "md:col-span-1", // Medium-high importance
                },
                // {
                //     description: "Got a question, proposal, project, or want to work together on something?",
                //     header: <Skeleton title={"Reach Me - shrini1908@gmail.com"} icon={<MailIcon className="h-8 w-8 text-highlight" />} />,
                //     className: "md:row-span-full", // High importance; spans entire width for visibility
                // },
            ];