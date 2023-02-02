import React from 'react'
import Client from '../app/components/Client'
import Footer from '../app/components/Footer'
import Header from '../app/components/Header'

function Clients() {
  return (
    <div className='max-w-7xl mx-auto'>
        <Header />
        <Client />
        <Footer />
    </div>
  )
}

export default Clients