import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarData, detailedAppointments } from '../../data/mockData';
import AppointmentCard from './AppointmentCard';

const CalendarView: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <ChevronLeft size={20} />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <ChevronRight size={20} />
          </button>
        </div>
        <h2 className="font-semibold text-lg">{calendarData.month}</h2>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {calendarData.days.map((day) => (
          <div key={day.id} className="text-center">
            <p className="text-xs text-gray-500 mb-1">{day.day}</p>
            <p className="text-lg font-medium">{day.date}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-xs">
        {calendarData.days.map((day) => (
          <div key={day.id} className="flex flex-col space-y-1">
            {day.appointments.map((apt, index) => (
              <div 
                key={index}
                className={`text-center p-1 rounded ${
                  day.id === 1 && apt.time === '10:00' ? 'bg-blue-200' :
                  day.id === 1 && apt.time === '11:00' ? 'bg-blue-200' :
                  day.id === 2 && apt.time === '09:00' ? 'bg-blue-200' :
                  day.id === 4 && apt.time === '11:00' ? 'bg-blue-200' :
                  day.id === 5 && apt.time === '14:00' ? 'bg-blue-200' :
                  day.id === 6 && apt.time === '12:00' ? 'bg-blue-200' :
                  day.id === 6 && apt.time === '14:00' ? 'bg-blue-200' :
                  day.id === 7 && apt.time === '09:00' ? 'bg-blue-200' :
                  'text-gray-400'
                }`}
              >
                {apt.time}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        {detailedAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            title={appointment.title}
            time={appointment.time}
            doctor={appointment.doctor}
            icon={appointment.icon}
            color={appointment.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;