import axios from 'axios';

const contactUsApi = {
  submitContactForm: async (formData) => {
    const response = await axios.post('https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/ContactUs/SendMessage', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
};

export default contactUsApi;



