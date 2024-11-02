import { useState, useEffect } from "react";
import "../style.css"
import "../fonts.css"
import Header from "../components/head/Header";
import Head from "../components/head/Head";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';


const Contact = () => {
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
                <div className="con py-4 md:py-8 flex items-center" >
                    <div className="flex flex-col items-center w-full px-4 md:px-20">
                            <Fade direction="down" triggerOnce="true">
                                <h2 className="text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>
                                    Contact 
                                </h2><br/>
                            </Fade>
                    </div>
                </div>    
                

                {/* Back to top button */}
                <FaArrowUp onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-primary rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-primary hover:border-primary hover:border-2"/>  

                {/* History  */}
                <div className="w-full px-4 md:px-8 lg:px-24 py-16">
                    <Fade direction="left" triggerOnce="true"><Head header="Send Us a Message"/></Fade>
                    <div className="">
                        <form className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-5 items-center w-full">
                                <div className="space-y-1 md:space-y-2 items-start text-left mb-2 w-full">
                                    <label className="text-xs md:text-sm text-black2">Name</label>
                                    <input className="border p-4 w-full rounded-md border-disable bg-white focus:outline-disable text-black2 text-xs md:text-sm" 
                                    placeholder="Enter full name"/>
                                </div>

                                <div className="space-y-1 md:space-y-2 items-start text-left mb-2 w-full">
                                    <label className="text-xs md:text-sm text-black2">Email</label>
                                    <input className="border p-4 w-full rounded-md border-disable bg-white focus:outline-disable text-black2 text-xs md:text-sm" 
                                    placeholder="example@gmail.com"/>
                                </div>
                            </div>

                            <div className="space-y-1 md:space-y-2 items-start text-left mb-2">
                                <label className="text-xs md:text-sm text-black2">Subject</label>
                                <input className="border p-4 w-full rounded-md border-disable bg-white focus:outline-disable text-black2 text-xs md:text-sm" 
                                placeholder="Enter full name"/>
                            </div>

                            <div className="space-y-1 md:space-y-2 items-start text-left">
                                <label className="text-xs md:text-sm text-black2">Body</label>
                                <textarea className="border p-4 w-full rounded-md border-disable bg-white focus:outline-disable text-black2 text-xs md:text-sm" 
                                />
                            </div>

                            <div className="grid justify-items-end">
                                <button type="submit"  className='mt-4 w-full md:w-full lg:w-64 py-4 px-20 rounded-md border-fa bg-primary hover:bg-black cursor-pointer text-white text-xs md:text-base font-medium'>
                                Send
                                </button>
                            </div> 
                        </form>
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
 
export default Contact;