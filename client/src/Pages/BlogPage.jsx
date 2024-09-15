import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Helpers/Navbar'
import Footer from '../Components/Footer'

function BlogPage() {
    const loc = useLocation()
    const pathName = loc.pathname.split('/')[2]
  return (
    <div className='flex flex-col min-h-[100vh]'>
        <Navbar />

        <div className='small-pc:pad6 pad4 mt-[6rem]'>
            BlogPage {pathName}
        </div>

        <div className="mt-auto flex items-center justify-center">
            <Footer />
        </div>
    </div>
  )
}

export default BlogPage