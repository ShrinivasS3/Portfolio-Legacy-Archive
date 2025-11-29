import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaArtstation } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Profiles = () => {
return (
        <>
        <p> <HiLocationMarker/> Trichy, Tamil Nadu  <b>|</b>  <FaPhoneAlt/> 8270168338  <b>|</b>  <GrMail/> shrini1908@gmail.com<br/><br/></p>
        <p><FaLinkedinIn/><a href="https://www.linkedin.com/in/shrinivas-sesadri-52118a263"> Shrinivas Sesadri</a><br/><i>LinkedIn</i></p>
        <p><FaGithub/><a href="https://github.com/ShrinivasS3"> ShrinivasS3</a><br/><i>GitHub</i></p>
        <p><FaArtstation/><a href="https://www.artstation.com/shrinivassesadri8"> Shrinivas Sesadri</a><br/><i>ArtStationn</i></p>
        <p><FaBehance/><a href="https://www.behance.net/shrinivsesadri1"> Shrinivas Sesadri</a><br/><i>Behance</i></p>
        <p><FaDeviantart/><a href="https://www.deviantart.com/3ss123"> 3SS123</a><br/><i>DeviantArt</i></p>
        </>
);
}

export default Profiles
