const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async (category = 'All', isPremium = false) => {
  try {
    let query = `${API_URL}/products?`;
    if (category !== 'All') {
      query += `category=${category}&`;
    }
    if (isPremium) {
      query += `isPremium=true`;
    }
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const submitContact = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
