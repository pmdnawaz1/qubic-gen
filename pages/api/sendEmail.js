// Assuming you have nodemailer installed and configured, you can create a function like this in your API file to handle the form submission and send an email using nodemailer.

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


const sendEmail = async (name, email, message) => {
  // Create a nodemailer transporter using your email service provider's SMTP settings
  let transporter = nodemailer.createTransport({
    host: '',
    port: 587,
    secure: false,
    auth: {
      user: '',
      pass: ''
    }
  });

  // Define the email content
  let mailOptions = {
    from: 'email@example.com',
    to: 'recipient@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return 'Email sent successfully';
  } catch (error) {
    console.error('Error sending email: ' + error);
    return 'Failed to send email';
  }
};

export default function handler(
  req,
  res
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const result = sendEmail(name, email, message);
    res.status(200).json({ message: result });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}