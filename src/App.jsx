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
        <RandomNum />
      </div>
    </div>
  );
}

function RandomNum() {
  const [number, setNumber] = useState(0);

  const fetchRandomNumber = () => {
    axios.get('http://localhost:8000/api/random')
      .then(response => setNumber(response.data.number))
      .catch(error => console.error('Error fetching random number:', error));
  };
  useEffect(() => {       // ← Correct: Arrow function
    fetchRandomNumber();
  }, []);
  return (
    <div>
      <p className="text-gray-700">{number}</p>
      <button onClick={fetchRandomNumber}>Get Random Number</button>
    </div>
  );
}

/** 
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Before:', count);
    setCount(count + 1);
    console.log('After:', count);
    setCount(count + 1);
    console.log('After again:', count);
  };

  console.log('Render:', count); 
  return <button onClick={handleClick}>Click</button>
}
*/

export default App;
