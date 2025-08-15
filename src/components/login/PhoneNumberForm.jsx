import React from 'react'

export default function PhoneNumberForm() {
  return (
    <form>
        <pre>Registered Mobile Number</pre>
        <input className="input" type="number" placeholder="Enter your Phone Number :" />
        <p>we will send you an OTP on this mobile number</p>
        <button className="button is-medium is-fullwidth">Get OTP</button>
    </form>
  )
}
