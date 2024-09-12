import StarImg from '../assets/star.png'

import MtnImg from '../assets/mtn2.png'
import AirtelImg from '../assets/airtel2.png'
import GloImg from '../assets/glo2.png'
import NineMobile from '../assets/9mobile2.png'

import DstvImg from '../assets/dstv.png'
import GotvImg from '../assets/gotv.png'
import StarttimesImg from '../assets/startimes.png'
import ShowmaxImg from '../assets/showmax.png'

import JambImg from '../assets/jamb.png'
import NecoImg from '../assets/neco.png'
import WaecIMG from '../assets/star.png'

import AedcImg from '../assets/aedc.png'
import EkedcImg from '../assets/ekedc.png'
import IeImg from '../assets/ie.png'
import EedcImg from '../assets/eedc.png'


function OurServices() {
  return (
    <div className="w-full flex flex-col gap-[32.74px] items-center justify-center">
        <div className="flex gap-[16.37px] items-center justify-center flex-col">
          <div className='pad8 flex items-center justify-center gap-[10px] bg-gray-20 rounded-[102.32px]'>
            <img src={StarImg} alt="star" />
            <p className="text-[16px] font-normal text-gray-90">Services</p>
            <img src={StarImg} alt="star" />
          </div>
          <h2 className="text-[36.84px] font-bold text-gray-90">Your All-in-One Subscription Hub</h2>

          <p className="text-[20.46px] text-gray-70 font-normal w-[80%] text-center items-center justify-center">
            Say goodbye to the hassle of multiple apps and platforms, and hello to the simplicity and convenience of managing your subscriptions with us.
          </p>
        </div>

        <div className='flex items-center justify-center gap-[24.56px]'>

        </div>
    </div>
  )
}

export default OurServices