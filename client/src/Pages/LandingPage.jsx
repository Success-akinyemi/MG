import ContactUs from "../Components/ContactUs"
import Features from "../Components/Features"
import Footer from "../Components/Footer"
import GetStarted from "../Components/GetStarted"
import Navbar from "../Components/Helpers/Navbar"
import Hero from "../Components/Hero"
import HowToFund from "../Components/HowToFund"
import IntergrateApi from "../Components/IntergrateApi"
import OurServices from "../Components/OurServices"
import WhyChoseUs from "../Components/WhyChoseUs"

function LandingPage() {
  return (
    <div className="flex min-h-[100vh] flex-col">
        <Navbar />

        <div className='small-pc:pad6 pad4 w-full mt-[8rem]'>
            <Hero />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <WhyChoseUs />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <OurServices />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <Features />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <IntergrateApi />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <HowToFund />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <ContactUs />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <GetStarted />
        </div>

        <div className="mt-[8rem] flex items-center justify-center">
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage