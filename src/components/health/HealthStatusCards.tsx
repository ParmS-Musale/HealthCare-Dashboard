import React from 'react';
import { Settings as Lungs, Bluetooth as Tooth, Bone } from 'lucide-react';
import { healthStatus } from '../../data/mockData';

const HealthStatusCards: React.FC = () => {
  // Filter out only the status cards we need (Lungs, Teeth, Bone)
  const statusCards = healthStatus.filter(item => 
    ['Lungs', 'Teeth', 'Bone'].includes(item.name)
  );
  
  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'lungs':
        return <Lungs size={24} className="text-red-500" />;
      case 'tooth':
        return <Tooth size={24} className="text-green-500" />;
      case 'bone':
        return <Bone size={24} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {statusCards.map((status) => (
        <div key={status.id} className="bg-white rounded-2xl p-4 flex items-center">
          <div className="mr-4">
            {getIcon(status.icon)}
          </div>
          <div className="flex-1">
            <h3 className="text-gray-800 font-medium">{status.name}</h3>
            <p className="text-gray-500 text-sm">{status.details}</p>
            
            <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`${status.color} h-2 rounded-full`} 
                style={{ width: `${status.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;