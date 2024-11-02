import { useState, useEffect } from "react";
import "../style.css"
import "../fonts.css"
import Header from "../components/head/Header";
import Head from "../components/head/Head";
import Footer from "../components/footer/Footer";
import home_history from "../img/home_history.png"
import mv_combined from "../img/mv_combined.png"
import smw from "../img/smw.png"
import e_learning_icon from "../img/e_learning_icon.png"
import scholarship_icon from "../img/e_learning_icon.png"
import affordable_icon from "../img/affordable_icon.png"
import accomodation_icon from "../img/accomodation_icon.png"
import learning_environment_icon from "../img/learning_environment_icon.png"
import alumni_icon from "../img/alumni_icon.png"
import undergraduate from "../img/undergraduate.png"
import post_graduate from "../img/post_graduate.png"
import direct_entry from "../img/direct_entry.png"
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';


const Home = () => {
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
                <div className="pro py-4 md:py-8 flex items-center">
                    <div className="flex flex-col items-center md:items-center lg:items-start w-full md:w-full lg:w-[60%] px-4 md:px-20">
                            <Fade direction="down" triggerOnce="true">
                                <h2 className="text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>
                                    Get Quality <span className="text-primary">Education</span> in our <span className="text-primary">Institution</span>
                                </h2><br/>
                            </Fade>

                            <Link to='/about' className="bg-primary py-4 px-16 text-white text-sm md:text-xl rounded-full font-medium border-white">Explore</Link>
                    </div>
                </div>    
                
                {/* Stats */}
                <div className='w-full bg-primary px-4 md:px-8 lg:px-24 py-16'>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
                        <div className="text-center md:text-left gap-1">
                            <h2 className="text-3xl md:text-3xl lg:text-4xl text-white font-bold"><CountUp start={0} end={500} duration={8}/>+</h2>
                            <h4 className="text-xl md:text-xl lg:text-2xl text-left text-white">Lecturers</h4>
                        </div>

                        <div className='text-center md:text-left gap-1'>
                            <h2 className="text-3xl md:text-3xl lg:text-4xl text-center md:text-left text-white font-bold"><CountUp start={0} end={200} duration={8}/>+</h2>
                            <h4 className="text-xl md:text-xl lg:text-2xl text-center md:text-left text-white">Lecture Halls</h4>
                        </div>

                        <div className='text-center md:text-left gap-1'>
                            <h2 className="text-3xl md:text-3xl lg:text-4xl text-center md:text-left text-white font-bold"><CountUp start={0} end={100} duration={8}/>k+</h2>
                            <h4 className="text-xl md:text-xl lg:text-2xl text-center md:text-left  text-white">Students</h4>
                        </div>

                        <div className='text-center md:text-left gap-1'>
                            <h2 className="text-3xl md:text-3xl lg:text-4xl text-center md:text-left text-white font-bold"><CountUp start={0} end={300} duration={8}/>k+</h2>
                            <h4 className="text-xl md:text-xl lg:text-2xl text-center md:text-left  text-white">Hours</h4>
                        </div>
                    </div>
                </div> 

                {/* Back to top button */}
                <FaArrowUp onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-primary rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-primary hover:border-primary hover:border-2"/>  

                {/* About  */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <div className="flex flex-col md:flex-col lg:flex-row gap-10 justify-between items-center">
                        <div className="grid justify-items-start">
                        
                            {/* Head */}
                            <div className="px-2 py-2 rounded-md border-secondary-2 grid justify-items-start">
                                <h3 className="text-black font-bold text-3xl md:text-5xl mb-4" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>History</h3>
                                <div className="w-16 h-2 bg-primary mb-2"></div><br/>
                            </div>

                            <p className="text-justify text-sm md:text-base">
                            Founded by a group of visionary educators who recognized the need for a dedicated institution that would serve the educational needs of our community. With a small building, limited resources, and a handful of passionate teachers, the school opened its doors to its first students. Despite the challenges, these early years laid the groundwork for the school's growth and development.
                            </p> <br/>
                            <p className="text-justify text-sm md:text-base">Our school has experienced significant growth and expansion over the years. Increased enrollment led to the construction of larger facilities and the addition of new classrooms, libraries, laboratories, and sports facilities. The dedication of our faculty and staff, along with the support of the community, played a vital role in the school's progress.
                            </p><br/>
                            <Link to='/about' className="bg-primary py-4 px-16 text-white text-sm md:text-base rounded-full font-medium border-white w-full md:w-full lg:w-[50%]">Learn More</Link>
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
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <Head header="Mission & Vision"/>
                    <div className="flex flex-col md:flex-col lg:flex-row gap-10 justify-between items-center">
                        {/* Image */}
                        <div className="w-[60%]">
                            <Fade direction="left" triggerOnce="true">
                                <img src={mv_combined} className=" w-full md:w-[90%] h-full md:h-full object-cover rounded-xl mb-4" alt="chart" />
                            </Fade>
                        </div>

                        {/* Value */}
                        <div className="grid gap-10">
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
                        </div>
                    </div>
                </div>

                {/* Session */}
                <div className="w-full flex items-center px-4 md:px-8 lg:px-24 py-16">
                    <div className="flex flex-col md:flex-col lg:flex-row gap-10 bg-primary px-6 md:px-20 pb-0 md:pb-16 pt-16 md:pt-24 justify-between overflow-hidden h-[500px] md:h-[700px] lg:h-[400px] rounded-2xl items-center">
                        <div className="flex flex-col items-center md:items-center lg:items-start">
                            <Fade direction="left" triggerOnce="true">
                                <p className="text-white text-center md:text-center lg:text-left text-2xl md:text-4xl font-extrabold" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>2023/2024 Academic Session.</p>
                                <p className="text-white text-center md:text-center lg:text-left text-2xl md:text-4xl font-extrabold" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>Admission is Now Open</p><br/>
                                <Link to='/' className="bg-white py-4 px-16 text-primary text-base rounded-full font-medium border-white w-full md:w-full">Apply Now</Link>
                            </Fade>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-full lg:w-[50%]">
                            <Fade direction="right" triggerOnce="true">
                                <img src={smw} className=" w-full md:w-[90%] h-full md:h-full object-cover rounded-xl mb-4" alt="smw" />
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* WHy Choose Us */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <Head header="Why Choose Us?"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Fade triggerOnce="true">
                        {/* E-Learning Facilities */}
                        <div className="grid gap-2 justify-items-start border-[0.5px] border-f2 px-8 py-10 rounded-md">
                            <img src={e_learning_icon} alt="e_learning_icon" className="size-20"/>
                            <h1 className="text-xl text-left text-primary font-bold">E-Learning Facilities</h1>
                            <p className="text-base text-justify text-black2 font-normal">Our e-learning facilities are designed to ensure seamless and engaging online education.</p>
                        </div>
                        
                        {/* Scholarship Opportunities */}
                        <div className="grid gap-2 justify-items-start border-[0.5px] border-f2 px-8 py-10 rounded-md">
                            <img src={scholarship_icon} alt="e_learning_icon" className="size-20"/>
                            <h1 className="text-xl text-left text-primary font-bold">Scholarship Opportunities</h1>
                            <p className="text-base text-justify text-black2 font-normal">Scholarships are awarded to students who have demonstrated outstanding academic achievements.</p>
                        </div>
                        
                        {/* Affordable Fee */}
                        <div className="grid gap-2 justify-items-start border-[0.5px] border-f2 px-8 py-10 rounded-md">
                            <img src={affordable_icon} alt="e_learning_icon" className="size-20"/>
                            <h1 className="text-xl text-left text-primary font-bold">Affordable Fee</h1>
                            <p className="text-base text-justify text-black2 font-normal">To ease the financial burden, we provide flexible payment plans and installment options.</p>
                        </div>
                        
                        {/* Accomodation */}
                        <div className="grid gap-2 justify-items-start border-[0.5px] border-f2 px-8 py-10 rounded-md">
                            <img src={accomodation_icon} alt="e_learning_icon" className="size-20"/>
                            <h1 className="text-xl text-left text-primary font-bold">Accomodation</h1>
                            <p className="text-base text-justify text-black2 font-normal">Our on-campus housing offers a variety of room types to accommodate different preferences and needs.</p>
                        </div>
                        
                        {/* Learning Environment */}
                        <div className="grid gap-2 justify-items-start border-[0.5px] border-f2 px-8 py-10 rounded-md">
                            <img src={learning_environment_icon} alt="e_learning_icon" className="size-20"/>
                            <h1 className="text-xl text-left text-primary font-bold">Learning Environment</h1>
                            <p className="text-base text-justify text-black2 font-normal">Learning environment that nurtures the intellectual, social, and emotional development of our students.</p>
                        </div>
                        
                        {/* WHy Choose Us */}
                        <div className="grid gap-2 justify-items-start border-[0.5px] border-f2 px-8 py-10 rounded-md">
                            <img src={alumni_icon} alt="e_learning_icon" className="size-20"/>
                            <h1 className="text-xl text-left text-primary font-bold">Active Alumni</h1>
                            <p className="text-base text-justify text-black2 font-normal">Their success stories serve as an inspiration to current and future students, showcasing the transformative power of education.</p>
                        </div>
                        </Fade>
                    </div>

                </div>

                {/* Academic Programmes */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <Head header="Academic Programmes"/>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="grid gap-2 justify-items-start px-0 py-2 md:py-4 rounded-md overflow-hidden">
                            <img src={undergraduate} alt="undergraduate" className="h-125 w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-0 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Undergraduate</h1>
                                <p className="text-base text-justify text-black2 font-normal">We offer a wide array of majors and specializations across various disciplines.</p>
                            </div>   
                        </div>

                        <div className="grid gap-2 justify-items-start px-0 py-2 md:py-4 rounded-md overflow-hidden">
                            <img src={post_graduate} alt="undergraduate" className="h-125 w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-0 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Postgraduate</h1>
                                <p className="text-base text-justify text-black2 font-normal">Equip students with the skills needed to excel in their chosen professions.</p>
                            </div>   
                        </div>

                        <div className="grid gap-2 justify-items-start px-0 py-2 md:py-4 rounded-md overflow-hidden">
                            <img src={direct_entry} alt="undergraduate" className="h-125 w-full object-cover hover:scale-105"/>
                            <div className="px-0 md:px-0 py-4 md:py-2">
                                <h1 className="text-xl text-left text-primary font-bold">Direct Entry</h1>
                                <p className="text-base text-justify text-black2 font-normal">Our direct entry program offers a curriculum that covers a wide range of disciplines.</p>
                            </div>   
                        </div>
                        
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
 
export default Home;