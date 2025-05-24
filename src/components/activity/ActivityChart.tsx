import React from 'react';
import { activityData } from '../../data/mockData';

const ActivityChart: React.FC = () => {
  const maxValue = Math.max(...activityData.data.map(item => item.value));
  
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">{activityData.title}</h2>
        <p className="text-sm text-gray-500">{activityData.subtitle}</p>
      </div>
      
      <div className="h-48 flex items-end justify-between">
        {activityData.data.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-6 rounded-t-md ${
                  index % 3 === 0 ? 'bg-cyan-500' : 
                  index % 3 === 1 ? 'bg-indigo-500' : 'bg-green-500'
                }`}
                style={{ height: `${height}%` }}
              ></div>
              <p className="text-xs text-gray-500 mt-2">{item.day}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityChart;