require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); 

const createUser = async () => {
  try {
 
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');

    const hashedPassword = await bcrypt.hash('pass1234', 10);

    const user = new User({
      firstName: 'Danyssa',
      lastName: 'Tamayo',
      email: 'danyssa@admin.com',
      password: hashedPassword,
      type: 'admin',
      isActive: true,
      username: 'danyssa_admin123',
      age: 22,
      gender: 'Female',
      address: '123 Tech Street, Manila',
      contactNumber: '09171234567'
    });

    await user.save();
    console.log('User created successfully!');

    // 5. Disconnect
    mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

createUser();