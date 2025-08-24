import React from 'react'

export default function AccountCard() {
    return (
        <div>
            <h4 className="mb-3">Account Overview</h4>

            <div className="card w-50">
                <div className="card-body">
                    <div className='container d-flex justify-content-between align-items-center'>
                        <h5 className="card-title">My Account</h5>
                        <a href="#" className="btn btn-primary">
                            <img src='...' alt='Bank Logo' />
                        </a>
                    </div>
                    <p className="card-text">XXX XXX 1234</p>
                    <p className="card-text">Account Balance</p>
                    <p className="card-text">$ 5000 /-</p>
                </div>
            </div>
        </div>
    )
}
