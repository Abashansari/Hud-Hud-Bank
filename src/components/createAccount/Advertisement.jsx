import React from 'react'

export default function Advertisement() {
  return (
    <div className='container h-25'>
        <div className='row'>
            <div className='col-md-4 bg-primary'>
            <img src={advertiseImage} alt='advertise' />
            </div>

            <div className='col-md-6 bg-secondary text-center'>
            <h1>Open Your Account Now !</h1>
            </div>
        </div>
    </div>
  )
}
