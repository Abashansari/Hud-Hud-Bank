import React from 'react';
import '../../App.css'

export default function FundTransfer() {
  return (
    <form className="fund-transfer-form p-4 mx-auto my-5 rounded shadow-sm" style={{ maxWidth: '500px' }} noValidate>
      <div className="mb-3">
        <label htmlFor="accountNumber" className="form-label">Beneficiary Account Number</label>
        <input type="text" className="form-control" id="accountNumber" name="account-number" pattern="\d{10}" maxLength="10" placeholder="Enter Account Number" required aria-describedby="accountHelp"/>
        <div id="accountHelp" className="form-text">Pay type : Quick Pay</div>
      </div>

      <div className="mb-3">
        <label htmlFor="confirmAccountNumber" className="form-label">Confirm Account Number</label>
        <input type="text" className="form-control" id="confirmAccountNumber" name="confirm-account-number" pattern="\d{10}" maxLength="10" placeholder="Re-enter Account Number" required/>
      </div>

      <div className="mb-3">
        <label htmlFor="selectAccountType" className="form-label">Account Type</label>
        <select id="selectAccountType" className="form-select" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>Saving</option>
          <option>Current</option>
          <option>Fixed Deposit</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="ifsc" className="form-label">IFSC</label>
        <input type="text" className="form-control" id="ifsc" maxLength="11" pattern="^[A-Z]{4}0[A-Z0-9]{6}$" placeholder="Enter IFSC" required/>
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Beneficiary Account Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Account Name" required />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input type="number" className="form-control" id="amount" min="0" step="0.01" placeholder="Enter Amount" required/>
      </div>

      <div className="mb-3">
        <label htmlFor="selectRemarks" className="form-label">Remarks</label>
        <select id="selectRemarks" className="form-select" required defaultValue="">
          <option value="" disabled>Select</option>
          <option>Bill Payment</option>
          <option>Rent</option>
          <option>Loan</option>
          <option>Friends/Family</option>
          <option>Medical Expenses</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="transactionPassword" className="form-label">Transaction Password (TPIN)</label>
        <input type="password" className="form-control" id="transactionPassword" maxLength="12" pattern="\d{12}" placeholder="Enter Transaction Password" title="Password must be exactly 12 digits." required/>
      </div>

      <button type="submit" className="btn btn-dark w-100">Process</button>
    </form>
  )
}
