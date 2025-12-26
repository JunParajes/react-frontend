import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Test API connection
    axios.get('http://localhost:8000/api/test')
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage('API connection failed'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          React + Laravel API Yehow!
        </h1>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
}

export default App;
