import ButtonTwo from "../Helpers/ButtonTwo"

function EditProfile() {
    const user = {
        name: 'Lawal Wahab Babatunde',
        phoneNumber: '07089075584',
        referralLink: 'subsum@company.com/456765'
    }

    const handleUpdateProfile = async () => {
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <div className="w-full card2">
        <h2 className="w-full font-semibold text-[20px] text-gray-70">Edit Details</h2>

        <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
                <div className="inputGroup">
                    <label className="label">Name</label>
                    <input className="input" defaultValue={user.name} type="text" />
                </div>
                <div className="inputGroup">
                    <label className="label">Phone Number</label>
                    <input className="input" defaultValue={user.phoneNumber} type="text" />
                </div>
                <div className="inputGroup">
                    <label className="label">Referral Link</label>
                    <input className="input" defaultValue={user.referralLink} type="text" />
                </div>
            </div>

            <ButtonTwo onClick={handleUpdateProfile} text={'Confirm Changes'} />
        </div>
    </div>
  )
}

export default EditProfile