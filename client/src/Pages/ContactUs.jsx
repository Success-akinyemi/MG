import ContactUsForm from "../Components/ContactUsForm"
import Footer from "../Components/Footer"
import Navbar from "../Components/Helpers/Navbar"
import BgLogo from '../assets/bgLogo.png'

import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

function ContactUs() {
    const socials = [
        {
            text: 'Linkedin',
            icon: CiLinkedin,
        },
        {
            text: 'Instagram',
            icon: FaInstagram,
        },
        {
            text: 'Twitter',
            icon: RiTwitterXLine,
        },
        {
            text: 'Facebook',
            icon: FaFacebookF
        },
        {
            text: 'Email',
            icon: MdOutlineEmail
        },
        {
            text: 'Telegram',
            icon: LiaTelegramPlane
        }
    ]
  return (
    <div className="flex flex-col min-h-[100vh]">
        <Navbar />

        <div className="relative small-pc:flex-col small-pc:gap-12 phone:gap-20 mt-20 bg-gradient-to-r from-blue-700 to-blue-900 pt-16 pb-16 pl-20 pr-20 tablet:pl-[20px] tablet:pr-[20px] flex">
            <div className="flex flex-col gap-16 w-[355px] small-phone:w-[90%] z-10">
                <div className="flex flex-col gap-3">
                    <h3 className="text-[48px] font-bold text-white">CONTACT US</h3>
                    <p className="text-[20px] font-normal text-white">
                        Submit your queries here and we will get back to you as soon as possible.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    {
                        socials.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex items-center gap-1 pt-1 pb-1 pl-2 pr-2 bg-[#ffffff33]">
                                    <Icon className="text-white text-[24px]" />
                                    <p className="text-[20px] font-normal text-white">{item?.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="m-auto tablet:flex tablet:justify-center tablet:items-center z-10">
                <ContactUsForm />
            </div>

            <img alt="subssum" src={BgLogo} className="absolute right-0 top-0 " />
        </div>

        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default ContactUs