import AirtimeImg from '../assets/airtime.png'
import DataImg from '../assets/data.png'
import ElectricityImg from '../assets/electricity.png'
import CableTv from '../assets/cableTV.png'
import EducationImg from '../assets/education.png'
import OthersImg from '../assets/others.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Button from './Helpers/Button'

function Hero() {
    const [text] = useTypewriter({
        words: ['Airtime', 'Data', 'Electricity', 'Cable Tv'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 80,
    });

  return (
    <div className="w-full flex">
        <div className="flex flex-col mr-auto">
            <div className='text-[32px] font-bold flex flex-col'>
                <h2>The <span className="text-second-color">BEST</span> place to subscribe / buy</h2>
                <h2 className="text-second-color">
                    {text}
                    <Cursor cursorColor='#2DAE32' className='text-success' cursorStyle='|' />
                </h2>
            </div>

            <div className="flex flex-col mt-[2rem]">
                <p className="text-gray-90 text-[16px] mb-[1.5rem] font-normal">What are you buying today?</p>

                <div className="flex gap-4 flex-col">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-gray-20 h-[158.6px] w-[158.6px] rounded-[24.56px]">
                            <div className="flex flex-col gap-[13.3px]">
                                <img src={AirtimeImg} alt="Airtime" />
                                <p className="text-[20px] text-center text-gray-60 font-semibold">Airtime</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-gray-20 h-[158.6px] w-[158.6px] rounded-[24.56px]">
                            <div className="flex flex-col gap-[13.3px]">
                                <img src={DataImg} alt="Data" />
                                <p className="text-[20px] text-center text-gray-60 font-semibold">Data</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-gray-20 h-[158.6px] w-[158.6px] rounded-[24.56px]">
                            <div className="flex flex-col gap-[13.3px]">
                                <img src={ElectricityImg} alt="Electricity" />
                                <p className="text-[20px] text-center text-gray-60 font-semibold">Electricity</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-gray-20 h-[158.6px] w-[158.6px] rounded-[24.56px]">
                            <div className="flex flex-col gap-[13.3px]">
                                <img src={CableTv} alt="Cable TV" />
                                <p className="text-[20px] text-center text-gray-60 font-semibold">Cable TV</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-gray-20 h-[158.6px] w-[158.6px] rounded-[24.56px]">
                            <div className="flex flex-col gap-[13.3px]">
                                <img src={EducationImg} alt="Education" />
                                <p className="text-[20px] text-center text-gray-60 font-semibold">Education</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-gray-20 h-[158.6px] w-[158.6px] rounded-[24.56px]">
                            <div className="flex flex-col gap-[13.3px]">
                                <img src={OthersImg} alt="Others" />
                                <p className="text-[20px] text-center text-gray-60 font-semibold">Others</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[2rem] w-[40%]'>
                <Button link={'register'} name={'Get Started'} bg={true} />
            </div>
        </div>

        <div className='flex ml-auto'>

        </div>
    </div>
  )
}

export default Hero