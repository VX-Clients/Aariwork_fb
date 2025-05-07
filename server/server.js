const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const Payment = require('./models/Payment');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  }
});

// POST Route
app.post('/api/payment', async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();

  const { name, email, phone, course, option, amount } = req.body;

  const userMsg = `
    Hello ${name},<br><br>
    Thank you for registering for <strong>${course}</strong> (${option}).<br>
    Amount Paid: ₹${amount}<br><br>
    We’ll be in touch soon.<br><br>
    Regards,<br>Kalaiarasi Team
  `;

  const adminMsg = `
    🔔 New Payment Received:<br><br>
    Name: ${name}<br>
    Email: ${email}<br>
    Phone: ${phone}<br>
    Course: ${course}<br>
    Option: ${option}<br>
    Amount: ₹${amount}
  `;

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: 'Payment Confirmation - Kalaiarasi Courses',
      html: userMsg
    });

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Course Payment Received',
      html: adminMsg
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
