import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showPrank, setShowPrank] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrank(true);
  };

  if (showPrank) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-white mb-8 animate-bounce">
        Keep dreaming, You FOol  🎉
        </h1>
<div className="max-w-sm w-full aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
          <video autoPlay autoPlay loop className="w-full h-full object-cover">
            <source src="./Meow.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="text-2xl text-white mt-8 text-center">
           April Fools, {name}! 😄
        </p>

        <footer className="text-white mt-10 text-sm">
          Developed by <span className="font-bold">ADN</span>
        </footer>
        
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Please Enter Below</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Your Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="1"
              max="120"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-2"
              placeholder="Enter your age"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next 
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
