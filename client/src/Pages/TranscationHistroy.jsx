import { Link } from 'react-router-dom';
import FilterImg from '../assets/filter.png'
import Sidebar from '../Components/Sidebar'
import TopNav from '../Components/TopNav'
//import { transactionHistroy } from '../Data/transactionHistroy'
import { TbCurrencyNaira } from "react-icons/tb";
import ErrorRed from '../assets/error-red.png'
import ErrorYellow from '../assets/error-yellow.png'
import ErrorGreen from '../assets/error-green.png'
import { useFetchUserTransaction } from '../Helpers/fetch.hooks';


function TranscationHistroy({toggleMenu, showMenu}) {
    const { isFetchingUserTransction, userTransaction } = useFetchUserTransaction()
    console.log('first', userTransaction?.data )
    const transactionHistroy = userTransaction?.data
    
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // Special case for 11-13
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    
    // Utility function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        
        // Get the day, month, year, and time components
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        // Convert hours to 12-hour format and determine AM/PM
        const isPM = hours >= 12;
        const formattedHours = ((hours + 11) % 12 + 1); // Convert to 12-hour format
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const period = isPM ? 'PM' : 'AM';
        
        // Format the date string
        return `${day}${getOrdinalSuffix(day)} ${month}, ${year}, ${formattedHours}:${formattedMinutes}${period}`;
    };

  return (
    <div className="flex w-full min-h-[100vh] overflow-y-hidden">
        <div className="relative flex w-[304px] h-full overflow-y-hidden medium-pc:hidden">
            <div className='fixed w-[304px] left-0 top-0 flex h-full'>
                <Sidebar />
            </div>
        </div>

        <div className='relative flex min-h-full w-[80.5%] medium-pc:w-full justify-center ml-auto'>
            <div className="w-[96%] phone:w-[96%]">
                <div className="mt-6">
                    <TopNav toggleMenu={toggleMenu} showMenu={showMenu} title={'Transaction Histroy'} />
                </div>
                
                <div className="flex-col mt-8">
                    <div className="flex p-2 w-[190px] cursor-pointer rounded-[12px] border-[1px] border-gray-30 bg-gray-10 items-center gap-2">
                        <img className='w-[15.6px] h-[9.6px]' alt='filter' src={FilterImg} />
                        <p className="text-[16px] text-color-4">Filter</p>
                    </div>

                    <table className='overflow-y-auto mt-12 h-full w-[96%] border-collapse'>
    <thead className='w-full text-center phone:text-start'>
        <tr className="text-[14px] text-gray-60 text-center  phone:text-start">
            <th className='p-2 phone:text-start'>Services</th>
            <th className='p-2 phone:text-start'>Amount</th>
            <th className='p-2 phone:hidden'>Total Amount</th>
            <th className='p-2 phone:text-start'>Status</th>
            <th className='p-2 phone:hidden'>Payment Method</th>
            <th className='p-2 tablet:hidden'>Transaction No.</th>
            <th className='p-2 phone:hidden'>Action</th>
        </tr>
    </thead>

    <tbody className='w-full text-center phone:text-start'>
        {transactionHistroy?.map((item) => (
            <tr key={item._id} className='border-b border-gray-30'>
                <td className='p-2'>
                    <Link to={`/transaction/${item._id}`} className='flex gap-2 items-center'>
                        {
                            item.status === 'Successful' ? 
                            <img className='w-4 h-4' alt={item.status} src={ErrorGreen} /> :
                            item.status === 'Initiated' ? 
                            <img className='w-4 h-4' alt={item.status} src={ErrorYellow} /> :
                            <img className='w-4 h-4' alt={item.status} src={ErrorRed} />
                        }
                        <div className='flex flex-col gap-[10px]'>
                            <h2 className='text-[12px] text-gray-70 font-semibold'>{item.service}</h2>
                            <p className='text-[12px] text-gray-70'>{item.number}</p>
                        </div>
                    </Link>
                </td>
                <td className='p-2 text-[12px] text-gray-70 font-semibold'>
                    <div className='flex items-center justify-center phone:justify-start text-center'>
                        <TbCurrencyNaira className='text-[18px]' />
                        {item.amount}
                    </div>
                </td>
                <td className='p-2 text-[12px] text-gray-70 font-semibold text-center phone:hidden' >
                    <div className='flex items-center justify-center text-center w-full'>
                        <TbCurrencyNaira className='text-[18px]' />
                        {item.totalAmount}
                    </div>
                </td>
                <td className={`p-2 ${item.status === 'Successful' ? 'text-success' : item.status === 'Initiated' ? 'text-warning' : 'text-error'} text-[12px] font-semibold`}>{item.status}</td>
                <td className='p-2 text-[12px] text-gray-70 font-semibold phone:hidden'>{item.paymentMethod}</td>
                <td className='p-2 tablet:hidden'>
                    <div className='flex flex-col gap-[10px]'>
                        <h2 className='text-[12px] text-gray-70 font-semibold'>{item.transactionId}</h2>
                        <p className='text-[12px] text-gray-70 font-semibold'>{formatDate(item?.createdAt)}</p>
                    </div>
                </td>
                <td className='phone:hidden'>
                    <Link to={`/transaction/${item._id}`} className='p-2 rounded-[6px] bg-gray-20 text-second-color text-[16px] font-semibold cursor-pointer'>
                        Open
                    </Link>
                </td>
            </tr>
        ))}
    </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TranscationHistroy