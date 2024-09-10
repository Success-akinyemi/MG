import { useEffect, useState } from "react"
import BankingImg from '../../assets/M-Banking.png'
import CardImg from '../../assets/card.png'

function FundWallet ({setPopupBg}) {
    const [ showAmount, setShowAmount ] = useState(false)

    useEffect(() => {
        setPopupBg(true)
    }, [setPopupBg])

  return (
    <div className="w-full card2 flex flex-col gap-6">
        <h2 className="text-[20px] font-semibold text-gray-60 text-center">Fund Wallet</h2>

        <div className="flex flex-col gap-3">
            <div className="w-full bg-white flex flex-col items-center gap-[10px] border-[1px] border-l-gray-30 p-2 rounded-[10px]">
                <div onClick={() => setShowAmount((prev) => !prev)} className="w-full cursor-pointer flex items-center gap-2 border-[1px] border-l-gray-30 p-2 rounded-[10px]">
                    <img src={CardImg} alt="Fund With Bank Transfer" className="w-[34px] h-[34px]" />
                    <p className="text-[16px] font-semibold text-second-color">Fund With Bank Transfer</p>
                </div>
                {
                    showAmount && (
                        <div className="w-full" >
                            <input type="number" className="input w-full placeholder:text-gray-90" placeholder="Enter Amount" />
                        </div>
                    )
                }
            </div>

            <div className="w-full bg-white cursor-pointer flex items-center gap-2 border-[1px] border-l-gray-30 p-2 rounded-[10px]">
                <img src={BankingImg} alt="Fund With Bank Transfer" className="w-[34px] h-[34px]" />
                <p className="text-[16px] font-semibold text-second-color">Fund With Card</p>
            </div>
        </div>
    </div>
  )
}

export default FundWallet