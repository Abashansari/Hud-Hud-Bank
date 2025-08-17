import React from 'react'

export default function FundTransfer() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="accountNumber" className="form-label">Beneficiary Account Number</label>
                <input type="text" className="form-control" id="accountNumber" aria-describedby="emailHelp" name='account-number' pattern='\d{10}' maxLength='10' placeholder='Enter Account Number' required />
                <div id="emailHelp" className="form-text">Pay type : Quick Pay</div>
            </div>

            <div className="mb-3">
                <label htmlFor="accountNumber" className="form-label">Confirm Account Number</label>
                <input type="text" className="form-control" id="accountNumber" aria-describedby="emailHelp" name='account-number' pattern='\d{10}' maxLength='10' placeholder='Enter Account Number' required />
             </div>

            <div className="mb-3">
                <label htmlFor="selectAccountType" className="form-label">Account Type</label>
                <select id="selectAccountType" className="form-select" required>
                    <option>select</option>
                    <option>Saving</option>
                    <option>Current</option>
                    <option>Fixed Deposite</option>
                </select>
            </div>

            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">IFSC</label>
                <input type="text" className="form-control" id="ifsc" maxLength='11' pattern='^[A-Z]{4}0[A-Z0-9]{6}$' placeholder='Enter IFSC' required />
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Beneficiary Account Name</label>
                <input type="text" className="form-control" id="name" placeholder='Re-Enter Account Number' required />
            </div>

            <div className="mb-3">
                <label htmlFor="amount" className="form-label"> Amount </label>
                <input type="number" className="form-control" id="amount" minLength='0' step='0.01' placeholder='Enter Amount' required />
            </div>

            <div className="mb-3">
                <label htmlFor="selectRemarks" className="form-label">Remarks</label>
                <select id="selectRemarks" className="form-select" required>
                    <option>select</option>
                    <option>Bill Payment</option>
                    <option>Rent</option>
                    <option>Loan </option>
                    <option>Friends/Family</option>
                    <option>Medical Expenses</option>
                    <option>Shopping</option>
                    <option>Others </option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="transactionPassword" className="form-label">Transaction Password (TPIN)</label>
                <input type="password" className="form-control" id="transactionPassword" maxLength='12' pattern='\d{12}' placeholder='Enter Transaction Password' title="Password must be exactly 10 digits." required />
            </div>

            <button type="submit" className="btn btn-dark w-100">Processed</button>
        </form>
    )
}
