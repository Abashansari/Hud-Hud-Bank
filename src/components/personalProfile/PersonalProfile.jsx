import React from 'react'
import Details from './Details'
import Contact from './Contact'
import MyQR from './MyQR'

export default function PersonalProfile() {
  return (
    <div className='container'>
      <Details />
      <Contact />
      <MyQR />
    </div>
  )
}
