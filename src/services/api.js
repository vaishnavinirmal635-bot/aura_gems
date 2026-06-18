const rawApiUrl = import.meta.env.DEV 
  ? 'http://localhost:5000/api' 
  : (import.meta.env.VITE_API_URL || 'https://aura-gems-2.onrender.com/api');

// Ensure the API URL ends with '/api' and handle trailing slashes
const cleanUrl = rawApiUrl.replace(/\/+$/, '');
const API_URL = cleanUrl.endsWith('/api') ? cleanUrl : `${cleanUrl}/api`;

// ─── Fallback products (used when backend is unreachable) ─────────────────────
const FALLBACK_PRODUCTS = [
  { _id: '1',  name: "Diamond Eternity Ring",      price: "$15,000",  category: "Rings",       image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '2',  name: "Pearl & Gold Choker",         price: "$8,500",   category: "Necklaces",   image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '3',  name: "Emerald Stud Earrings",       price: "$12,000",  category: "Earrings",    image: "/emerald.png",   isPremium: false },
  { _id: '4',  name: "Rose Gold Bangle",            price: "$6,200",   category: "Bracelets",   image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '5',  name: "Blue Topaz Pendant",          price: "$9,800",   category: "Necklaces",   image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '6',  name: "Royal Diamond Tiara",         price: "$125,000", category: "Collections", image: "/tiara.png",     isPremium: true  },
  { _id: '7',  name: "Gold Chain Bracelet",         price: "$4,200",   category: "Bracelets",   image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '8',  name: "Ruby Solitaire Ring",         price: "$11,500",  category: "Rings",       image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '9',  name: "Sapphire Drop Earrings",      price: "$14,200",  category: "Earrings",    image: "/category1.png", isPremium: false },
  { _id: '10', name: "Vintage Gold Locket",         price: "$7,800",   category: "Necklaces",   image: "/category2.png", isPremium: true  },
  { _id: '11', name: "Platinum Wedding Band",       price: "$3,500",   category: "Rings",       image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", isPremium: true  },
  { _id: '12', name: "Diamond Brooch",              price: "$18,000",  category: "Collections", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '13', name: "Diamond Tennis Bracelet",     price: "$18,500",  category: "Bracelets",   image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '14', name: "Opal Pendant Necklace",       price: "$9,200",   category: "Necklaces",   image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '15', name: "Classic Hoop Earrings",       price: "$2,800",   category: "Earrings",    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '16', name: "Amethyst Solitaire",          price: "$4,500",   category: "Rings",       image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '17', name: "Gold Cuban Link",             price: "$12,000",  category: "Bracelets",   image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '18', name: "Emerald Cut Pendant",         price: "$22,000",  category: "Necklaces",   image: "/emerald.png",   isPremium: false },
  { _id: '19', name: "Diamond Studs 2ct",           price: "$35,000",  category: "Earrings",    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '20', name: "Minimalist Gold Band",        price: "$1,200",   category: "Rings",       image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '21', name: "Luna Diamond Solitaire",      price: "$1,299",   category: "Collections", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '22', name: "Gold Diamond Chain",          price: "$1,299",   category: "Collections", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '23', name: "Pearl Diamond Earrings",      price: "$1,299",   category: "Collections", image: "/emerald.png",   isPremium: false },
  { _id: '24', name: "Maza Diamond Earrings",       price: "$1,299",   category: "Collections", image: "/category1.png", isPremium: false },
  { _id: '25', name: "Luna Diamond Ring",           price: "$1,399",   category: "Collections", image: "/tiara.png",     isPremium: false },
  { _id: '26', name: "Pond Diamond Solitaire",      price: "$1,299",   category: "Collections", image: "/category2.png", isPremium: false },
  { _id: '27', name: "Bronk Diamond Solitaire",     price: "$1,699",   category: "Collections", image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '28', name: "Cham Diamond Necklaces",      price: "$1,399",   category: "Collections", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '29', name: "Many Diamond Ring",           price: "$1,299",   category: "Collections", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800", isPremium: false },
  { _id: '30', name: "The Royal Diamond Tiara",     price: "$125,000", category: "Collections", image: "/tiara.png",     isPremium: true  },
  { _id: '31', name: "Imperial Emerald Necklace",   price: "$85,000",  category: "Necklaces",   image: "/emerald.png",   isPremium: true  },
  { _id: '32', name: "Solitaire Diamond Ring",      price: "$45,000",  category: "Rings",       image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", isPremium: true  },
  { _id: '33', name: "Ethereal Pearl Earrings",     price: "$12,500",  category: "Earrings",    image: "/category2.png", isPremium: true  },
  { _id: '34', name: "Sapphire & Diamond Bracelet", price: "$65,000",  category: "Bracelets",   image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", isPremium: true  },
  { _id: '35', name: "Ruby Pendant Necklace",       price: "$42,000",  category: "Necklaces",   image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800", isPremium: true  },
];

// Helper: apply category & isPremium filters to fallback data
export const applyFilters = (data, category, isPremium) => {
  let filtered = data;
  if (category && category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }
  if (isPremium) {
    filtered = filtered.filter(p => p.isPremium === true);
  }
  return filtered;
};

export { FALLBACK_PRODUCTS };

// Helper function to fetch with timeout to prevent hanging on Render cold starts
const fetchWithTimeout = async (resource, options = {}) => {
  const { timeout = 60000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

export const fetchProducts = async (category = 'All', isPremium = false) => {
  try {
    let query = `${API_URL}/products?`;
    if (category !== 'All') {
      query += `category=${category}&`;
    }
    if (isPremium) {
      query += `isPremium=true`;
    }
    const response = await fetchWithTimeout(query, { timeout: 10000 });
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    // If backend returns empty array, use fallback so UI is never blank
    if (!data || data.length === 0) {
      console.warn('API returned empty products — using fallback data.');
      return applyFilters(FALLBACK_PRODUCTS, category, isPremium);
    }
    return data;
  } catch (error) {
    console.warn('Backend unreachable — using fallback product data.', error.message);
    return applyFilters(FALLBACK_PRODUCTS, category, isPremium);
  }
};

export const submitContact = async (formData) => {
  try {
    const response = await fetchWithTimeout(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      timeout: 15000
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit contact form');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
