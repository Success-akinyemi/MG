import toast from "react-hot-toast"
import ButtonTwo from "../../Helpers/ButtonTwo"
import { useEffect } from "react"
import { electricProviders, meterType } from "../../../Data/electricProviders"

function CardOne({ formData, setFormData, setActiveCard, setCardOne }) {

    const meterTypeUsed = meterType
    const providers = electricProviders

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    useEffect(() => {
        console.log('FORM',formData)
    } , [formData])

    const handleMeterChange = (e) => {
        const value = e.target.value;
        const filterData = meterTypeUsed.find(meterType => meterType.code === value);
        if (filterData) {
            setFormData({ ...formData, meterType: filterData.name });
        }
    }

    const handleElectricProviderChange = (e) => {
        const value = e.target.value
        const filterElectricProvider = providers.find(provider => provider._id === value)
        if(filterElectricProvider){
            setFormData({
                ...formData, 
                providerName: filterElectricProvider.name,
                providerCode: filterElectricProvider.code,
                providerSlug: filterElectricProvider.slug
            })
        }
    }
    
    const handleNext = () => {
        if(!formData.meterNumber){
            toast.error('Enter Meter Number')
            return
        }
        if(!formData.meterType){
            toast.error('Select Meter Type')
            return
        }
        if(!formData.providerCode){
            toast.error('Select Electric Provider')
            return
        }
        if(!formData.amount){
            toast.error('Enter Amount')
            return
        }
        const timeStamp = Date.now()
        setFormData({ ...formData, status: 'Initiated' , totalAmount: formData?.amount, transactionId: timeStamp })
        setCardOne(true)
        setActiveCard('cardTwo')
    }

    
  return (
    <div className="card3">
        <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-[20px] text-gray-60 text-center">Electric Bill</h2>
            
            <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 w-full small-phone:flex-col">
                    <div className="inputGroup w-full flex-1">
                        <label className="label text-[14px]">Meter Number</label>
                        <input type="text" onChange={handleChange} id="meterNumber" defaultValue={formData?.meterNumber} className="input text-[14px] placeholder:text-gray-60 text-gray-60 font-semibold" placeholder="14315422742" />
                    </div>
                    <div className="inputGroup w-full flex-1">
                        <label className="label text-[14px]">Meter Type</label>
                        <select onChange={handleMeterChange} className="input text-gray-60 font-semibold" id='meterType'  >
                            <option value="">-- Select Type --</option>
                            {
                                meterTypeUsed.map((item, idx) => (
                                    <option key={idx} className="text-gray-60 text-[14px] flex items-center gap-[2px]" id="meterType" value={item.code}>
                                        <p>{item.name}</p>
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="inputGroup gap-[6px]">
                    <label className="label text-[14px]">Provider</label>
                    <select onChange={handleElectricProviderChange} className="input text-gray-60 font-semibold" id='electricProvider'  >
                        <option value="">-- Select Provider --</option>
                        {
                            providers.map((item, idx) => (
                                <option key={idx} className="text-gray-60 text-[14px] flex items-center gap-[2px]" id="electricProvider" value={item._id}>
                                    <p>{item.name}</p>
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="inputGroup gap-[6px]">
                    <label className="label text-[14px]">Amount</label>
                    <input type="text" onChange={handleChange} id="amount" defaultValue={formData?.amount} className="input text-[14px] placeholder:text-gray-60 text-gray-60 font-semibold" placeholder="₦5,000" />
                </div>
            </div>
        </div>

        <ButtonTwo onClick={handleNext} text={'Proceed'} />
    </div>
  )
}

export default CardOne