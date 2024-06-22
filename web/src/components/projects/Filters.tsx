import React from 'react';

const Filters = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Category</label>
        <select className="w-full p-2 border rounded">
          <option value="all">All</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Location</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="Enter location" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Funding Amount</label>
        <input type="number" className="w-full p-2 border rounded" placeholder="Enter amount" />
      </div>
      <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Apply Filters</button>
    </aside>
  );
};

export default Filters;
