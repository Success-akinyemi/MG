import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import TopNav from "../Components/TopNav";
import MTNImg from '../assets/mtn.png'
import AirtelImg from '../assets/airtel2.png'
import GloImg from '../assets/glo.png'
import NineMobileImg from '../assets/9mobile2.png'
import DSTVIMG from '../assets/dstv.png'
import StartimesImg from '../assets/startimes.png'
import ShowMaxImg from '../assets/showmax.png'
import { useFetchUserTransaction } from "../Helpers/fetch.hooks";



function TransactionDetailPage({ toggleMenu, showMenu }) {
  const loc = useLocation()
  const pathName = loc.pathname.split('/')[2]
    const { isFetchingUserTransction, userTransaction } = useFetchUserTransaction(pathName)

    
  return (
    <div className="flex w-full min-h-[100vh]">
      <div className="relative flex w-[304px] h-full overflow-y-hidden medium-pc:hidden">
        <div className="fixed w-[304px] left-0 top-0 flex h-full">
          <Sidebar />
        </div>
      </div>

      <div className="relative flex min-h-full w-[80.5%] medium-pc:w-full justify-center ml-auto">
        <div className="w-[96%] phone:w-[96%]">
          <div className="mt-6">
            <TopNav
              toggleMenu={toggleMenu}
              showMenu={showMenu}
              title={"Transaction Detais"}
            />
          </div>

          <div className="small-pc:flex-col">
            pathName {pathName}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetailPage;
