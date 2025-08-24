import React from 'react';

export default function AccountCard() {
    return (
        <div className="container">

            <h4 className="text-dark mb-4" style={{ fontWeight: 600 }}>Account Overview</h4>


            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">

                    <div className="card shadow-sm border-0 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h5 className="card-title text-dark mb-0">My Account</h5>
                                <a href="#" className="btn btn-outline-secondary p-2" style={{ borderRadius: '8px' }}>
                                    <img src='...' alt='Bank Logo' style={{ height: '24px' }} />
                                </a>
                            </div>

                            <p className="card-text text-muted mb-1">Account Number</p>
                            <p className="card-text text-dark mb-3" style={{ fontWeight: 500 }}>XXX XXX 1234</p>

                            <p className="card-text text-muted mb-1">Account Balance</p>
                            <p className="card-text text-dark" style={{ fontSize: '1.25rem', fontWeight: 600 }}>$ 5,000 /-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
