import toast from "react-hot-toast"
import { network } from "../../../Data/networks"
import ButtonTwo from "../../Helpers/ButtonTwo"
import { useEffect } from "react"

function CardOne({ formData, setFormData, setActiveCard, setCardOne }) {

    const networks = network
    useEffect(() => {
        setFormData({ ...formData, proceed: false });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleNetworkChange = (e) => {
        const value = e.target.value
        const filterData = networks.filter(networks => networks.code === value)
        setFormData({ ...formData, networkCode: filterData[0].code, networkName: filterData[0].name })
    }
    
    const handleNext = () => {
        if(!formData.networkCode){
            toast.error('Select a network')
            return
        }
        if(!formData.phoneNumber){
            toast.error('Enter Phone Number')
            return
        }
        const mobileRegex = /^(090|091|080|081|070|071)\d{8}$/;
        if (!mobileRegex.test(formData.phoneNumber)) {
            toast.error('Invalid phone number format')
            return
        }
        if(!formData.amount){
            toast.error('Enter Amount')
            return
        }
        const timeStamp = Date.now()
        setFormData({ ...formData, status: 'Initiated' , totalAmount: formData?.amount, transactionId: timeStamp })
        setActiveCard('cardTwo')
        setCardOne(true)
    }

    
  return (
    <div className="card3">
        <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-[20px] text-gray-60 text-center">Buy Airtime</h2>
            
            <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 w-full small-phone:flex-col">
                    <div className="inputGroup w-full flex-1">
                        <label className="label text-[14px]">Select Network</label>
                        <select onChange={handleNetworkChange} className="input text-gray-60 font-semibold" id='networkCode'  >
                            <option value="">-- Select Network --</option>
                            {
                                networks.map((item, idx) => (
                                    <option key={idx} className="text-gray-60 text-[14px] flex items-center gap-[2px]" id="networkCode" value={item._id}>
                                        <img alt={item.name} src={item.icon} className="w-[17px]" />
                                        <p>{item.name}</p>
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="inputGroup w-full flex-1">
                        <label className="label text-[14px]">Phone Number</label>
                        <input type="text" onChange={handleChange} defaultValue={formData?.phoneNumber} id="phoneNumber" className="input text-[14px] text-gray-60 font-semibold" placeholder="08094562627" />
                    </div>
                </div>
                <div className="inputGroup gap-[6px]">
                    <label className="label text-[14px]">Amount</label>
                    <input type="text" onChange={handleChange} defaultValue={formData?.amount} id="amount" className="input text-[14px] text-gray-60 font-semibold" placeholder="₦5,000" />
                </div>
            </div>
        </div>

        <ButtonTwo onClick={handleNext} text={'Proceed'} />
    </div>
  )
}

export default CardOne