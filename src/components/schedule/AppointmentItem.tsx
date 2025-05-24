import React from 'react';
import { CheckCircle, Eye, Heart, Brain } from 'lucide-react';

interface AppointmentItemProps {
  title: string;
  time: string;
  icon: string;
  color: string;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({
  title,
  time,
  icon,
  color
}) => {
  const getIcon = () => {
    switch(icon) {
      case 'check-circle':
        return <CheckCircle className="text-blue-500" size={20} />;
      case 'eye':
        return <Eye className="text-blue-500" size={20} />;
      case 'heart':
        return <Heart className="text-red-500" size={20} />;
      case 'brain':
        return <Brain className="text-blue-500" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className={`${color} rounded-xl p-4 flex justify-between items-center`}>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div>
        {getIcon()}
      </div>
    </div>
  );
};

export default AppointmentItem;