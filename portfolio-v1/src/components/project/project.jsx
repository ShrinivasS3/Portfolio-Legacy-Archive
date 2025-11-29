import { useRef, useState } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaLink } from "react-icons/fa";

const lin = "https://www.instagram.com/reel/CyaREiaxY7o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="

const items = [
    {
        id: 1,
        title: "Is Deep Learning Enough For Handling X-Ray",
        img: "/Lunit Xray AI.webp",
        desc: "Analysed the Impact of Data Augmentation and Hyper-Parameter Tuning on DL Models.",
        content: <ul><li>The <b>Chest X-Ray</b> dataset of 14 Common Thorax Disease Categories containing <b>1,12,120 X-Ray Images</b> of 30,805 unique patients was used.</li>
        <li>During training <b>class weights</b> and various <b>transforms</b> were applied to <b>prevent overfitting</b>.</li>
        <li>The training process was conducted using grid search with different <b>optimizers</b>,<b>loss functions</b> and <b>batch size</b>.</li>
        <li>The performance of various <b>pretrained models</b> like VGG, DarkNet, AlexNet and own models were <b>trained and evaluated</b>.</li>
        <li>Among these models, <b>AlexNet</b> was chosen as it had the <b>best results</b>.</li>
        <li>Then to improve the performance further, <b>Data Augmentation</b> techniques like <b>Contrast
        Limited Adaptive Histogram Equalization (CLAHE)</b> and <b>Hyper-Parameters</b> like
        Learning Rate, Batch Size, etc. were tuned.</li>
        <li>The <b>accuracy</b> was <b>improved</b> by about <b>10%</b> due to the data preprocessing and hyperparameter tuning.</li></ul>,
    },
    {
        id: 2,
        title: "An Efficient LLM For Indian Judicial System",
        img: "/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg",
        desc: "Developed a novel LawBot for the Indian Judicial System, addressing limitations of existing legal tech solutions.",
        content: <ul><li>The data contains <b>books and case files</b> related to family disputes and domain name dispute.</li>
        <li>Around <b>200 case</b> files were scrapped from the internet.</li>
        <li>The <b>data</b> was <b>cleaned</b> as the first step of preprocessing.</li>
        <li>Then the <b>dataset</b> was prepared seperately for <b>domain augmentation</b> and for <b>supervised training</b>.</li>
        <li>The <b>dataset</b> for the <b>domain augmentation</b> was prepared by <b>splitting the text</b> from the books as <b>chuncks</b> of <b>1000 words</b> with an <b>overlap</b> of <b>200 words</b>.</li>
        <li>The <b>dataset</b> for <b>supervised training</b> was prepared by performing <b>Retrival Augmentation Generation (RAG)</b> to produce <b>&quot;input&quot;</b> and <b>&quot;output&quot;</b> pairs.</li>
        <li>The <b>Mistral 7B Instruct v0.2</b> was used. The <b>model</b> was <b>quantised</b> with <b>LoRA adaptors</b>.</li>
        <li>The <b>model</b> was then <b>fine-tuned sequentially</b> on the <b>pre-processed data</b>.</li></ul>,
    },
    {
        id: 3,
        title: "Generating Music from Text",
        img: "/marius-masalar-rPOmLGwai2w-unsplash.jpg",
        desc: "Currently working on a project to generate music from text.",
        content: <ul><li>This project is based on the Google research paper MusicLM.</li>
        <li>AudioSet , AudioCaps and MusicCaps are the dataset that are used for this project.</li>
        <li>This utilises MuLan: A Joint Embedding of Music Audio and Natural Language,
        Soundstream - A Neural Audio Codec and word2vec BERT.</li>
        <li>Around 50% of the code has been completed and the models are yet to be
        trained.</li></ul>,
    },
    {
        id: 4,
        title: "Interactive Captioning of Medical Images",
        img: "/Chest-radiography.webp",
        desc: "Currently working on a project to create a medical image captioning and a question answering system to reduce the delay in the treatment of patients.",
        content: <ul><li>The dataset that are used for this project are MediCat, Path VQA, MIMIC-CXR, Open-I and MSCOC.</li>
        <li>This project utilises the Bootstrapping Language-Image Pre-training (BLIP) Model to caption and answer the questions based on the input Medical
        Image.</li></ul>,
    },
    {
        id: 5,
        title: "Dawn Of Innovatia",
        img: "/JWS 16K 2D.jpg",
        desc: "An animated short film using Blender, illustrating how an entrepreneur can revolutionise the world through innovation.",
        content: <><br/>Created a photo-realistic environment, rigged and animated the Protagonist. The whole animation was rendered in EEVEE.<br/><br/><a href={lin}><FaLink /> - Theme Reveal</a></>,
    },
    {
        id: 6,
        title: "ESummit Kairos: The Time of our Life",
        img: "/mike-gorrell-61cMb0WQAMA-unsplash.jpg",
        desc: "Working on the Theme Reveal and Motion Posters for the event.",
        content: <><br/>&quot;Creating a new way of promotion using motion posters.&quot;</>,
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <motion.div layout transition={{ layout:{ duration : 1, type:"spring" } }} className="textContainer" style={{y}}  onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen &&
                            <motion.div layout className="imageContainer" ref={ref}>
                                <motion.img layout src={item.img} alt="" />
                            </motion.div>
                        }
                        <motion.h2 layout>{item.title}</motion.h2>
                        {isOpen &&
                            <div className="readmore">
                                <motion.p>{item.desc}</motion.p>
                                <motion.p>{item.content}</motion.p>
                                {/* <motion.a><FiGithub />GitHub</motion.a> */}
                            </div>
                        }
                        <motion.p layout className="click">Click<br/>Here</motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Project = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div id="PROJECTS" className="portfolio" ref={ref}>
            <div className="progress">
                <h1>PROJECTS</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Project;