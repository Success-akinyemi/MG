import toast from "react-hot-toast"
import ButtonTwo from "../Helpers/ButtonTwo"

function TransactionPin({formData, setFormData, setSelectedCard}) {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = () => {
        if(!formData.transactionPin){
            toast.error('Enter Transaction Pin')
            return
        }
        setFormData({ ...formData, proceed: true })
    } 
  return (
    <div className="w-full card2 flex flex-col gap-6 relative">
        <div onClick={() => setSelectedCard(null)} className="absolute right-0 p-2 cursor-pointer border-[1px] border-gray-70 text-gray-90 rounded-full h-[30px] w-[30px] text-[30px] flex items-center justify-center">
            <span>&times;</span>
        </div>
        <h2 className="text-[20px] font-semibold text-gray-60 text-center">Enter Transaction Pin</h2>
        
        <div className="flex flex-col gap-3">
            <div className="inputGroup">
                    <label className="label">Transaction Pin</label>
                    <input onChange={handleChange} className="input" max={4} id="transactionPin" placeholder="****" type="password" />
            </div>
        </div>

        <ButtonTwo onClick={handleSubmit} text={'Submit'} />
    </div>
  )
}

export default TransactionPin