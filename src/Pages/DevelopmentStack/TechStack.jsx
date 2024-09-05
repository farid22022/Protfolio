import html from "./../../../public/TechLogo/html-1.png";
import atom from "./../../../public/TechLogo/react-1.png";
import css from "./../../../public/TechLogo/css3-1.png";
import express from "./../../../public/TechLogo/express-js-1.png";
import firebase from "./../../../public/TechLogo/firebase-1.png";
import JavaScript from "./../../../public/TechLogo/javascript-1.png";
import jwtToken from "./../../../public/TechLogo/jwt-1.png"
import mongodb from "./../../../public/TechLogo/mongodb-1.png";
import nodejs from "./../../../public/TechLogo/nodejs-1.png";
import react_dom from "./../../../public/TechLogo//router-1.png";
import tailwind from "./../../../public/TechLogo/tailwind-1.png";
import github from "./../../../public/SocialIcon/github.png"
import linkedin from "./../../../public/SocialIcon/linkedin.png"
import daisyUI from "./../../../public/TechLogo/daisyUI.png";
import { Link } from "react-router-dom";




const TechStack = () => {
    return (
        <div className="text-center">
            <div className="text-center text-2xl font-semibold">
                <h1 className="p-5">My Tech Stack</h1>
            </div>
            <div className="p-3 text-center">
                <h2>Technologies I have been working with recently.</h2>
            </div>
            <div className="translate-x-96 p-5 text-center items-center justify-center">
                <div className="flex space-x-8 w-1/2 h-1/4 p-5">
                    <div className="w-1/12 h-1/6">
                        <img className="" src={html}/>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={css}></img>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={daisyUI}></img>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={JavaScript}/>
                    </div>
                    <div className=" w-1/12 h-1/4">
                        <img className="" src={tailwind}/>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={atom}/>
                    </div>
                </div>
                <div className="flex space-x-8 w-1/2 h-1/4">
                    <div className="w-1/12 h-1/6">
                        <img className="" src={react_dom}/>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={firebase}></img>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={nodejs}/>
                    </div>
                    <div className=" w-1/12 h-1/4">
                        <img className="" src={express}/>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={mongodb}/>
                    </div>
                    <div className="w-1/12 h-1/4">
                        <img className="" src={jwtToken}/>
                    </div>
                </div>
            </div>
            <div className="pt-16">
                <hr/>
            </div>
            <div className="flex space-x-5 text-center justify-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/">Contact Me</Link></li>
            </div>

            <div className="flex space-x-5 text-center justify-center mt-12">
                <li><Link><img className="w-2/3" src={linkedin}/></Link></li>
                <li><Link><img className="w-2/3" src={github}/></Link></li>
            </div>
            <div className="text-center mt-12">
                <h3>Copyright © 2024 - All right reserved by Me</h3>
            </div>
        </div>
    );
};

export default TechStack;