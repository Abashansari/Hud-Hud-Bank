import React from 'react';
import '../../App.css';

export default function IdentifyForm() {
  return (
    <form className="container py-5" style={{ backgroundColor: '#fff', color: '#000', maxWidth: '600px' }}>
      <h1 className="custom-heading">Identify Yourself</h1>
      <h2 className="subtitle has-text-grey mb-4">Welcome to Hud Hud Bank</h2>
      <p className="fst-italic mb-4">
        Please provide your details as per your Aadhaar Card/Green Card.
      </p>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
      </div>

      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="dateOfBirth" required />
      </div>

      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="tel" className="form-control" id="phoneNumber" placeholder="+91-9876543210" required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="example@email.com" required />
        <div id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Create a strong password" required/>
      </div>

      <hr className="my-4" />

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="consentData" required />
        <label className="form-check-label" htmlFor="consentData">
          I consent to the collection and processing of my data for account creation and related services as per the privacy policy.
        </label>
      </div>

      <div className="mb-4 form-check">
        <input type="checkbox" className="form-check-input" id="consentMarketing" />
        <label className="form-check-label" htmlFor="consentMarketing">
          I agree to receive personalized offers on products and services via Call, SMS, WhatsApp, Email, or other channels.
        </label>
      </div>

      <button type="submit" className="btn btn-dark w-100">
        Submit
      </button>
    </form>
  );
}
