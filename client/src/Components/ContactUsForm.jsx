import { useState } from "react"
import ButtonTwo from "./Helpers/ButtonTwo"

function ContactUsForm() {
    const [ formData, setFormData ] = useState({})
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = () => {

    }

  return (
    <div className="flex flex-col w-[432px] phone:w-[94%] rounded-[12px] border-[1px] p-6 border-gray-30 bg-white gap-3">
        <h2 className="font-bold text-[20px] text-gray-70">SEND US A MESSAGE</h2>
        <form className="flex flex-col gap-8" >
            <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col">
                    <label className="label">Name</label>
                    <input onChange={handleChange} type="text" id="name" className="input" />
                </div>
                <div className="flex flex-col">
                    <label className="label">Email</label>
                    <input onChange={handleChange} type="email" id="email" className="input" />
                </div>
                <div className="flex flex-col">
                    <label className="label">Phone Number</label>
                    <input onChange={handleChange} type="text" id="phoneNumebr" className="input" />
                </div>
                <div className="flex flex-col">
                    <label className="label">Message</label>
                    <textarea onChange={handleChange} type="text" id="message" className="input textarea h-[120px]" ></textarea>
                </div>
            </div>

            <ButtonTwo text={'Submit'} onClick={handleSubmit} />

        </form>
    </div>
  )
}

export default ContactUsForm