import axios from 'axios';

const contactUsApi = {
  submitContactForm: async (formData, token) => {
    console.log('Token:', token);
    console.log("Sending API request with data:", formData);
    try {
    const response = await axios.post('https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/ContactUs/SendMessage', formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
  console.error('API request failed:', error.response || error.message || error);
  throw error; 
}
  }
};

export default contactUsApi;



