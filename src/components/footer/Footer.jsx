import "./footer.css";
import { Link } from 'react-router-dom';
// import NavbarData from "../Components/NavbarData";

const Footer = () => {
    return ( 
        <>
            <div className="bg-black grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-16 px-4 md:px-8 lg:px-24 gap-10">
                <div className="grid justify-items-start">
                    <h4 className="text-primary text-left font-bold text-xl md:text-2xl mb-4"> Izzy Hub</h4>
                    <p className="text-white text-left text-sm md:text-base font-normal ">Established in 2024, our school has been a cornerstone of our community, providing generations of students with a quality education and a solid foundation for their future endeavors.</p>
                </div>

                <div className="">
                    <div className="flex flex-col gap-5">
                        <Link to='/home' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">Home</Link>
                        <Link to='/about' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">About</Link>
                        <Link to='/programme' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">Programme</Link>
                        <Link to='/contact' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">Contact</Link>
                    </div>                    
                </div>

                <div className="">
                    <h4 className="text-primary text-left font-bold text-xl md:text-2xl mb-4">Contact Info</h4>
                    <p className="text-white text-left text-sm md:text-base mb-4">isrealitycreations@gmail.com</p>
                    <p className="text-white text-left text-sm md:text-base mb-4">+2348140082953</p>                   
                </div>
            </div>
        </> 
        
    );
}
 
export default Footer;