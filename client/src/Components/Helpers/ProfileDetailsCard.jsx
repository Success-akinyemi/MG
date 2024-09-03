import { LuCopy } from "react-icons/lu";

function ProfileDetailsCard({setModal}) {
  return (
    <div className="card1 flex flex-col gap-4 w-[416px] tablet:w-full">
        <div className="flex items-center justify-between text-gray-70">
            <p>
                Name
            </p>
            <p className="font-semibold">
                Lawal Wahab Babatunde
            </p>
        </div>
        <div className="flex items-center justify-between text-gray-70">
            <p>
                Email
            </p>
            <p className="font-semibold">
                wabdotmail@gmail.com
            </p>
        </div>
        <div className="flex items-center justify-between text-gray-70">
            <p>
                Phone Number
            </p>
            <p className="font-semibold">
                0906 856 2949
            </p>
        </div>
        <div className="flex items-center justify-between text-gray-70">
            <p>
                Account Status
            </p>
            <p className="font-semibold text-success">
                Active
            </p>
        </div>
        <div className="flex items-center justify-between text-gray-70">
            <p>
                Referral link
            </p>
            <div className="font-semibold flex flex-col gap-2">
                <p>
                    www.subsum.com/register?ref=wd...
                </p>
                <span className="ml-auto cursor-pointer">
                    <LuCopy />
                </span>
            </div>  
        </div>

        <div className="text-second-color text-[16px] font-semibold cursor-pointer" onClick={setModal} >
            Edit Detail
        </div>
    </div>
  )
}

export default ProfileDetailsCard