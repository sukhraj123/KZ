import Link from 'next/link'
import React from 'react'
import "../../styles/globals.css"


function Header() {
  return (
    
<header className='lg:flex justify-between mx-auto sm:block sm:space-x-0 sm:w-screen  '>
<div className='lg:max-w-7x1 lg:mx-auto justify-between gap-80 lg:flex items-center lg:space-x-5 sm:block  sm:w-screen'>
<Link href="/">
    <img src="KZ.jpg" alt="" className='w-40 object-contain cursor-pointer sm:w-25'/>
</Link>
<div>



</div>
<div className='sm:block  lg:mx-auto sm:w-screen lg:flex lg:space-x-5 '>
    <Link href="/" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Home</h3></Link>
    <Link href="/About" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>About</h3></Link>
    <Link href="/Clients" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Clients</h3></Link>
    <Link href="/Services" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Services</h3></Link>
    <Link href="/Contact" className='lg:hover:bg-orange-400 rounded-full py-2 px-5 transition duration-300 ease-in-out'><h3>Contact</h3></Link>
    
</div>

</div>



</header>
  )
}

export default Header