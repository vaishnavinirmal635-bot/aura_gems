const products = [
  // Shop Products
  { name: "Diamond Eternity Ring", price: "$15,000", category: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Pearl & Gold Choker", price: "$8,500", category: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Emerald Stud Earrings", price: "$12,000", category: "Earrings", image: "/emerald.png", isPremium: false },
  { name: "Rose Gold Bangle", price: "$6,200", category: "Bracelets", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Blue Topaz Pendant", price: "$9,800", category: "Necklaces", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Royal Diamond Tiara", price: "$125,000", category: "Collections", image: "/tiara.png", isPremium: true },
  { name: "Gold Chain Bracelet", price: "$4,200", category: "Bracelets", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Ruby Solitaire Ring", price: "$11,500", category: "Rings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Sapphire Drop Earrings", price: "$14,200", category: "Earrings", image: "/category1.png", isPremium: false },
  { name: "Vintage Gold Locket", price: "$7,800", category: "Necklaces", image: "/category2.png", isPremium: true },
  { name: "Platinum Wedding Band", price: "$3,500", category: "Rings", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", isPremium: true },
  { name: "Diamond Brooch", price: "$18,000", category: "Collections", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Diamond Tennis Bracelet", price: "$18,500", category: "Bracelets", image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Opal Pendant Necklace", price: "$9,200", category: "Necklaces", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Classic Hoop Earrings", price: "$2,800", category: "Earrings", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Amethyst Solitaire", price: "$4,500", category: "Rings", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Gold Cuban Link", price: "$12,000", category: "Bracelets", image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Emerald Cut Pendant", price: "$22,000", category: "Necklaces", image: "/emerald.png", isPremium: false },
  { name: "Diamond Studs 2ct", price: "$35,000", category: "Earrings", image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Minimalist Gold Band", price: "$1,200", category: "Rings", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", isPremium: false },

  // Collections Products (that are not already duplicates)
  { name: "Luna Diamond Solitaire", price: "$1,299", category: "Collections", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Gold Diamond Chain", price: "$1,299", category: "Collections", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Pearl Diamond Earrings", price: "$1,299", category: "Collections", image: "/emerald.png", isPremium: false },
  { name: "Pairly Diamond Earrings", price: "$1,299", category: "Collections", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Maza Diamond Earrings", price: "$1,299", category: "Collections", image: "/category1.png", isPremium: false },
  { name: "Luna Diamond Ring", price: "$1,399", category: "Collections", image: "/tiara.png", isPremium: false },
  { name: "Pond Diamond Solitaire", price: "$1,299", category: "Collections", image: "/category2.png", isPremium: false },
  { name: "Bronk Diamond Solitaire", price: "$1,699", category: "Collections", image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Cham Diamond Necklaces", price: "$1,399", category: "Collections", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { name: "Many Diamond Ring", price: "$1,299", category: "Collections", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", isPremium: false },

  // Jewelry/Premium Products (not already duplicates)
  { name: "The Royal Diamond Tiara", price: "$125,000", category: "Collections", image: "/tiara.png", isPremium: true },
  { name: "Imperial Emerald Necklace", price: "$85,000", category: "Necklaces", image: "/emerald.png", isPremium: true },
  { name: "Solitaire Diamond Ring", price: "$45,000", category: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: true },
  { name: "Ethereal Pearl Earrings", price: "$12,500", category: "Earrings", image: "/category2.png", isPremium: true },
  { name: "Sapphire & Diamond Bracelet", price: "$65,000", category: "Bracelets", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", isPremium: true },
  { name: "Ruby Pendant Necklace", price: "$42,000", category: "Necklaces", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800", isPremium: true },
];
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
  origin: true,
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
const Product = require('./models/Product');
const productsData = products;

app.get('/api/seed-database-secret', async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    res.send('Database successfully populated with products!');
  } catch (err) {
    res.status(500).send('Error seeding data: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
