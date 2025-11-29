"use client"

import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";

const Experience = () => {
        return (
                <section className="w-[70%]" id="experience">
                    <h1 className="text-4xl md:text-6xl lg:text-6xl heading text-black font-lora">
                        My{" "}
                        <span className="text-secondary text-5xl md:text-7xl lg:text-7xl uppercase font-lora">
                            work experience
                        </span>
                    </h1>
                    <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:px-10 md:px-0">
                        {/* Card 1 */}
                        <CardSpotlight className="bg-primary p-6 flex flex-col justify-between h-full rounded-3xl">
                            <p className="relative z-20 w-full font-playfair text-base font-bold text-cream text-center mb-4">
                                Bungee Tech | Internship<br />
                                Machine Learning Engineer<br />
                                Jun 2023 - Jul 2023
                            </p>
                            <div className="relative z-20 text-cream font-inter text-sm text-left max-w-full">
                                <ol className="list-decimal ml-5">
                                    <li>
                                    The project involved matching retail pet and grocery products to market conditions for effective pricing.
                                    </li>
                                    <li>
                                    The project managed a substantial dataset of 5TB, featuring over 100 million products with comprehensive attributes such as titles, images, descriptions, sizes, flavours, model numbers, and UPCs.
                                    </li>
                                    <li>
                                    Exploratory analysis was conducted on text and string-based data utilising Python libraries and SQL queries via AWS Athena.
                                    </li>
                                    <li>
                                    A Transformer-based model architecture with Approximate KNN was developed, which was evaluated for its performance, achieving benchmark F1 scores of 96% against the WDC product matching benchmark and 91% against an internal evaluation dataset.
                                    </li>
                                </ol>
                            </div>

                        </CardSpotlight>

                        {/* Card 2 */}
                        <CardSpotlight className="bg-primary p-6 flex flex-col justify-between h-full rounded-3xl">
                            <p className="relative z-20 w-full font-playfair text-base font-bold text-cream text-center mb-4">
                                IIT Madras | Research Internship<br />
                                Spatial Navigation Team<br />
                                May 2024 - July 2024
                            </p>
                            <div className="relative z-20 text-cream font-inter text-sm text-left max-w-full">
                                <ol className="list-decimal ml-5">
                                    <li>
                                        Developed a system that uses Graph Database, Graph Neural Networks,
                                        and Large Language Models (LLMs) to navigate a grid world, answer
                                        user queries, and provide relevant information about the environment.
                                    </li>
                                    <li>
                                        Processed the dataset to store it in a Neo4j graph database and for
                                        other downstream tasks.
                                    </li>
                                    <li>
                                        Used the LLM (Llama3) to question the graph database and generate
                                        Cypher queries for the questions asked by the user. The prompts were
                                        dynamically tuned using Langchain to improve query generation.
                                    </li>
                                    <li>
                                        Implemented Q-learning method to explore the grid world. Used the
                                        explored data to query the graph neural network using the LLM
                                        (Llama3).
                                    </li>
                                    <li>
                                        I presented this work in the 5th Annual{" "}
                                        <u>
                                            <a
                                                href="https://sites.google.com/view/cnslm2024/posters#h.qkj582si2mw4"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                CNSL Meet
                                            </a>
                                        </u>.
                                    </li>
                                </ol>
                            </div>
                        </CardSpotlight>
                    </div>
                </section>
            );
};

export default Experience;
