import Link from 'next/link'
import React from 'react'
import "../../styles/globals.css"
function Header() {
  return (
    
<header className='flex justify-between  '>
<div className='max-w-7x1 mx-auto justify-between gap-80 flex items-center space-x-5'>
<Link href="/">
    <img src="KZ.jpg" alt="" className='w-40 object-contain cursor-pointer'/>
</Link>

<div className='flex space-x-5'>
    <Link href="/"><h3>Home</h3></Link>
    <Link href="/About"><h3>About</h3></Link>
    <Link href="/Clients"><h3>Clients</h3></Link>
    <Link href="/Services"><h3>Services</h3></Link>
    <Link href="/Contact"><h3>Contact</h3></Link>
    
</div>

</div>



</header>
  )
}

export default Header