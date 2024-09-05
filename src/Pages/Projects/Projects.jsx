import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className="p-16">
            <div className="text-center mt-2 ">
                <div className="hover:translate-y-3 transition-all duration-1000">
                    <h3 className="text-white text-xl font-semibold">PROJECTS</h3>
                    <h1 className="ext-white  font-semibold mb-20">Recently I have build some projects.</h1>
                </div>
            </div>
            <div className="space-y-8">
                <div className="flex space-x-5 border-blue-500 border-2 shadow-2xl hover:shadow-blue-500 hover:translate-y-5 hover:rounded-2xl transition-all duration-1000 ">
                    <div className="w-1/3">
                        <img className=" shadow-2xl shadow-cyan-600 translate-x-5 translate-y-5 p-2 " src="./../../../public/ProjectPhoto/AI_image.jpg"/>
                    </div>
                    <div className="w-2/3 pl-5 pr-3">
                        <h3 className="text-3xl mb-4 mt-2">Crack AI</h3>
                        <p><span className="text-red-500">Details : </span>I've created a website that uses ClipDrop.ai to offer a wide range of AI-powered image editing tools. With it, users can generate images from text, making it easy to bring ideas to life with just a description. The site also allows you to crop or uncrop images, offering flexibility in adjusting image composition. Additionally, it can upscale images to improve resolution, perfect for enhancing low-quality pictures. You can remove backgrounds effortlessly, ideal for product images or creating professional-looking visuals. On top of that, the site can extract text from images, making it super convenient for digitizing printed or handwritten content. It's a versatile platform designed to simplify complex image editing tasks and make them accessible to everyone, whether you're a designer, marketer, or just someone who needs quick, high-quality edits.</p>
                        <p><span className="text-red-500">Tech</span>: The website is built with React Library. This website uses some other packages including React.js,ClipDrop.AI,Gemini(1.5), Tailwind CSS, ,  Axios, Firebase,react-dom, sweet alert2, and more.</p>

                        <div className="flex mt-4 mb-3 justify-around">
                            <li><Link to="">Client</Link></li>
                            <li><Link to="">Server</Link></li>
                            <li><Link to="">Live</Link></li>
                        </div>
                    </div>
                    
                </div>
                <div className="flex space-x-5 border-blue-500 border-2 shadow-2xl hover:shadow-blue-500 hover:translate-y-5 hover:rounded-2xl transition-all duration-1000 ">
                    <div className="w-1/3">
                        <img className=" shadow-2xl shadow-cyan-600 translate-x-5 translate-y-5 p-2 " src="./../../../public/ProjectPhoto/contest1.png"/>
                    </div>
                    <div className="w-2/3 pl-5 pr-3">
                        <h3 className="text-3xl mb-4 mt-2">Contest Hub</h3>
                        <p><span className="text-red-500">Details : </span>I have made a project for managing contests named Contest Hub.</p>
                        <h3 className="text-red-500">Features</h3>
                        <div className="p-5">
                            <li>User participate a contest</li>
                            <li>User have to pay for registration a contest</li>
                            <li>User can know the submitted and winned contests</li>
                            <li>User can also can create contests , then he will be regarded as creator.</li>
                            <li>Creator can manages contests before admin's approval</li>
                            <li>After approval from Admin , creator's contest will be shown</li>
                            <li>An Admin can change role of user(make admin or make creator)</li>
                            <li>An Admin manages Contests and users</li>
                        </div>
                        <p><span className="text-red-500">Tech</span>: For this project., I used react.js , tailwind.CSS , daisyUI, Framer, npm features( like typewriter , moment.js), Stripe/stripe-js, Tanstack/react-query, Axios, Firebase, moment .js,react-dom, sweet alert2, MongoDB</p>
                        <p><span className="text-red-500">Authentication:</span>GoogleSignIn, EmailPasswordSignIn (From Firebase)</p>
                        <p><span className="text-red-500">Hosting:</span>Firebase</p>

                        <div className="flex mt-4 mb-3 justify-around">
                            <li><Link to="">Client</Link></li>
                            <li><Link to="">Server</Link></li>
                            <li><Link to="">Live</Link></li>
                        </div>
                    </div>
                    
                </div>
                <div className="flex space-x-5 border-blue-500 border-2 shadow-2xl hover:shadow-blue-500 hover:translate-y-5 hover:rounded-2xl transition-all duration-1000 ">
                    <div className="w-1/3">
                        <img className=" shadow-2xl shadow-cyan-600 translate-x-5 translate-y-5 p-2 " src="./../../../public/ProjectPhoto/FoodResturant.jpg"/>
                    </div>
                    <div className="w-2/3 pl-5 pr-3">
                        <h3 className="text-3xl mb-4 mt-2">Bistro Buz</h3>
                        <p><span className="text-red-500">Details : </span>I have created a project on online food oder named:Bistro Buz.</p>
                        <h3 className="text-red-600">Features</h3>
                        <div>
                            <li>User have to register </li>
                            <li>User can order a or multiple food</li>
                            <li>For oder items , user have to pay first through stripe</li>
                            <li>After payment , User have to get approval from admin</li>
                            <li>Admin can add food item or modify item</li>
                            <li>Delete user or make user admin</li>
                        </div>
                        <div>
                        <p><span className="text-red-500">Tech</span>: For this project., I used react.js , tailwind.CSS , daisyUI, rechart.js ,npm features( like typewriter , moment.js), Stripe/stripe-js, Tanstack/react-query, Axios, Firebase, moment .js,react-dom, sweet alert2, MongoDB</p>
                        <p><span className="text-red-500">Authentication:</span>GoogleSignIn, EmailPasswordSignIn (From Firebase)</p>
                        <p><span className="text-red-500">Hosting:</span>Firebase</p>
                        </div>
                        <div className="flex mt-4 mb-3 justify-around">
                            <li><Link to="">Client</Link></li>
                            <li><Link to="">Server</Link></li>
                            <li><Link to="">Live</Link></li>
                        </div>

                        <h2 className="text-red-950 font-bold hover:text-red-500 mb-5">Few sites is updating</h2>
                    </div>
                    
                </div>
                <div className="flex space-x-5 border-blue-500 border-2 shadow-2xl hover:shadow-blue-500 hover:translate-y-5 hover:rounded-2xl transition-all duration-1000 ">
                    <div className="w-1/3">
                        <img className=" shadow-2xl shadow-cyan-600 translate-x-5 translate-y-5 p-2 " src="./../../../public/ProjectPhoto/Havenhue.jpeg"/>
                    </div>
                    <div className="w-2/3 pl-5 pr-3">
                        <h3 className="text-3xl mb-4 mt-2">Home Management</h3>
                        <p><span className="text-red-500">Details : </span>I have created a project for online booking home:Haven Hue</p>
                        <h3 className="text-red-600">Features</h3>
                        <div>
                            <li>User have to register </li>
                            <li>User can book a or multiple home</li>
                            <li>User can add a or multiple home item</li>
                        </div>
                        <div>
                        <p><span className="text-red-500">Tech</span>: For this project., I used react.js , tailwind.CSS , daisyUI, npm features( like typewriter , moment.js),  react-query, Firebase, moment .js,react-dom, MongoDB</p>
                        <p><span className="text-red-500">Authentication:</span>GoogleSignIn, EmailPasswordSignIn (From Firebase)</p>
                        <p><span className="text-red-500">Hosting:</span>Firebase</p>
                        </div>
                        <div className="flex mt-4 mb-3 justify-around">
                            <li><Link to="">Client</Link></li>
                            <li><Link to="">Server</Link></li>
                            <li><Link to="">Live</Link></li>
                        </div>

                        <h2 className="text-red-950 font-bold hover:text-red-500 mb-5">Few sites is updating</h2>
                    </div>
                    
                </div>
                <div className="flex space-x-5 border-blue-500 border-2 shadow-2xl hover:shadow-blue-500 hover:translate-y-5 hover:rounded-2xl transition-all duration-1000 ">
                    <div className="w-1/3">
                        <img className=" shadow-2xl shadow-cyan-600 translate-x-5 translate-y-5 p-2 " src="./../../../public/ProjectPhoto/Havenhue.jpeg"/>
                    </div>
                    <div className="w-2/3 pl-5 pr-3">
                        <h3 className="text-3xl mb-4 mt-2">StudyBudy</h3>
                        <p><span className="text-red-500">Details : </span>I have created a project for online booking home:Haven Hue</p>
                        <h3 className="text-red-600">Features</h3>
                        <div>
                            <li>User have to register </li>
                            <li>User can book a or multiple home</li>
                            <li>User can add a or multiple home item</li>
                        </div>
                        <div>
                        <p><span className="text-red-500">Tech</span>: For this project., I used react.js , tailwind.CSS , daisyUI, npm features( like typewriter , moment.js),  react-query, Firebase, moment .js,react-dom, MongoDB</p>
                        <p><span className="text-red-500">Authentication:</span>GoogleSignIn, EmailPasswordSignIn (From Firebase)</p>
                        <p><span className="text-red-500">Hosting:</span>Firebase</p>
                        </div>
                        <div className="flex mt-4 mb-3 justify-around">
                            <li><Link to="">Client</Link></li>
                            <li><Link to="">Server</Link></li>
                            <li><Link to="">Live</Link></li>
                        </div>

                        <h2 className="text-red-950 font-bold hover:text-red-500 mb-5">Few sites is updating</h2>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Projects;