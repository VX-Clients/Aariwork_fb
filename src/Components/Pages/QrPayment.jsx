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
      pricing: { withMaterial: 2500, withoutMaterial: 500, materialCost: 1500 },
    },
    {
      title: 'Brooch Making',
      description: 'Learn to create unique and stylish brooches for various occasions.',
      pricing: { withMaterial: 2300, withoutMaterial: 500, materialCost: 1500 },
    },
    {
      title: 'Saree Pre-Plating',
      description: 'Perfect the art of saree pleating and create stunning drapes.',
      pricing: { withMaterial: 650, withoutMaterial: 100, materialCost: 550 },
    },
    {
      title: 'Fabric Painting',
      description: 'Create stunning artwork on various textile materials.',
      pricing: { withMaterial: 2800, withoutMaterial: 2000, materialCost: 1000 },
    },
    {
      title: 'Thread Bangles',
      description: 'Master the art of creating beautiful thread-wrapped bangles.',
      pricing: { withMaterial: 1500, withoutMaterial: 500, materialCost: 1000 },
    }
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleCourseChange = (e) => {
    const course = courses.find(c => c.title === e.target.value);
    setSelectedCourse(course);
    setAmount('');
    setSelectedOption('');
  };

  const handleOptionChange = (label, value) => {
    setSelectedOption(label);
    setAmount(value);
  };

  const generateUpiLink = () => {
    if (!amount) return '';
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`;
  };

  const pricing = selectedCourse.pricing;

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

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

      <div className="qr-options">
        <label className={`qr-option ${selectedOption === 'with' ? 'active' : ''}`}>
          <input
            type="radio"
            name="payment"
            checked={selectedOption === 'with'}
            onChange={() => handleOptionChange('with', pricing.withMaterial)}
          />
          With Material: <span className="price">₹{pricing.withMaterial}</span>
        </label>

        <label className={`qr-option ${selectedOption === 'without' ? 'active' : ''}`}>
          <input
            type="radio"
            name="payment"
            checked={selectedOption === 'without'}
            onChange={() => handleOptionChange('without', pricing.withoutMaterial)}
          />
          Without Material: <span className="price">₹{pricing.withoutMaterial}</span>
        </label>

        <label className={`qr-option ${selectedOption === 'material' ? 'active' : ''}`}>
          <input
            type="radio"
            name="payment"
            checked={selectedOption === 'material'}
            onChange={() => handleOptionChange('material', pricing.materialCost)}
          />
          Material Cost: <span className="price">₹{pricing.materialCost}</span>
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
        I agree to the <Link to="/policy" className="terms-link"> Privacy Policy and Terms and Conditions</Link>.
        </label>
      </div>

      {amount && isTermsAccepted && (
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
        </>
      )}
    </div>
  );
};

export default QrPayment;