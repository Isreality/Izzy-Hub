import { useState, useEffect } from "react";
import "../style.css"
import "../fonts.css"
import Header from "../components/head/Header";
import Head from "../components/head/Head";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';


const Home = () => {
    

    return ( 
        <>
            <div className="font-custom">
                <div className=""><Header/></div>
                <div className="pro py-4 md:py-8">
                    <div className="flex justify-start items-center w-[60%] px-20">
                        
                        {/* <div className="flex flex-col items-center lg:items-center py-0 gap-0"> */}
                            <Fade direction="down" triggerOnce="true">
                                <h2 className="text-white text-left font-black text-4xl md:text-6xl lg:text-7xl" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>
                                    Get Quality <span className="text-primary">Education</span> in our <span className="text-primary">Institution</span></h2><br/>
                            </Fade>
                        {/* </div> */}
                    </div>
                    
                </div>        
                    
                    
            </div>
            
            

        </>
     );
}
 
export default Home;