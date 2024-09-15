import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.png'
import Button from './Button'
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className="small-pc:pad6 pad4 bg-gray-10 w-full fixed top-0 left-0 flex justify-between border-b-[1px] border-b-gray-30 z-[999]">
        <Link to='/'>
            <img src={LogoImg} alt='subsum logo' className='w-[162px] phone:w-[108px] phone:h-[25px]' />
        </Link>

        <div className='flex items-center gap-[32px]'>
          <div>
            <Button name={'Login'} link={'login'} bg={true} />
          </div>
          <div className='small-pc:hidden' >
            <Button name={'Sign Up'} link={'register'} bg={false} />
          </div>
            <div className='cursor-pointer'>
                <AiOutlineMenu className='text-second-color text-[23px] cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Navbar