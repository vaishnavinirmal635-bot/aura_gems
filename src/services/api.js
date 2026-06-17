const rawApiUrl = import.meta.env.DEV 
  ? 'http://localhost:5000/api' 
  : (import.meta.env.VITE_API_URL || 'https://aura-gems-1.onrender.com/api');

// Ensure the API URL ends with '/api' and handle trailing slashes
const cleanUrl = rawApiUrl.replace(/\/+$/, '');
const API_URL = cleanUrl.endsWith('/api') ? cleanUrl : `${cleanUrl}/api`;

// Helper function to fetch with timeout to prevent hanging on Render cold starts
const fetchWithTimeout = async (resource, options = {}) => {
  const { timeout = 60000 } = options; // 60 seconds default timeout
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
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
    const response = await fetchWithTimeout(query, { timeout: 60000 });
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    // Returning an empty array ensures the UI stops loading and displays the empty state
    return [];
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
