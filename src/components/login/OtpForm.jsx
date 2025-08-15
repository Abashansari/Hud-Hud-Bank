import React from 'react'

export default function OtpForm() {
  return (
    <form>

        <div className='container mb-3'>
    <h1>Enter OTP</h1>
    <p>An OTP has been sent to XXXXXXX866.</p>
        </div>
        
        <div className='container'>
            <input className="input" type="number" placeholder="Enter OTP" />
            <div className="form-text">Didn't recived ? <u>Resend OTP</u></div>
            <button type='submit' className="button is-medium is-fullwidth">Submit</button>
        </div>

    </form>
    
  )
}
