import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import '../CSS/QrPayment.css';
import '../CSS/QrPaymentTerms.css';

const QrPayment = () => {
  const upiId = 'kalaiarasi6067@okaxis';
  const payeeName = 'Kalaiarasi';

  const courses = [
    {
      title: 'Aari Work',
      description: 'Master the art of Aari embroidery from basic to professional level.',
      pricing: { withMaterial: 1750, withoutMaterial: 250, materialCost: 1500 },
    },
    {
      title: 'Brooch Making',
      description: 'Learn to create unique and stylish brooches for various occasions.',
      pricing: { withMaterial: 1750, withoutMaterial: 250, materialCost: 1500 },
    },
    {
      title: 'Saree Pre-Plating',
      description: 'Perfect the art of saree pleating and create stunning drapes.',
      pricing: { withMaterial: 600, withoutMaterial: 50, materialCost: 550 },
    },
    {
      title: 'Fabric Painting',
      description: 'Create stunning artwork on various textile materials.',
      pricing: { withMaterial: 1500, withoutMaterial: 500, materialCost: 1000 },
    },
    {
      title: 'Thread Bangles',
      description: 'Master the art of creating beautiful thread-wrapped bangles.',
      pricing: { withMaterial: 1750, withoutMaterial: 250, materialCost: 1500 },
    }
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [qrGenerated, setQrGenerated] = useState(false);
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', email: '', phone: '' });

  const handleCourseChange = (e) => {
    const course = courses.find(c => c.title === e.target.value);
    setSelectedCourse(course);
    setAmount('');
    setSelectedOption('');
    setIsSubmitted(false);
    setQrGenerated(false);
    setIsPaymentConfirmed(false);
  };

  const handleOptionChange = (label, value) => {
    setSelectedOption(label);
    setAmount(value);
    setIsSubmitted(false);
    setQrGenerated(false);
    setIsPaymentConfirmed(false);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
    setIsSubmitted(false);
    setQrGenerated(false);
    setIsPaymentConfirmed(false);
  };

  const generateUpiLink = () => {
    if (!amount) return '';
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`;
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleSubmit = async () => {
    const paymentData = {
      ...userDetails,
      course: selectedCourse.title,
      amount,
      option: selectedOption
    };

    try {
      const res = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      });

      const result = await res.json();
      if (result.success) {
        alert('Details submitted & email sent!');
        setIsSubmitted(true);
        setIsPaymentConfirmed(true);
      } else {
        alert('Failed to send confirmation.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting payment details.');
    }
  };

  const pricing = selectedCourse.pricing;

  return (
    <div className="qr-container">
      <h2 className="qr-title">Scan & Pay</h2>

      <select className="qr-select" onChange={handleCourseChange} value={selectedCourse.title}>
        {courses.map((course) => (
          <option key={course.title} value={course.title}>
            {course.title}
          </option>
        ))}
      </select>

      <div className="user-details-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={userDetails.name}
          onChange={handleUserChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={userDetails.email}
          onChange={handleUserChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your Phone"
          value={userDetails.phone}
          onChange={handleUserChange}
          required
        />
      </div>

      <div className="qr-options">
        <label className={`qr-option ${selectedOption === 'with material' ? 'active' : ''}`}>
        <input
            type="radio"
            name="payment"
            checked={selectedOption === 'material cost'}
            onChange={() => handleOptionChange('material cost', pricing.materialCost)}
          />
          Material Cost: <span className="price">₹{pricing.materialCost}</span>
        </label>

        <label className={`qr-option ${selectedOption === 'without material' ? 'active' : ''}`}>
          <input
            type="radio"
            name="payment"
            checked={selectedOption === 'without material'}
            onChange={() => handleOptionChange('without material', pricing.withoutMaterial)}
          />
          Course Fees: <span className="price">₹{pricing.withoutMaterial}</span>
        </label>

        <label className={`qr-option ${selectedOption === 'material cost' ? 'active' : ''}`}>
          <input
            type="radio"
            name="payment"
            checked={selectedOption === 'with material'}
            onChange={() => handleOptionChange('with material', pricing.withMaterial)}
          />
          Total (With Material): <span className="price">₹{pricing.withMaterial}</span>
        </label>
        
      </div>

      <div className="terms-checkbox-container">
        <input
          type="checkbox"
          className="terms-checkbox"
          checked={isTermsAccepted}
          onChange={() => setIsTermsAccepted(!isTermsAccepted)}
        />
        <label className="terms-label">
          I agree to the <Link to="/policy" className="terms-link">Privacy Policy and Terms and Conditions</Link>.
        </label>
      </div>
      
      <button
        className="submit-button"
        disabled={!userDetails.name || !userDetails.email || !userDetails.phone || !amount || !isTermsAccepted}
        onClick={() => setQrGenerated(true)}
      >
      Confirm & Generate QR
      </button>


      {qrGenerated && (
        <>
          <div className="qr-code">
            <QRCode value={generateUpiLink()} size={200} />
          </div>
          <p className="qr-details">
            Pay to: <strong className="upi-id" onClick={handleCopyUpi}>{upiId}</strong>
            <div className="copy-img" onClick={handleCopyUpi}>
              <img src="Images/copy.jpg" alt="Copy" />
            </div>
            <br />
            Amount: ₹<strong>{amount}</strong><br />
            {copySuccess && <span className="copy-success">UPI ID copied!</span>}
          </p>

          {!isPaymentConfirmed ? (
            <button className="submit-button" onClick={handleSubmit}>
              I Have Paid
            </button>
          ) : (
            <p className="success-message">Thank you! Your payment was confirmed and details have been sent.</p>
          )}
        </>
      )}
    </div>
  );
};

export default QrPayment;
