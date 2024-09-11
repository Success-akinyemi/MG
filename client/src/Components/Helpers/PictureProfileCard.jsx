import { useSelector } from 'react-redux';
import BgImg from '../../assets/bg.png'
import { IoCameraOutline } from "react-icons/io5";

function PictureProfileCard() {
  const { currentUser } = useSelector((state) => state.subSubUser);
  const user = currentUser?.data

  return (
    <div className="card1 tablet:w-full">
        <div className="flex justify-center items-center flex-col gap-[16px]">
            <img src={user?.profile ? user?.profile : BgImg} alt={`image of ${user?.firstName}`} className="w-[100px] h-[100px]" />
            <div className="flex items-center gap-[8px] text-second-color">
                <IoCameraOutline className="w-[24px]" />
                <p className="text-[16px]">Upload Image</p>
            </div>
        </div>
    </div>
  )
}

export default PictureProfileCard