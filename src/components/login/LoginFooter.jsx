import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginFooter() {
    return (
        <>
            <footer>
                <hr className='mt-5 mb-5' />

                <div className='container d-flex text-center'>
                    <div>Not have Account ?</div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/createAccount"><u>create New Account</u></Link> | </li>
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/aboutUs">About us</Link></li>
                        </ul>
                    </div>
                </div>
                
            </footer>
        </>
    )
}
