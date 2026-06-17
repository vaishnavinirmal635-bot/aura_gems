require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: ['https://aura-gems-1val.vercel.app', 'https://aura-gems-beryl.vercel.app', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Aura Gems API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
