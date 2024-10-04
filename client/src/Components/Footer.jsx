import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import BankImg from '../assets/bank.png'
import { useEffect, useState } from "react";

function Footer() {
    const [menu, setMenu] = useState (''); // state to track the active menu

    //Effect to scroll to top when the menu changes 
    useEffect(()=> {
        if(menu){
            window.scrollTo(0,0); //scroll to the top of the page
        }
    }, [menu]); //Trigger this effect when 'menu' changes 
  return (
    <div className="small-pc:pad6 pad4 pt-8 pb-8 bg-primary-color w-full relative flex flex-col">
        <div className=" flex  gap-[55.25px] mb-24 small-pc:flex-col">
            <div className="flex flex-col gap-[24.56px]">
                <h2 className="text-gray-30 font-semibold text-[20.46px]">Quick Links</h2>
                <div className="flex flex-col gap-[16.37px] text-gray-40 text-[16.37px] font-normal">
                    {/* <Link>About Us</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/faq'>FAQs</Link>
                    <Link to='/blogs'>Blogs</Link> */}
                    <Link  to='/about'  onClick={() => setMenu('about')}  className={`transition-all duration-300 ${menu === 'about' ? 'text-second-color font-semibold' : ''}`}> About Us</Link>
                    <Link to='/contact' onClick={() => setMenu('contact')}  className={`transition-all duration-300 ${menu === 'contact' ? 'text-second-color font-semibold' : ''}`}>  Contact</Link>
                    <Link  to='/faq' onClick={() => setMenu('faq')}  className={`transition-all duration-300 ${menu === 'faq' ? 'text-second-color font-semibold' : ''}`}>FAQs</Link>
                    {/* <Link to='/blogs' onClick={() => setMenu('blogs')} className={menu === 'blogs' ? 'active' : ''}>Blogs</Link> */}
                    <Link to='/blogs' onClick={() => {setMenu('blogs')}} className={`transition-all duration-300 ${menu === 'blogs' ? 'text-second-color font-semibold' : ''}`}>Blogs</Link>

                </div>
            </div>
            <div className="flex flex-col gap-[24.56px]">
                <h2 className="text-gray-30 font-semibold text-[20.46px]">Contact Us</h2>
                <div className="flex flex-col gap-[16.37px] text-gray-40 text-[16.37px] font-normal">
                    <a href="tel:2347089075584">07089075584</a>
                    <a href="mailto:subssum32@gmail.com" className="text-inherit">subssum32@gmail.com</a>
                    <p>13, Femi Aderibigbe Close</p>
                    <p>Ifako Gbagada, Lagos.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[24.56px]">
                <h2 className="text-gray-30 font-semibold text-[20.46px]">Social Media</h2>
                <div className="flex gap-[8.19px] text-gray-40 text-[24px] font-normal">
                    <Link>
                        <FaFacebookF />
                    </Link>
                    <Link>
                        <RiTwitterXLine />
                    </Link>
                    <Link>
                        <FaInstagram />
                    </Link>
                    <Link>
                        <RiYoutubeLine />
                    </Link>
                    <Link>
                        <CiLinkedin />
                    </Link>
                </div>
            </div>
        </div>

        <hr className="absolute left-0 bottom-16 w-full border-gray-80"/>

        <p className="text-gray-40 text-[15px] font-normal mt-auto">
            &copy; copyright subssum
        </p>

        <img alt="bank" src={BankImg} className="absolute right-3 bottom-3 tablet:w-[200px]" />
    </div>
  )
}

export default Footer