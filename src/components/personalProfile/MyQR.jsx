import { QrCode } from '@mui/icons-material'
import React from 'react'

export default function MyQR() {
  return (
    <div className='container'>
      <div className="card text-center">
        <div className="card-header">
          My QR code
        </div>
        <div className="card-body">
          <h5 className="card-title">Abash Ansari</h5>
          {/* <img src={QrCode} alt='My QR code' /> */}
          <p className="card-text">Scan to pay with any App </p>
        </div>
        <div className="card-footer text-body-secondary">Hud Hud Bank</div>
      </div>
    </div>
  )
}
