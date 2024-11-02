import { useState, useEffect } from "react";
import "../style.css"
import "../fonts.css"
import Header from "../components/head/Header";
import Head from "../components/head/Head";
import Footer from "../components/footer/Footer";
import oliver_queen from "../img/oliver_queen.png"
import selina_kyle from "../img/selina_kyle.png"
import bruce_wayne from "../img/bruce_wayne.png"
import bruce_banner from "../img/bruce_banner.png"
import tony_stark from "../img/tony_stark.png"
import selina_kyle_two from "../img/selina_kyle_two.png"
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';


const About = () => {
    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
        setVisible(true) 
        }  
        else if (scrolled <= 300){ 
        setVisible(false) 
        } 
    }; 
    
    const handleClick = () =>{
        window.scroll({
            top:0,
            behavior: "smooth"
        })
    }

    window.addEventListener('scroll', toggleVisible);

    return ( 
        <>
            <div className="font-custom">
                <div className=""><Header/></div>

                {/* Hero Section */}
                <div className="hero py-4 md:py-8 flex items-center" >
                    <div className="flex flex-col items-center w-full px-4 md:px-20">
                            <Fade direction="down" triggerOnce="true">
                                <h2 className="text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>
                                    About Us 
                                </h2><br/>
                            </Fade>
                    </div>
                </div>    
                

                {/* Back to top button */}
                <FaArrowUp onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-primary rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-primary hover:border-primary hover:border-2"/>  

                {/* History  */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <Fade direction="left" triggerOnce="true"><Head header="History"/></Fade>
                    <div className="grid justify-items-start">
                        <Fade direction="up" triggerOnce="true">
                            <p className="text-justify text-sm md:text-base">
                            Founded by a group of visionary educators who recognized the need for a dedicated institution that would serve the educational needs of our community. With a small building, limited resources, and a handful of passionate teachers, the school opened its doors to its first students. Despite the challenges, these early years laid the groundwork for the school's growth and development.
                            </p> <br/>
                            <p className="text-justify text-sm md:text-base">Our school has experienced significant growth and expansion over the years. Increased enrollment led to the construction of larger facilities and the addition of new classrooms, libraries, laboratories, and sports facilities. The dedication of our faculty and staff, along with the support of the community, played a vital role in the school's progress.
                            </p><br/>
                            <p className="text-justify text-sm md:text-base">As we look to the future, our school remains committed to providing an exceptional education and preparing students for the challenges and opportunities of tomorrow. We continuously strive to evolve and innovate, ensuring that our students receive a well-rounded education that equips them with the skills, knowledge, and values necessary to thrive in a rapidly changing world.
                            </p><br/>
                        </Fade>
                    </div> 
                </div>

                {/* Happy Girl */}
                <div className="pod"></div>

                {/* Mission & Vision */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <Fade direction="left" triggerOnce="true"><Head header="Mission & Vision"/></Fade>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-between items-center">
                        {/* Value 1*/}
                        <div className="grid gap-10">
                            <Fade triggerOnce="true">
                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">1</p>
                                <p className="text-left text-sm md:text-base">To provide a nurturing and inclusive learning environment that empowers students to reach their full potential academically.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">2</p>
                                <p className="text-left text-sm md:text-base">To foster a love for learning, critical thinking, and creativity.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">3</p>
                                <p className="text-left text-sm md:text-base">See a future where every student is inspired to excel and make a positive impact in the world.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">4</p>
                                <p className="text-left text-sm md:text-base">To be a center of excellence in education, where students are equipped with the skills, knowledge, and values to contribute meaningfully to their communities.
                                </p>
                            </div>
                            </Fade>
                        </div>

                        {/* Value 2*/}
                        <div className="grid gap-10">
                            <Fade triggerOnce="true">
                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">5</p>
                                <p className="text-left text-sm md:text-base">To provide a nurturing and inclusive learning environment that empowers students to reach their full potential academically.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">6</p>
                                <p className="text-left text-sm md:text-base">To foster a love for learning, critical thinking, and creativity.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">7</p>
                                <p className="text-left text-sm md:text-base">See a future where every student is inspired to excel and make a positive impact in the world.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-4 md:px-6 py-2 md:py-4">8</p>
                                <p className="text-left text-sm md:text-base">To be a center of excellence in education, where students are equipped with the skills, knowledge, and values to contribute meaningfully to their communities.
                                </p>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Faculty and Staff Directory */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <Fade direction="left" triggerOnce="true"><Head header="Faculty and Staff Directory"/></Fade>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                        <Fade triggerOnce="true">
                        <div className="grid gap-2 justify-items-start border border-f2 px-2 py-2 md:py-2 rounded-md overflow-hidden">
                            <img src={bruce_wayne} alt="undergraduate" className="h-full w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-4 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Bruce Wayne</h1>
                                <p className="text-base text-justify text-black2 font-medium">Vice Chancellor</p>
                            </div>   
                        </div>

                        <div className="grid gap-2 justify-items-start border border-f2 px-2 py-2 md:py-2 rounded-md overflow-hidden">
                            <img src={oliver_queen} alt="undergraduate" className="h-full w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-4 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Olivia Queen</h1>
                                <p className="text-base text-justify text-black2 font-medium"> Deputy Vice Chancellor</p>
                            </div>   
                        </div>

                        <div className="grid gap-2 justify-items-start border border-f2 px-2 py-2 md:py-2 rounded-md overflow-hidden">
                            <img src={selina_kyle} alt="undergraduate" className="h-full w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-4 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Selina Kyle</h1>
                                <p className="text-base text-justify text-black2 font-medium">Registrar</p>
                            </div>   
                        </div>

                        <div className="grid gap-2 justify-items-start border border-f2 px-2 py-2 md:py-2 rounded-md overflow-hidden">
                            <img src={bruce_banner} alt="undergraduate" className="h-full w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-4 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Bruce Banner</h1>
                                <p className="text-base text-justify text-black2 font-medium">Bursar</p>
                            </div>   
                        </div>

                        <div className="grid gap-2 justify-items-start border border-f2 px-2 py-2 md:py-2 rounded-md overflow-hidden">
                            <img src={tony_stark} alt="undergraduate" className="h-full w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-4 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Tony Stark</h1>
                                <p className="text-base text-justify text-black2 font-medium">Librarian</p>
                            </div>   
                        </div>

                        <div className="grid gap-2 justify-items-start border border-f2 px-2 py-2 md:py-2 rounded-md overflow-hidden">
                            <img src={selina_kyle_two} alt="undergraduate" className="h-full w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-4 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Harley Quinn</h1>
                                <p className="text-base text-justify text-black2 font-medium">Chief Security Officer</p>
                            </div>   
                        </div>
                        </Fade>
                        
                    </div>

                </div>


                

                

                {/* Footer */}
                <div className="w-full">
                    <Footer/>
                </div>
                    
                    
            </div>
            
            

        </>
     );
}
 
export default About;