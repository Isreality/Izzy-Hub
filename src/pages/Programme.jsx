import { useState, useEffect } from "react";
import "../style.css"
import "../fonts.css"
import Header from "../components/head/Header";
import Head from "../components/head/Head";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import undergraduate from "../img/undergraduate.png"
import post_graduate from "../img/post_graduate.png"
import direct_entry from "../img/direct_entry.png"
import { FaArrowUp } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';


const Programme = () => {
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
                <div className="ac py-4 md:py-8 flex items-center" >
                    <div className="flex flex-col items-center w-full px-4 md:px-20">
                            <Fade direction="down" triggerOnce="true">
                                <h2 className="text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-6xl" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>
                                    Academic Programme
                                </h2><br/>
                            </Fade>
                    </div>
                </div>    
                

                {/* Back to top button */}
                <FaArrowUp onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-primary rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-primary hover:border-primary hover:border-2"/>  

                {/* Undergraduate  */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <div className="flex flex-col md:flex-col lg:flex-row gap-10 justify-between items-center">
                        <div className="grid justify-items-start">
                            <Fade direction="left" triggerOnce="true">
                            {/* Head */}
                            <div className="px-2 py-2 rounded-md border-secondary-2 grid justify-items-start">
                                <h3 className="text-black font-bold text-3xl md:text-4xl mb-4" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>Undergraduate</h3>
                                <div className="w-16 h-2 bg-primary mb-2"></div><br/>
                            </div>
                            
                            <p className="text-justify text-sm md:text-base">
                            We offer a wide array of majors and specializations across various disciplines, allowing students to explore their passions and tailor their educational experience to their individual interests. Whether you're interested in business, science, humanities, arts, social sciences, or technology, we have a program that suits your goals and aspirations.
                            </p> <br/>
                            <p className="text-justify text-sm md:text-base">We offer a wide array of majors and specializations across various disciplines, allowing students to explore their passions and tailor their educational experience to their individual interests. Whether you're interested in business, science, humanities, arts, social sciences, or technology, we have a program that suits your goals and aspirations.
                            </p>
                            </Fade>
                            {/* <Link to='/programme' className="bg-primary py-4 px-16 text-white text-sm md:text-base rounded-full font-medium border-white w-full md:w-full lg:w-[50%]">Apply Now</Link> */}
                        </div>

                        {/* About Image */}
                        <div className="">
                            <Fade direction="right" triggerOnce="true">
                                <img src={undergraduate} className=" w-full md:w-full h-full md:h-full object-cover rounded-xl mb-2" alt="chart" />
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Postgraduate  */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <div className="flex flex-col md:flex-col lg:flex-row-reverse gap-10 justify-between items-center">
                        <div className="grid justify-items-start">
                            <Fade direction="right" triggerOnce="true">
                            {/* Head */}
                            <div className="px-2 py-2 rounded-md border-secondary-2 grid justify-items-start">
                                <h3 className="text-black font-bold text-3xl md:text-4xl mb-4" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>Postgraduate</h3>
                                <div className="w-16 h-2 bg-primary mb-2"></div><br/>
                            </div>

                            <p className="text-justify text-sm md:text-base">
                            Our postgraduate programs are designed to equip students with the specialized skills and knowledge needed to excel in their chosen professions. We offer practical, industry-relevant coursework that enhances professional competencies and prepares students for leadership roles.
                            </p> <br/>
                            <p className="text-justify text-sm md:text-base">Through internships, industry collaborations, and experiential learning opportunities, students gain hands-on experience and develop valuable practical skills.
                            </p>
                            </Fade>
                            {/* <Link to='/programme' className="bg-primary py-4 px-16 text-white text-sm md:text-base rounded-full font-medium border-white w-full md:w-full lg:w-[50%]">Apply Now</Link> */}
                        </div>

                        {/* About Image */}
                        <div className="">
                            <Fade direction="left" triggerOnce="true">
                                <img src={post_graduate} className=" w-full md:w-full h-full md:h-full object-cover rounded-xl mb-2" alt="chart" />
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* DE  */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <div className="flex flex-col md:flex-col lg:flex-row gap-10 justify-between items-center">
                        <div className="grid justify-items-start">
                            <Fade direction="left" triggerOnce="true">
                            {/* Head */}
                            <div className="px-2 py-2 rounded-md border-secondary-2 grid justify-items-start">
                                <h3 className="text-black font-bold text-3xl md:text-4xl mb-4" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>Direct Entry</h3>
                                <div className="w-16 h-2 bg-primary mb-2"></div><br/>
                            </div>

                            <p className="text-justify text-sm md:text-base">
                            Our direct entry program offers a comprehensive undergraduate curriculum that covers a wide range of disciplines. Students have the opportunity to choose from various majors and specializations based on their interests and career aspirations.
                            </p> <br/>
                            <p className="text-justify text-sm md:text-base">The curriculum is designed to provide a well-rounded education, combining core courses, electives, and experiential learning opportunities.
                            </p>
                            </Fade>
                            {/* <Link to='/programme' className="bg-primary py-4 px-16 text-white text-sm md:text-base rounded-full font-medium border-white w-full md:w-full lg:w-[50%]">Apply Now</Link> */}
                        </div>

                        {/* About Image */}
                        <div className="">
                            <Fade direction="right" triggerOnce="true">
                                <img src={direct_entry} className=" w-full md:w-full h-full md:h-full object-cover rounded-xl mb-4" alt="chart" />
                            </Fade>
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
 
export default Programme;