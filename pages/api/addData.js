import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { name, email, requirement, phoneNumber, location, type } = req.body;

		const uri = process.env.MONGODB_URI;
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db('qubicgen');
		const collection = db.collection('contactformdata');
		await collection.insertOne({
			name,
			email,
			requirement,
			phoneNumber,
			location,
			type,
		});
		await client.close();

		const transporter = nodemailer.createTransport({
			host: 'smpt.hostinger.com',
			secure: true,
			secureConnection: false,
			tls: {
				ciphers: 'SSLv3',
			},
			requireTLS: true,
			port: 465,
			debug: true,
			connectionTimeout: 10000,
			auth: {
				user: 'qubicgen@gmail.com',
				pass: 'Qubicgen@123',
			},
		});

		const mailOptions = {
			from: 'qubicgen@gmail.com',
			to: 'reddymaheswargorla@gmail.com',
			subject: 'New message from your website',
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${requirement}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error('Error sending email:', error);
				res.status(500).json({ message: 'Error sending email' });
			} else {
				console.log('Email sent:', info.response);
				res.status(200).json({ message: 'Email sent successfully' });
			}
		});
		// res.status(200).json({ message: 'Email sent successfully' });
	} else {
		res.status(405).json({ message: 'Method Not Allowed' });
	}
}
