import React from 'react';
import { Bluetooth as Tooth, Activity } from 'lucide-react';

interface AppointmentCardProps {
  title: string;
  time: string;
  doctor: string;
  icon: string;
  color: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  time,
  doctor,
  icon,
  color
}) => {
  const getIcon = () => {
    switch(icon) {
      case 'tooth':
        return <Tooth className="text-white" size={24} />;
      case 'activity':
        return <Activity className="text-white" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className={`${color} text-white rounded-xl p-4 flex`}>
      <div className="flex flex-col flex-1">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-sm opacity-90">{time}</p>
        <p className="text-sm mt-2">{doctor}</p>
      </div>
      <div className="flex items-center justify-center ml-2">
        {getIcon()}
      </div>
    </div>
  );
};

export default AppointmentCard;