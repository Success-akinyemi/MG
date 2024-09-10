import LogoImg from '../../../assets/logo.png'
import Button from '../../Helpers/Button'
import ButtonTwo from '../../Helpers/ButtonTwo'

function CardThree({ formData, setFormData, setActiveCard }) {

  const handleDownloadRecipt = () => {

  }

  return (
    <div className="card3">
        <div className="w-full flex flex-col gap-8 items-center">

          <img src={LogoImg} alt='subsum logo' className='w-[162px] h-[31px]' />

          <div className='w-full flex flex-col gap-2'>
            <span className='flex items-center justify-between'>
              <h3 className='font-normal text-[14px] text-gray-70'>Date</h3>
              <p className={`text-[14px] text-gray-80 font-medium`}></p>
            </span>
            <span className='flex items-center justify-between'>
              <h3 className='font-normal text-[14px] text-gray-70'>Status</h3>
              <p className={`text-[14px] text-gray-80 font-medium`}></p>
            </span>
            <span className='flex items-center justify-between'>
              <h3 className='font-normal text-[14px] text-gray-70'>Transaction Details</h3>
              <p className={`text-[14px] text-gray-80 font-medium`}></p>
            </span>
            <span className='flex items-center justify-between'>
              <h3 className='font-normal text-[14px] text-gray-70'>Service</h3>
              <p className={`text-[14px] text-gray-80 font-medium`}></p>
            </span>
            <span className='flex items-center justify-between'>
              <h3 className='font-normal text-[14px] text-gray-70'>Network</h3>
              <p className={`text-[14px] text-gray-80 font-medium`}></p>
            </span>
            <span className='flex items-center justify-between'>
              <h3 className='font-normal text-[14px] text-gray-70'>transaction ID</h3>
              <p className={`text-[14px] text-gray-80 font-medium`}></p>
            </span>
            <span className='flex items-center justify-between'>
              <h3 className='font-normal text-[14px] text-gray-70'>Total</h3>
              <p className={`text-[14px] text-gray-80 font-medium`}></p>
            </span>
          </div>

          <div className="w-full border-[1px] border-l-gray-30 bg-white rounded-[12px] flex flex-col p-4 gap-4">
            <ButtonTwo onClick={handleDownloadRecipt} text={'Download Recept'} />

            <Button bg={false} name={'Report Transaction'} link={'support'} styles={`text-error bg-gray-10 border-[2px]`} />
          </div>

        </div>
    </div>
  )
}

export default CardThree