import Sidebar from "../Components/Sidebar"
import TopNav from "../Components/TopNav"

function PayElectricBill({toggleMenu, showMenu}) {
  return (
    <div className="flex w-full min-h-[100vh]">
        <div className="relative flex w-[304px] h-full overflow-y-hidden medium-pc:hidden">
            <div className='fixed w-[304px] left-0 top-0 flex h-full'>
                <Sidebar />
            </div>
        </div>

        <div className='relative flex min-h-full w-[80.5%] medium-pc:w-full justify-center ml-auto'>
            <div className="w-[96%] phone:w-[96%]">
                <div className="mt-6">
                    <TopNav toggleMenu={toggleMenu} showMenu={showMenu} title={'Buy Airtime'} />
                </div>
                
                <div className="small-pc:flex-col">

                </div>
            </div>
        </div>
    </div>
  )
}

export default PayElectricBill