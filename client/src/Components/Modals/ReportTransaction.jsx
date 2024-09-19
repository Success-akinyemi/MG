import ButtonTwo from "../Helpers/ButtonTwo"
import { FaFileUpload } from "react-icons/fa";

function ReportTransaction({formData, setFormData, setSelectedCard}) {
  return (
    <div className="flex gap-6 w-full flex-col">
        <div className="flex flex-col gap-2">
            <h2 className="text-[20px] text-gray-70 font-semibold">
                Report an Incident
            </h2>

            <p className="text-[14px] font-normal text-gray-70">
                Our representative will response as soon as poosible
            </p>
        </div>

        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <div className="inputGroup flex flex-col gap-4">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Lawal Wahab Babatunde" />
                </div>
                <div className="inputGroup flex flex-col gap-4">
                    <label className="label">Description</label>
                    <textarea type="text" className="input textarea h-[120px]" placeholder="Enter Description"></textarea>
                </div>
                <div className="w-[50%] small-phone:w-[70%] flex items-center justify-center">
                    <div className="cursor-pointer rounded-[6px] p-2 flex items-center gap-[10px] bg-gray-20">
                        <p className="text-[16px] font-semibold text-second-color">Upload Document</p>
                        <FaFileUpload className="text-[20px] text-second-color" />
                    </div>
                </div>
            </div>

            <ButtonTwo text={'Submit'} />
        </div>
    </div>
  )
}

export default ReportTransaction