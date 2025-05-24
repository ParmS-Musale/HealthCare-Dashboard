import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-64 text-sm focus:outline-none"
          />
        </div>
        
        <div className="relative">
          <Bell className="text-gray-600" size={20} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="User" 
              className="w-10 h-10 rounded-xl object-cover"
            />
          </div>
        </div>
        
        <button className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;