import toast from "react-hot-toast"
import { network } from "../../../Data/networks"
import ButtonTwo from "../../Helpers/ButtonTwo"
import { useEffect, useState } from "react"
import { dataPlans } from "../../../Data/dataPlans"

function CardOne({ formData, setFormData, setActiveCard, setCardOne }) {
    const [availablePlans, setAvailablePlans] = useState([]);
    const [amount, setAmount] = useState();
    
    const networks = network;
    const dataplan = dataPlans;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    useEffect(() => {
        console.log('FORM',formData)
    } , [formData])

    const handleNetworkChange = (e) => {
        const value = e.target.value;
        const selectedNetwork = networks.find(network => network.code === value);
            setFormData({ ...formData, networkCode: selectedNetwork.code, networkName: selectedNetwork.name });

            const filterPlans = dataplan.filter(plan => plan.networkCode === value);
            setAvailablePlans(filterPlans);
    };

    const handlePlanChange = (e) => {
        const value = e.target.value;
        const selectedPlan = availablePlans.find(plan => plan._id === value);
        if (selectedPlan) {
            setAmount(selectedPlan.price);
            setFormData({
                ...formData,
                networkCode: selectedPlan.networkCode,
                networkName: selectedPlan.networkName,
                planId: selectedPlan._id,
                price: selectedPlan.price,
                planName: `${selectedPlan.networkName} - ${selectedPlan.planName} for ${selectedPlan.validity} - ${selectedPlan.price}`
            });
        }
    };


    
    const handleNext = () => {
        if(!formData.networkCode){
            toast.error('Select a network')
            return
        }
        if(!formData.phoneNumber){
            toast.error('Enter Phone Number')
            return
        }
        if(!formData.planId){
            toast.error('Select bundle')
            return
        }
        if(!formData.price){
            toast.error('Enter Amount')
            return
        }
        const timeStamp = Date.now()
        setFormData({ ...formData, status: 'Initiated' , totalAmount: formData?.price, transactionId: timeStamp })
        setActiveCard('cardTwo')
        setCardOne(true)
    }

    
  return (
    <div className="card3">
        <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-[20px] text-gray-60 text-center">Buy Data</h2>
            
            <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 w-full small-phone:flex-col">
                    <div className="inputGroup w-full flex-1">
                        <label className="label text-[14px]">Select Network</label>
                        <select onChange={handleNetworkChange} className="input text-gray-60 font-semibold" id='networkCode'  >
                            <option value="">-- Select Network --</option>
                            {
                                networks.map((item, idx) => (
                                    <option key={idx} className="text-gray-60 text-[14px] flex items-center gap-[2px]" id="networkCode" value={item.code}>
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
                        <label className="label text-[14px]">Plan</label>
                        <select onChange={handlePlanChange} className="input text-gray-60 font-semibold" id='dataPlanId'  >
                            <option value="">-- Select Plan --</option>
                            {
                                availablePlans.map((item, idx) => (
                                    <option key={idx} className="text-gray-60 text-[14px] flex items-center gap-[2px]" id="dataPlanId" value={item._id}>
                                        <p>{item.networkName} - {item.planName} for {item.validity} - {item.price}</p>
                                    </option>
                                ))
                            }
                        </select>
                </div>
                <div className="inputGroup gap-[6px]">
                    <label className="label text-[14px]">Amount</label>
                    <input type="number" id="amount" className="input text-[14px] text-gray-60 font-semibold bg-gray-30 border-[1px] border-[#C7DBEF]" disabled value={formData?.price} />
                </div>
            </div>
        </div>

        <ButtonTwo onClick={handleNext} text={'Proceed'} />
    </div>
  )
}

export default CardOne