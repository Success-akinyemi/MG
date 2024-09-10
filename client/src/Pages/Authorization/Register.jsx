import { Link, useNavigate } from 'react-router-dom';
import SideImg from '../../assets/left-section.png'
import Button from '../../Components/Helpers/Button'
import { IoIosArrowBack } from "react-icons/io";
import Google from '../../Components/Helpers/Google';
import ButtonTwo from '../../Components/Helpers/ButtonTwo';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { registerUser } from '../../Helpers/api';
import LoadingBtn from '../../Components/Helpers/LoadingBtn';
import LogoImg from '../../assets/logo.png'

function Register() {
    const navigate = useNavigate()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowconfirmPassword ] = useState(false)
    const [ formData, setFormData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value })
    }
    const seePassword = () => {
        setShowPassword((prev) => !prev)
    }

    const seeConfirmPassword = () => {
        setShowconfirmPassword((prev) => !prev)
    }

    useEffect(() => {console.log(formData)}, [formData])

    const handleSignup = async (e) => {
        e.preventDefault()
        if(!formData.email){
            toast.error('Enter Email')
            return
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailPattern.test(formData.email)){
            toast.error('Please enter a valid email')
            return
        }
        if(!formData.firstName){
            toast.error(`Enter First Name`)
            return
        }
        if(!formData.lastName){
            toast.error(`Enter Last Name`)
            return
        }
        if(!formData.password){
            toast.error('Enter Password')
            return
        }
        if(!formData.confirmPassword){
            toast.error('Enter Confirm Password')
            return
        }

        const specialChars = /[!@#$%^&*()_+{}[\]\\|;:'",.<>?]/
        if(!specialChars.test(formData.password)){
            toast.error('Password must contain at least one special character')
            return
        }

        if(formData.password.length < 6){
            toast.error('Password must be 6 characters long')
            return
        }

        if(formData.password !== formData.confirmPassword){
            toast.error('Password do not match')
            return
        }
        try {
            setIsLoading(true)
            const res = await registerUser(formData)
            if(res.success){
                navigate("/signup-successful", {
                    state: { resMsg: `${res?.data}` },
                });
            }
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <div className='flex items-center w-full overflow-x-hidden h-[100vh] tablet:h-auto bg-gray-10 small-pc:justify-center small-pc:bg-white'>
        <div className="relative flex w-[470px] h-full overflow-y-hidden small-pc:hidden">
            <div className='fixed left-0 top-0 flex w-full h-full'>
                <img src={SideImg} alt='image of subsum' className='h-full' />
            </div>
        </div>

        <div className='relative flex items-center justify-center h-full w-full'>
            <div className='absolute w-[80%] flex items-center justify-between top-[24px] h-[24px] small-pc:bg-gray-10 small-pc:w-full small-pc:pl-[10%] phone:pl-[2%] small-pc:pr-[10%] phone:pr-[2%] small-pc:top-0 small-pc:p-8 small-pc:border-[1px] small-pc:border-gray-30'>
                <Link to='/' className='flex items-center gap-1 text-[16px] text-second-color phone:hidden'>
                    <IoIosArrowBack />
                    Home
                </Link>

                <img src={LogoImg} alt="logo of subsum" className="hidden phone:flex phone:w-[108.97px] phone:h-[25px]" />

                <Button name={'Login'} link={'login'} bg={true} />
            </div>

            <div className='flex flex-col items-center justify-center gap-[26px] w-[500px] phone:w-[90%] mt-[10rem] phone:mt-[7rem]'>
                <div className='text-[25px] phone:[20px] flex text-center items-center text-gray-70' >
                    Sign up
                </div>

                <form onSubmit={handleSignup} className='flex flex-col gap-[24px] w-full'>
                    <Google isLoading={isLoading} text={'Sign up with Google'} />

                    <div className='flex items-center justify-center gap-[14px] w-full'>
                        <hr className='border-[1px] border-gray-40 w-full' />
                        <p className='text-[13px] text-gray-80 w-full text-center'>Or continue with</p>
                        <hr className='border-[1px] border-gray-40 w-full' />
                    </div>

                    <div className='pad3 phone:pad3b bg-white rounded-[12px] border-[1px] flex gap-[10px] border-gray-30'>
                        <div className='flex flex-col gap-[32px] w-full'>
                            <div className='flex flex-col gap-4 w-full'>
                                <div className='inputGroup'>
                                    <label className='label'>Email Address</label>
                                    <input className='input' type='email' id='email' onChange={handleChange} placeholder='wabdotmail@gmail.com' />
                                </div>
                                <div className='inputGroup'>
                                    <label className='label'>First Name</label>
                                    <input className='input' type='text' id='firstName' onChange={handleChange} placeholder='Wahab' />
                                </div>
                                <div className='inputGroup'>
                                    <label className='label'>Last Name</label>
                                    <input className='input' type='text' id='lastName' onChange={handleChange} placeholder='Lawal' />
                                </div>
                                <div className='inputGroup relative'>
                                    <label className='label'>Password</label>
                                    <input className='input' type={showPassword ? 'text' : 'password'} id='password' onChange={handleChange} placeholder='Gabon4351' />
                                    <div onClick={seePassword} className='absolute right-[10px] bottom-[10px] text-[20px] cursor-pointer'>
                                        {
                                            showPassword ? (
                                                <FaEye />
                                            ) : (
                                                <FaRegEyeSlash />
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='inputGroup relative'>
                                    <label className='label'>Confirm Password</label>
                                    <input className='input' type={showConfirmPassword ? 'text' : 'password'} id='confirmPassword' onChange={handleChange} placeholder='Gabon4351' />
                                    <div onClick={seeConfirmPassword} className='absolute right-[10px] bottom-[10px] text-[20px] cursor-pointer'>
                                        {
                                            showConfirmPassword ? (
                                                <FaEye />
                                            ) : (
                                                <FaRegEyeSlash />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                isLoading ? (
                                    <LoadingBtn />
                                ) : (

                                    <ButtonTwo onClick={handleSignup} text={'Create Account'} />
                                )
                            }
                        </div>
                    </div>

                </form>
            </div>

        </div>
    </div>
  )
}

export default Register