import { useState, useEffect } from "react";
import "../style.css"
import "../fonts.css"
import Header from "../components/head/Header";
import Head from "../components/head/Head";
import home_history from "../img/home_history.png"
import mv_combined from "../img/mv_combined.png"
import smw from "../img/smw.png"
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';


const Home = () => {
    

    return ( 
        <>
            <div className="font-custom">
                <div className=""><Header/></div>

                {/* Hero Section */}
                <div className="pro py-4 md:py-8 flex items-center">
                    <div className="flex flex-col items-start w-[60%] px-20">
                            <Fade direction="down" triggerOnce="true">
                                <h2 className="text-white text-left font-black text-4xl md:text-6xl lg:text-7xl" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>
                                    Get Quality <span className="text-primary">Education</span> in our <span className="text-primary">Institution</span>
                                </h2><br/>
                            </Fade>

                            <Link to='/about' className="bg-primary py-4 px-16 text-white text-xl rounded-full font-medium border-white">Explore</Link>
                    </div>
                </div>    
                
                {/* Stats */}
                <div className='w-full bg-primary px-24 py-16'>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-left gap-1">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold"><CountUp start={0} end={500} duration={8}/>+</h2>
                            <h4 className="text-lg md:text-xl lg:text-2xl text-left text-white">Lecturers</h4>
                        </div>

                        <div className='text-left gap-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-left text-white font-bold"><CountUp start={0} end={200} duration={8}/>+</h2>
                            <h4 className="text-lg md:text-xl lg:text-2xl text-left  text-white">Lecture Halls</h4>
                        </div>

                        <div className='text-left gap-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-left text-white font-bold"><CountUp start={0} end={100} duration={8}/>k+</h2>
                            <h4 className="text-lg md:text-xl lg:text-2xl text-left  text-white">Students</h4>
                        </div>

                        <div className='text-left gap-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-left text-white font-bold"><CountUp start={0} end={300} duration={8}/>k+</h2>
                            <h4 className="text-lg md:text-xl lg:text-2xl text-left  text-white">Hours</h4>
                        </div>
                    </div>
                </div>   

                {/* About  */}
                <div className="w-full px-24 py-16">
                    <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
                        <div className="grid justify-items-start">
                            <Head header="History"/>
                            <p className="text-justify">
                            Founded by a group of visionary educators who recognized the need for a dedicated institution that would serve the educational needs of our community. With a small building, limited resources, and a handful of passionate teachers, the school opened its doors to its first students. Despite the challenges, these early years laid the groundwork for the school's growth and development.
                            </p> <br/>
                            <p className="text-justify">Our school has experienced significant growth and expansion over the years. Increased enrollment led to the construction of larger facilities and the addition of new classrooms, libraries, laboratories, and sports facilities. The dedication of our faculty and staff, along with the support of the community, played a vital role in the school's progress.
                            </p><br/>
                            <Link to='/about' className="bg-primary py-4 px-16 text-white text-base rounded-full font-medium border-white">Learn More</Link>
                        </div>

                        {/* About Image */}
                        <div className="">
                            <Fade direction="right" triggerOnce="true">
                                <img src={home_history} className=" w-full md:w-[90%] h-full md:h-full object-cover rounded-xl mb-4" alt="chart" />
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="w-full px-24 py-16">
                    <Head header="Mission & Vision"/>
                    <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
                        {/* Image */}
                        <div className="w-[60%]">
                            <Fade direction="left" triggerOnce="true">
                                <img src={mv_combined} className=" w-full md:w-[90%] h-full md:h-full object-cover rounded-xl mb-4" alt="chart" />
                            </Fade>
                        </div>

                        {/* Value */}
                        <div className="grid gap-10">
                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-6 py-4">1</p>
                                <p className="text-left">To provide a nurturing and inclusive learning environment that empowers students to reach their full potential academically.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-6 py-4">2</p>
                                <p className="text-left">To foster a love for learning, critical thinking, and creativity.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-6 py-4">3</p>
                                <p className="text-left">See a future where every student is inspired to excel and make a positive impact in the world.</p>
                            </div>

                            <div className="flex flex-row gap-3 items-center">
                                <p className="bg-primary text-white rounded-full px-6 py-4">4</p>
                                <p className="text-left">To be a center of excellence in education, where students are equipped with the skills, knowledge, and values to contribute meaningfully to their communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Session */}
                <div className="w-full flex items-center px-24 py-16 ">
                    <div className="flex flex-col md:flex-row gap-10 bg-primary px-20 pb-16 pt-24 justify-between overflow-hidden h-[400px] rounded-2xl items-center">
                        <div className="flex flex-col items-start">
                            <p className="text-white text-left text-4xl font-extrabold" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>2023/2024 Academic Session.</p>
                            <p className="text-white text-left text-4xl font-extrabold" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>Admission is Now Open</p><br/>
                            <Link to='/' className="bg-white py-4 px-16 text-primary text-base rounded-full font-medium border-white">Apply Now</Link>
                        </div>

                        {/* Image */}
                        <div className="w-[50%]">
                            <Fade direction="right" triggerOnce="true">
                                <img src={smw} className=" w-full md:w-[90%] h-full md:h-full object-cover rounded-xl mb-4" alt="chart" />
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* WHy Choose Us */}
                    
                    
            </div>
            
            

        </>
     );
}
 
export default Home;