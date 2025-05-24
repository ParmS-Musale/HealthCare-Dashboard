import React from 'react';
import { upcomingSchedule } from '../../data/mockData';
import AppointmentItem from './AppointmentItem';

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="font-semibold text-xl mb-6">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-gray-500 mb-3">On Thursday</h3>
          <div className="grid grid-cols-2 gap-4">
            {upcomingSchedule.thursday.map((appointment) => (
              <AppointmentItem
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
                color={appointment.color}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-gray-500 mb-3">On Saturday</h3>
          <div className="grid grid-cols-2 gap-4">
            {upcomingSchedule.saturday.map((appointment) => (
              <AppointmentItem
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
                color={appointment.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;