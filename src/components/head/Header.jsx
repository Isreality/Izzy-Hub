import { useState } from "react";
import HeaderData from "./HeaderData";
import "./header.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import "../index.css"
import { RxHamburgerMenu } from "react-icons/rx";
import {MdClose} from "react-icons/md";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }


    return ( 
        <div className="sticky top-0 w-full bg-white flex flex-wrap justify-between px-20 py-4 m-0 z-50 items-center border-primary border-b-2">
            <div className="flex justify-start items-center">                
            <Link to='/Home' ><h1 className="mb-4 mt-4 font-extrabold text-primary text-2xl">Izzy Hub</h1></Link>
            </div>

            <div className="md:hidden">    
                <button onClick={()=>toggleNavbar(true)} className="text-black">{isOpen ? <MdClose className="text-white font-bold absolute size-5 top-5 z-50 mr-4 right-4"/> : <RxHamburgerMenu className="text-black font-bold"/>}</button>
                {isOpen &&(
                <div>
                    <div className="fixed h-full w-screen right-0 -translate-x-0 transition-all z-50">
                        <div className="flex bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-10 z-[100] w-56">
                        {HeaderData.map((nav) => (
                            <div key={nav.id}>
                                <NavLink to={nav.path} className=" m-2 text-black hover:text-white hover:bg-primary font-medium hover:border-2 hover:rounded-full hover:border-primary px-8 py-4">{nav.title}</NavLink>
                            </div> 
                        ))}
                        </div> 
                    </div>
                </div>
            )}      
            </div>

            <div className="hidden justify-items-start gap-1 md:flex lg:flex">
                <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col">
                {HeaderData.map((nav) => (
                    <div key={nav.id}>
                        <NavLink to={nav.path} className=" m-2 text-black hover:text-white hover:bg-primary font-medium hover:border-2 hover:rounded-full hover:border-primary px-8 py-4">{nav.title}</NavLink>
                    </div> 
                ))}
                </div>  
            </div>

            

     
        </div>
     );  
}
 
export default Header;