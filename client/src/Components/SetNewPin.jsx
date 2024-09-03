import ButtonTwo from "./Helpers/ButtonTwo"

function SetNewPin() {

    const handleNewPin = () => {

    }
  return (
    <form className={`card1 w-full`}>
        <div className="flex flex-col w-full gap-8">
            <div>
                <div className="inputGroup">
                    <label className="label">Current Pin</label>
                    <input type="text" className="input" placeholder="Enter Current PIN" />
                </div>
                <div className="inputGroup">
                    <label className="label">New Pin</label>
                    <input type="text" className="input" placeholder="Enter New PIN" />
                </div>
                <div className="inputGroup">
                    <label className="label">Confirm New Pin</label>
                    <input type="text" className="input" placeholder="Enter New PIN" />
                </div>
            </div>

            <ButtonTwo onClick={handleNewPin} text={'Submit'} />
        </div>
    </form>
  )
}

export default SetNewPin