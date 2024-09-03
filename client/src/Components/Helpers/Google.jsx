import GoogleImg from '../../assets/google.png'

function Google({text, isLoading}) {
  return (
    <button disabled={isLoading} className='pad2 cursor-pointer w-full flex items-center justify-center gap-2 rounded-[12px] bg-white border-[1px] border-[#D7E1F4] shadow-shadow'>
        <img src={GoogleImg} alt='sign up with google' className='w-[21px]  h-[21 px]' />
        <p className='text-[18px]'>{text}</p>
    </button>
  )
}

export default Google