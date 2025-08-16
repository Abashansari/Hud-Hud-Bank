import React from 'react'
import LoginNavber from '../login/LoginNavbar'
import Advertisement from './Advertisement'
import IdentifyForm from './IdentifyForm'
import Footer from '../login/Footer'

export default function CreateAccount() {
  return (
    <div className='container' style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000' }}>
        <LoginNavber />
        <Advertisement />
        <IdentifyForm />
        <Footer />     
    </div>
  )
}
