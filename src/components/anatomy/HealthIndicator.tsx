import React from 'react';

interface HealthIndicatorProps {
  position: string;
  className: string;
  color: string;
  label: string;
}

const HealthIndicator: React.FC<HealthIndicatorProps> = ({ 
  position, 
  className, 
  color, 
  label 
}) => {
  return (
    <div className={`${position} ${className} z-10`}>
      <div className={`px-3 py-1 ${color} text-white text-xs font-medium rounded-lg flex items-center justify-center whitespace-nowrap`}>
        {label}
      </div>
    </div>
  );
};

export default HealthIndicator;