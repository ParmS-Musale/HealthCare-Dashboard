import React from 'react';
import AnatomySection from '../anatomy/AnatomySection';
import HealthStatusCards from '../health/HealthStatusCards';
import CalendarView from '../calendar/CalendarView';
import UpcomingSchedule from '../schedule/UpcomingSchedule';
import ActivityChart from '../activity/ActivityChart';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <AnatomySection />
        </div>
        
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <HealthStatusCards />
        </div>
        
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <ActivityChart />
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default Dashboard;