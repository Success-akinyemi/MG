import { useState } from "react"
import Sidebar from "../Components/Sidebar"
import TopNav from "../Components/TopNav"
import CardOne from "../Components/Cards/AirtimeToCash/CardOne"
import CardTwo from "../Components/Cards/AirtimeToCash/CardTwo"
import CardThree from "../Components/Cards/AirtimeToCash/CardThree"
import toast from "react-hot-toast"

function AirtimeToCash({toggleMenu, showMenu, formData, setFormData, setSelectedCard}) {
    const [ activeCard, setActiveCard ] = useState('cardOne')
    const [ cardOne, setCardOne ] = useState(false)
    const [ cardTwo, setCardTwo ] = useState(false)
    const [ cardThree, setCardThree ] = useState(false)

    const [ isLoading, setIsLoading ] = useState(false)

    const handleCardOne = () => {
        setCardTwo(false)
        setCardThree(false)
        setActiveCard('cardOne')
    }

    const handleCardTwo = () => {
        if(!formData.networkCode){
            toast.error('Select a network')
            return
        }
        if(!formData.phoneNumber){
            toast.error('Enter Phone Number')
            return
        }
        if(!formData.amount){
            toast.error('Enter Amount')
            return
        }
        if(!formData.airtimeSharePin){
            toast.error('Enter Airtime share Pin')
            return
        }
        setCardOne(true)
        setActiveCard('cardTwo')
    }

    const handleCardThree = () => {
        
        setActiveCard('cardThree')
    }

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
                    <TopNav toggleMenu={toggleMenu} showMenu={showMenu} title={'Airtime to Cash'} />
                </div>

                <div className="flex items-center justify-center w-full small-pc:flex-col">
                    {/**Card */}
                    <div className="w-[500px] phone:w-[90%] mt-8 flex flex-col gap-[54px]">
                    <div className="w-full flex gap-2">
                <div
                  onClick={handleCardOne}
                  className="flex flex-col flex-1 cursor-pointer text-center gap-[8px]"
                >
                  <p
                    className={`text-[14px] ${
                      activeCard === "cardOne"
                        ? "text-second-color"
                        : cardOne
                        ? "text-success"
                        : "text-gray-30"
                    }`}
                  >
                    Fill info
                  </p>
                  <span
                    className={`w-full h-[7px] rounded-[100px] ${
                      activeCard === "cardOne"
                        ? "bg-second-color"
                        : cardOne
                        ? "bg-success"
                        : "bg-gray-30"
                    }`}
                  ></span>
                </div>
                <div
                  onClick={handleCardTwo}
                  className="flex flex-col flex-1 cursor-pointer text-center gap-[8px]"
                >
                  <p
                    className={`text-[14px] ${
                      activeCard === "cardTwo"
                        ? "text-second-color"
                        : cardTwo
                        ? "text-success"
                        : "text-gray-30"
                    }`}
                  >
                    Make Payment
                  </p>
                  <span
                    className={`w-full h-[7px] rounded-[100px] ${
                      activeCard === "cardTwo"
                        ? "bg-second-color"
                        : cardTwo
                        ? "bg-success"
                        : "bg-gray-30"
                    }`}
                  ></span>
                </div>
                <div
                  onClick={handleCardThree}
                  className="flex flex-col flex-1 cursor-pointer text-center gap-[8px]"
                >
                  <p
                    className={`text-[14px] ${
                      activeCard === "cardThree"
                        ? "text-success"
                        : cardThree
                        ? "text-success"
                        : "text-gray-30"
                    }`}
                  >
                    View Receipt
                  </p>
                  <span
                    className={`w-full h-[7px] rounded-[100px] ${
                      activeCard === "cardThree"
                        ? "bg-success"
                        : cardThree
                        ? "bg-success"
                        : "bg-gray-30"
                    }`}
                  ></span>
                </div>
              </div>

                        <div>
                            {
                                activeCard === 'cardOne' && (
                                    <CardOne setActiveCard={setActiveCard} setCardOne={setCardOne} formData={formData} setFormData={setFormData} />
                                )
                            }
                            {
                                activeCard === 'cardTwo' && (
                                    <CardTwo setActiveCard={setActiveCard} formData={formData} setFormData={setFormData} />
                                )
                            }
                            {
                                activeCard === 'cardThree' && (
                                    <CardThree setActiveCard={setActiveCard} formData={formData} setFormData={setFormData} />
                                )
                            }
                        </div>
                    </div>
                    {/**END OF CARD */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default AirtimeToCash