import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <>
            <div className='container'>
                <AccountCircleIcon />
                <h2>Welcome from Hud Hud Bank</h2>
                <h2>Login In with </h2>
            </div>

            <div className='container'>
                <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/email">email</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/phoneNumber">Phone Number</Link></li>
                    </div>
                </nav>
            </div>
        </>
    )
}
