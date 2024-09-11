import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Components/Helpers/Navbar"
import EnvelopImg from '../../assets/envelop.png'

function SignupSuccessful() {
  const location = useLocation();
  const servermsg = location.state.resMsg !== '' || location.state ? location.state.resMsg : 'An email has been Sent to your account for confirmation. Please click the link to finalize your account setup successfully';
  const msg = 'An email has been Sent to your account for confirmation. Please click the link to finalize your account setup successfully';  

  return (
    <div className='page1 w-full h-[100vh]'>
        <Navbar />

        <div className="pad3 mt-[110px] w-[500px] phone:w-[90%] bg-white rounded-[12px] flex flex-col gap-[24px] border-[1px] border-gray-30">
            <div className="flex items-center w-full gap-[24px]">
                <div>
                  <img src={EnvelopImg} alt="envelop" className='w-[200px] h-[113.5px]' />
                </div>

                <div className="flex flex-col gap-[16px]">
                  <h2 className="text-gray-70 text-[24px]">
                    Check Your Email
                  </h2>

                  <p className="text-gray-80 text-[16px]">
                      {msg}
                  </p>
                </div>

            </div>
            <p className="font-semibold text-[14px] text-center text-second-color">{servermsg}</p>
        </div>

    </div>
  )
}

export default SignupSuccessful