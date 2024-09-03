import { RiDashboardFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { LuTv } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";
import { PiNotepadLight } from "react-icons/pi";
import { PiRecycleBold } from "react-icons/pi";
import { FaHeadset } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import NineMobileImg from '../assets/9mobile2.png'
import AirtelImg from '../assets/airtel2.png'
import MtnImg from '../assets/mtn2.png'

export const sidebarMenus = [
    {
        name: 'Dashboard',
        link: 'dashboard',
        icon: RiDashboardFill
    },
    {
        name: 'Buy Airtime',
        link: 'buy-airtime',
        icon: FaPhoneAlt
    },
    {
        name: 'Buy Data',
        link: 'buy-data',
        icon:  IoWifi
    },
    {
        name: 'Tv Subscription',
        link: 'tv',
        icon: LuTv
    },
    {
        name: 'Pay Electric Bill',
        link: 'electricity',
        icon: RxLightningBolt
    },
    {
        name: 'Airtime to Cash',
        link: 'airtime-to-cash',
        icon: MdLogout,
        imageArray: [
            {
                icon: MtnImg,
                name: 'MTN'
            },
            {
                icon: AirtelImg,
                name: 'Airtel'
            },
            {
                icon: NineMobileImg,
                name: '9Mobile'
            },
        ]
    },
    {
        name: 'Transaction Histroy',
        link: 'transaction-histroy',
        icon: PiNotepadLight
    },
    {
        name: 'Help and Support',
        link: 'support',
        icon: FaHeadset
    }
]