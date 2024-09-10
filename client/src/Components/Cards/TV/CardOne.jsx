import toast from "react-hot-toast"
import ButtonTwo from "../../Helpers/ButtonTwo"
import { useEffect, useState } from "react"
import { providers } from "../../../Data/serviceProviders"

function CardOne({ formData, setFormData, setActiveCard, setCardOne }) {
    const [ availbaleBundle, setAvailableBundle] = useState([])

    const serviceProvider = providers

    useEffect(() => {
        console.log('FORM',formData)
    } , [formData])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleNetworkChange = (e) => {
        const value = e.target.value
        const filterData = serviceProvider.find(provider => provider._id === value)
        setFormData({ ...formData, serviceProviderCode: filterData?.code, serviceProviderName: filterData?.name })
        
        //filter for bundles
    }
    
    const handleBundleChange = (e) => {}

    //useEffect to verify smart card name here

    const handleNext = () => {
        if(!formData.serviceProviderCode){
            toast.error('Select a service provider')
            return
        }
        if(!formData.smartCardNumber){
            toast.error('Enter smart card Number')
            return
        }
        //check for selected bundle (bundlePlan bundleId) and smart card name
        const timeStamp = Date.now()
        setFormData({ ...formData, status: 'Initiated' , totalAmount: formData?.amount, transactionId: timeStamp })
        setActiveCard('cardTwo')
        setCardOne(true)
    }

    
  return (
    <div className="card3">
        <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-[20px] text-gray-60 text-center">TV Subscription</h2>
            
            <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 w-full small-phone:flex-col">
                    <div className="inputGroup w-full flex-1">
                        <label className="label text-[14px]">Select Provider</label>
                        <select onChange={handleNetworkChange} className="input text-gray-60 font-semibold" id='serviceProvider'  >
                            <option value="">-- Select Provider --</option>
                            {
                                serviceProvider.map((item, idx) => (
                                    <option key={idx} className="text-gray-60 font-semibold text-[14px] flex items-center gap-[2px]" id="serviceProvider" value={item._id}>
                                        <p>{item.name}</p>
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="inputGroup w-full flex-1">
                        <label className="label text-[14px]">Smart Card Number</label>
                        <input type="text" onChange={handleChange} defaultValue={formData?.smartCardNumber} id="smartCardNumber" className="input text-[14px] text-gray-60 font-semibold" placeholder="14315422742" />
                    </div>
                </div>
                <div className="inputGroup gap-[6px]">
                        <label className="label text-[14px]">Plan</label>
                        <select onChange={handleBundleChange} className="input text-gray-60 font-semibold" id='bundleId'  >
                            <option value="">-- Select Bundle --</option>
                            {
                                availbaleBundle.map((item, idx) => (
                                    <option key={idx} className="text-gray-60 text-[14px] flex items-center gap-[2px]" id="bundleId" value={item._id}>
                                        <p>{item.networkName} - {item.planName} for {item.validity} - {item.price}</p>
                                    </option>
                                ))
                            }
                        </select>
                </div>
                <div className="inputGroup gap-[6px]">
                    <label className="label text-[14px]">Amount</label>
                    <input type="number" id="amount" className="input text-[14px] text-gray-60 font-semibold bg-gray-30 border-[1px] border-[#C7DBEF]" disabled value={''} />
                </div>
            </div>
        </div>

        <ButtonTwo onClick={handleNext} text={'Proceed'} />
    </div>
  )
}

export default CardOne