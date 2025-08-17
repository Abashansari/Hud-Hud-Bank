import React from 'react';
import '../../App.css'

export default function MobileNumber() {
  return (
    <form className="fund-transfer-form p-4 mx-auto my-5 rounded shadow-sm" style={{ maxWidth: '500px' }}>

      <div className="mb-3">
        <label htmlFor="mobileNumber" className="form-label">Enter Mobile Number</label>
        <input type="text" className="form-control" id="mobileNumber" inputMode="numeric" pattern="\d{10}" maxLength="10" placeholder="Pay Anyone" aria-describedby="numberHelp" required/>
       
        <div id="numberHelp" className="form-text">Ensure this is a valid 10-digit number</div>
      </div>

      <button type="submit" className="btn btn-dark w-100">Pay</button>
    </form>
  );
}
