import { useState } from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Helpers/Navbar"
import { faqOptions } from "../Data/faq"


function FAQ() {
    const [ faqOption, setFaqOption ] = useState(faqOptions[0].slug)

    const handleFaqChange = (faq) => {
        setFaqOption(faq)
    }
  return (
    <div className="flex flex-col min-h-[100vh]">
        <Navbar showBtn={true} />

        <div className="mt-20 flex flex-col">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 w-full items-center justify-center">
                <div className="flex flex-col gap-6 h-[40vh]">
                    <h1 className="text-center text-[48px] phone:text-[24px] tablet:text-[32px] font-bold text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-center font-normal text-[20px] tablet:text-[18px] phone:text-[16px] text-white">
                        We have answers to all your possible question, contact us
                        if you can’t find the answers to your questions here
                    </p>
                </div>
            </div>

            <div className="small-pc:pad6 pad4">
                <div className="flex items-center justify-center gap-[28px]">
                    {
                        faqOptions.map((item, idx) => (
                            <div key={idx} onClick={() => handleFaqChange(item.slug)} className="flex flex-col gap-[8px] cursor-pointer">
                                <p className="text-gray-70 text-[16px] font-medium">{item.text}</p>
                                <span className={`w-full h-[2px] rounded-[10px] ${faqOption === item.slug ? 'bg-gray-70 transition-all' : 'bg-transparent'}`}></span>
                            </div>  
                        ))
                    }
                </div>

                <div>
                    {/**import from Faq folder each section of faq*/}
                </div>
            </div>

        </div>

        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default FAQ