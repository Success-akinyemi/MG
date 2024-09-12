import Navbar from "../Components/Helpers/Navbar"
import Hero from "../Components/Hero"
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
    </div>
  )
}

export default LandingPage