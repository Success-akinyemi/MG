import BgImg from '../../assets/bg.png'
import { IoCameraOutline } from "react-icons/io5";

function PictureProfileCard() {
  return (
    <div className="card1 tablet:w-full">
        <div className="flex justify-center items-center flex-col gap-[16px]">
            <img src={BgImg} alt="profile" className="w-[100px] h-[100px]" />
            <div className="flex items-center gap-[8px] text-second-color">
                <IoCameraOutline className="w-[24px]" />
                <p className="text-[16px]">Upload Image</p>
            </div>
        </div>
    </div>
  )
}

export default PictureProfileCard