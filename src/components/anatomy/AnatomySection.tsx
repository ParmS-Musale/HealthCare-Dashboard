import React from 'react';
import { Search } from 'lucide-react';
import { healthStatus } from '../../data/mockData';
import HealthIndicator from './HealthIndicator';

const AnatomySection: React.FC = () => {
  return (
    <div className="relative col-span-1 flex flex-col items-center justify-center bg-white rounded-2xl p-4 h-full">
      <div className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full">
        <Search size={18} className="text-gray-500" />
      </div>
      
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Human anatomy" 
          className="max-h-[28rem] object-contain opacity-90"
        />
        
        {/* Heart indicator */}
        <HealthIndicator
          position="absolute"
          className="left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/4"
          color="bg-red-500"
          label="Healthy Heart"
        />
        
        {/* Leg indicator */}
        <HealthIndicator
          position="absolute"
          className="left-1/2 bottom-1/4 transform -translate-x-1/2"
          color="bg-cyan-500"
          label="Healthy Leg"
        />
        
        {/* Reference line at the bottom */}
        <div className="absolute bottom-4 w-3/4 h-0.5 bg-gray-200 rounded-full">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;