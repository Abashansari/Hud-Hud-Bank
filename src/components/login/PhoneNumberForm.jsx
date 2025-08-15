import React from 'react'

export default function PhoneNumberForm() {
  return (
    <form>
        <pre>Registered Mobile Number</pre>
        <input class="input" type="number" placeholder="Enter your Phone Number :" />
        <p>we will send you an OTP on this mobile number</p>
        <button class="button is-medium is-fullwidth">Get OTP</button>
    </form>
  )
}
