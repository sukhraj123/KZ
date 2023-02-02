import React from 'react'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Landing from '../components/Landing'

function HomePage() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />  
    <Landing />
   <Footer />
    </div>
  )
}

export default HomePage