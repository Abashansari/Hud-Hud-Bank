import React from 'react';
import '../../App.css';

export default function LoginFooter() {
  return (
    <>
      <div className="container my-5">
        <hr className="custom-hr" />
      </div>
      <footer className="container d-flex justify-content-between align-items-center py-3 px-4 text-white bg-black rounded-bottom">
        <div>
          &copy; 2025 Hud Hud Bank. All rights reserved.
        </div>
        <div>
          Powered by <strong>Abash</strong>
        </div>
      </footer>
    </>
  );
}
