require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./src/models/User');
const Vendor = require('./src/models/Vendor');
const Customer = require('./src/models/Customer');

async function upsertUser({ firstName, lastName, email, phoneNumber, address1, address2, address3, address4 = '', password, role }) {
	const existing = await User.findOne({ email });
	if (existing) return existing;
	const salt = await bcrypt.genSalt(10);
	const passwordHash = await bcrypt.hash(password, salt);
	return User.create({
		firstName,
		lastName,
		middleName: '',
		email,
		phoneNumber,
		whatsAppNumber: phoneNumber,
		address1,
		address2,
		address3,
		address4,
		passwordHash,
		termsAccepted: true,
		role,
	});
}

async function upsertVendorProfile({ user, images, name, email, category, state, description, price, verified }) {
	const existing = await Vendor.findOne({ user: user._id });
	if (existing) return existing;
	return Vendor.create({
		user: user._id,
		images,
		name,
		email,
		category,
		state,
		description,
		price,
		verified_vendor: Boolean(verified),
		verifiedBy: verified ? user._id : undefined,
		verifiedAt: verified ? new Date() : undefined,
	});
}

async function upsertCustomerProfile({ user, name, email }) {
	const existing = await Customer.findOne({ user: user._id });
	if (existing) return existing;
	return Customer.create({
		user: user._id,
		name,
		email,
	});
}

async function main() {
	try {
		if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL missing in .env');
		await mongoose.connect(process.env.DATABASE_URL);
		console.log('Connected to MongoDB');

		// Admin user
		const admin = await upsertUser({
			firstName: 'Alice',
			lastName: 'Admin',
			email: 'admin@example.com',
			phoneNumber: '+10000000001',
			address1: 'Admin State',
			address2: 'Central Street',
			address3: 'Block 1',
			password: 'password123',
			role: 'admin',
		});
		console.log('Admin:', admin.email);

		// Vendor users
		const vendor1 = await upsertUser({
			firstName: 'Victor',
			lastName: 'Vendor',
			email: 'vendor1@example.com',
			phoneNumber: '+10000000002',
			address1: 'Lagos',
			address2: 'Ikeja',
			address3: 'Block A',
			password: 'password123',
			role: 'vendor',
		});
		await upsertVendorProfile({
			user: vendor1,
			images: ['https://example.com/img-1', 'https://example.com/img-2'],
			name: 'Victor Photography',
			email: 'vendor1@example.com',
			category: 'photography',
			state: 'Lagos',
			description: 'Wedding and events photography',
			price: 5000,
			verified: true,
		});
		console.log('Vendor 1:', vendor1.email);

		const vendor2 = await upsertUser({
			firstName: 'Vera',
			lastName: 'Vendor',
			email: 'vendor2@example.com',
			phoneNumber: '+10000000003',
			address1: 'Abuja',
			address2: 'Central Area',
			address3: 'Block B',
			password: 'password123',
			role: 'vendor',
		});
		await upsertVendorProfile({
			user: vendor2,
			images: ['https://example.com/img-3'],
			name: 'Vera Catering',
			email: 'vendor2@example.com',
			category: 'catering',
			state: 'Abuja',
			description: 'Catering services for corporate and private events',
			price: 8000,
			verified: false,
		});
		console.log('Vendor 2:', vendor2.email);

		// Customer user
		const customer = await upsertUser({
			firstName: 'Chris',
			lastName: 'Customer',
			email: 'customer1@example.com',
			phoneNumber: '+10000000004',
			address1: 'Rivers',
			address2: 'Garden Road',
			address3: 'House 12',
			password: 'password123',
			role: 'customer',
		});
		await upsertCustomerProfile({ user: customer, name: 'Chris Customer', email: 'customer1@example.com' });
		console.log('Customer:', customer.email);

		console.log('Seeding complete.');
	} catch (err) {
		console.error('Seed failed:', err);
	} finally {
		await mongoose.disconnect();
		process.exit(0);
	}
}

main();


