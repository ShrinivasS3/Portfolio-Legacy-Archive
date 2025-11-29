"use client"

import React from "react";

import { Button } from "./ui/moving-borders";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Experience = () => {
    return (
        <div className="py-20 w-full px-5 md:px-0" id="experience">
            <h1 className="text-4xl md:text-6xl heading text-black">
                My <span className="text-green text-6xl md:text-8xl uppercase font-porsha">work experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 sm:px-10 md:px-0">
                    <Button
                        // key={card.id}
                        //     random duration will be fun , I think , may be not
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //     add these two
                            //     you can generate the color from here https://cssgradient.io/
                            background: "rgb(255,127,62)",
                            backgroundColor: "linear-gradient(17deg, rgba(255,127,62,1) 0%, rgba(233,151,109,1) 35%, rgba(255,251,218,1) 87%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        // remove bg-white dark:bg-slate-900
                        className="flex-1 w-full px-0 text-black dark:text-black border-green dark:border-green"
                    >
                        <CardContainer className="inter-var px-5 md:px-0">
                            <CardBody className="bg-cream relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-cream dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border  ">
                                <CardItem
                                as="p"
                                    translateZ="50"
                                    className="w-full text-md font-bold text-black dark:text-black flex flex-col md:flex-row md:justify-center justify-evenly "
                                >
                                    Bungee Tech | Internship<br />Machine Learning Engineer<br />Jun 2023 - Jul 2023
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-black text-sm text-left max-w-sm mt-2 dark:text-black"
                                >
                                    <br/>The project involved matching retail pet and grocery products to market conditions for effective pricing.<br/>
                                    <br/>The project managed a substantial dataset of 5TB, featuring over 100 million products with comprehensive attributes such as titles, images, descriptions, sizes, flavours, model numbers, and UPCs.<br/>
                                    <br/>Exploratory analysis was conducted on text and string-based data utilising Python libraries and SQL queries via AWS Athena.<br/>
                                    <br/>A Transformer-based model architecture with Approximate KNN was developed, which was evaluated for its performance, achieving benchmark F1 scores of 96% against the WDC product matching benchmark and 91% against an internal evaluation dataset.
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </Button>
                    <Button
                        // key={card.id}
                        //     random duration will be fun , I think , may be not
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //     add these two
                            //     you can generate the color from here https://cssgradient.io/
                            background: "rgb(255,127,62)",
                            backgroundColor: "linear-gradient(17deg, rgba(255,127,62,1) 0%, rgba(233,151,109,1) 35%, rgba(255,251,218,1) 87%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        // remove bg-white dark:bg-slate-900
                        className="flex-1 w-full px-0 text-black dark:text-black border-green dark:border-green"
                    >
                        <CardContainer className="inter-var px-5 md:px-0">
                            <CardBody className="bg-cream relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-cream dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full h-auto rounded-xl p-6 border  ">
                                <CardItem
                                as="p"
                                    translateZ="50"
                                    className="w-full text-md font-bold text-black dark:text-black flex flex-col md:flex-row md:justify-center justify-evenly "
                                >
                                    IIT Madras | Research Internship<br/>Spatial Navigation Team<br/>May 2024 - July 2024
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-black text-sm text-left max-w-sm mt-2 dark:text-black"
                                >
                                    <br/>Developed a system that uses Graph Database, Graph Neural Networks and Large Language Models(LLMs) to navigate a grid world, answer user queries, and provide relevant information about the environment.<br/>
                                    <br/>Processed the dataset to store it in a Neo4j graph database and for other downstream tasks.<br/>
                                    <br/>Used the LLM(Llama3) to question the graph database and generate Cypher queries for the questions asked by the user. The prompts were dynamically tuned using Langchain to improve query generation.<br/>
                                    <br/>Implemented Q-learning method to explore the grid world. Used the explored data to query the graph neural network using the LLM(Llama3).<br/>
                                    <br/>I presented this work in the 5th Annual <u><a href="https://sites.google.com/view/cnslm2024/posters#h.qkj582si2mw4"  target="_blank">CNSL Meet</a></u>.
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </Button>
            </div>

        </div>
    );
};

export default Experience;
