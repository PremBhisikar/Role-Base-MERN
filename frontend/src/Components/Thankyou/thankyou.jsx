import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ThankYouPage.css'; // Import custom CSS for styling

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your data has been successfully received.</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
