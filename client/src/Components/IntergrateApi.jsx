import { Link } from 'react-router-dom'
import StampImg from '../assets/stamp.png'

import FileImg from '../assets/file.png'
import GearImg from '../assets/gear.png'
import StartImg from '../assets/star2.png'

function IntergrateApi() {
    const data = [
        {},
    ]
  return (
    <div className="small-pc:pad6 pad4 w-full flex items-center gap-[20.46px] justify-between">
        <div className="flex-1 flex h-[734px] rounded-[24.56px] relative bg-[#F6F6F6] overflow-hidden pl-5 pr-5">
            <div className='p-5 flex flex-col gap-[55.25px] w-[70%]'>
                <div className='flex flex-col gap-[16.37px]'>
                    <h2 className='text-gray-90 font-bold text-[36.84px]'>Integrate our API</h2>
                    <p className='text-[20px] font-normal text-gray-70'>
                        Integrate our well-documented API, which allows you to build your custom payment platform and earn by serving a vast user base. Regardless of the scale or complexity of your vision, you can bring it to life.
                    </p>
                </div>
                
                <div className='bg-[#0373DB] w-[50%] flex items-center justify-center pt-[17.39px] pb-[17.39px] pl-[51.16px] pr-[51.16px] rounded-[10.23px]'>
                    <Link className='link text-white tet-[16px] font-semibold'>
                        Learn More
                    </Link>
                </div>
            </div>

            <img alt='stamp' src={StampImg} className='absolute bottom-[-10px]' />
        </div>

        <div className="flex-1 flex h-[734px] rounded-[24.56px] bg-[#F6F6F6]">

        </div>

    </div>
  )
}

export default IntergrateApi