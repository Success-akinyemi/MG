import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Pages/Authorization/Register'
import Login from './Pages/Authorization/Login'
import SignupSuccessful from './Pages/Authorization/SignupSuccessful'
import { Toaster } from 'react-hot-toast'
import ResetPassword from './Pages/Authorization/ResetPassword'
import ForgotPasword from './Pages/Authorization/ForgotPasword'
import ResetEmailSent from './Pages/Authorization/ResetEmailSent'
import VerifyUser from './Pages/Authorization/VerifyUser'
import CreatePin from './Pages/CreatePin'
import PinCreated from './Pages/PinCreated'
import JoinWhatsappCommunity from './Pages/JoinWhatsappCommunity'
import Dashboard from './Pages/Dashboard'
import BuyData from './Pages/BuyData'
import BuyAirtime from './Pages/BuyAirtime'
import Profile from './Pages/Profile'
import { useEffect, useState } from 'react'
import EditProfile from './Components/Modals/EditProfile'
import FundWallet from './Components/Modals/FundWallet'
import Support from './Pages/Support'
import AirtimeToCash from './Pages/AirtimeToCash'
import TranscationHistroy from './Pages/TranscationHistroy'
import TransactionPin from './Components/Modals/TransactionPin'
import TransactionSuccessful from './Components/Modals/TransactionSuccessful'
import TransactionFailed from './Components/Modals/TransactionFailed'
import TransactionPending from './Components/Modals/TransactionPending'

function App() {
  const [ selectedCard, setSelectedCard ] = useState(null)
  const [ popupBg, setPopupBg ] = useState(false)
  const [ showMenu, setShowMenu ] = useState(false)

  const [ formData, setFormData ] = useState({})

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  const renderPopup = () => {
    switch(selectedCard){
      case 'editProfile' : 
        return (
          <div>
            <EditProfile/>
          </div>
        )
       case 'fundWallet' : 
        return (
          <div>
            <FundWallet setPopupBg={setPopupBg} />
          </div>
        ) 
      case 'setTransactionPin':
        return (
          <div>
            <TransactionPin setFormData={setFormData} formData={formData} setSelectedCard={setSelectedCard} />
          </div>
        ) 
      case 'transactionSuccessful':
        return (
          <div>
            <TransactionSuccessful selectedCard={selectedCard} />
          </div>
        )
      case 'transactionFailed':
        return (
          <div>
            <TransactionFailed selectedCard={selectedCard} />
          </div>
        )
      case 'transactionPending':
        return (
          <div>
            <TransactionPending selectedCard={selectedCard} />
          </div>
        )
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('popup-overlay')) {
        setSelectedCard(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const closePopup = () => {
    setSelectedCard(null);
  };

    return (
    <div className='app'>
      {
        selectedCard && (
          <>
            <div className='popup-overlay z-40 fixed flex items-center justify-center top-0 left-0 w-[100vw] h-[100vh] bg-gray-100-opa '>
              <div className={`z-50 w-[432px] phone:w-[90%] h-auto m-auto rounded-[12px] border-[1px] p-[24px] flex flex-col gap-6 ${popupBg ? 'bg-gray-10' : 'bg-white'} border-gray-30`}>
                <div className='w-full'>
                    {renderPopup()}
                </div>
              </div>
            </div>
          </>
        )
      }
      <Toaster position='top-center'></Toaster>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPasword />} />
          <Route path='/signup-successful' element={<SignupSuccessful />} />
          <Route path='/reset-password/:resetToken' element={<ResetPassword />} />
          <Route path='/reset-email-sent' element={<ResetEmailSent />} />
          <Route path='/:id/verify/:token' element={<VerifyUser />} />
          <Route path='/login' element={<Login />} />

          <Route path='create-pin' element={<CreatePin />} />
          <Route path='/pin-created' element={<PinCreated />} />
          <Route path='/join-whatsapp-community' element={<JoinWhatsappCommunity />} />
          <Route path='/buy-airtime' element={<BuyAirtime toggleMenu={toggleMenu} showMenu={showMenu} setSelectedCard={setSelectedCard} formData={formData} setFormData={setFormData} />} />
          <Route path='/buy-data' element={<BuyData toggleMenu={toggleMenu} showMenu={showMenu} setSelectedCard={setSelectedCard} formData={formData} setFormData={setFormData} />} />
          
          <Route path='/dashboard' element={<Dashboard setSelectedCard={setSelectedCard} toggleMenu={toggleMenu} showMenu={showMenu} />} />
          <Route path='/support' element={<Support toggleMenu={toggleMenu} showMenu={showMenu} />} />
          <Route path='/airtime-to-cash' element={<AirtimeToCash toggleMenu={toggleMenu} showMenu={showMenu} />} />
          <Route path='/profile' element={<Profile setSelectedCard={setSelectedCard} toggleMenu={toggleMenu} showMenu={showMenu} />} />
          <Route path='/transaction-histroy' element={<TranscationHistroy setSelectedCard={setSelectedCard} toggleMenu={toggleMenu} showMenu={showMenu} />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
