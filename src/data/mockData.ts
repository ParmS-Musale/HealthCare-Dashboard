// Mock data for the healthcare dashboard

// Navigation links data
export const navigationLinks = [
  { id: 1, name: 'Dashboard', icon: 'layout-dashboard', active: true },
  { id: 2, name: 'History', icon: 'clock-rewind', active: false },
  { id: 3, name: 'Calendar', icon: 'calendar', active: false },
  { id: 4, name: 'Appointments', icon: 'calendar-check', active: false },
  { id: 5, name: 'Statistics', icon: 'bar-chart', active: false },
  { id: 6, name: 'Tests', icon: 'clipboard-list', active: false }
];

export const toolsLinks = [
  { id: 1, name: 'Chat', icon: 'message-square', active: false },
  { id: 2, name: 'Support', icon: 'help-circle', active: false },
  { id: 3, name: 'Setting', icon: 'settings', active: false }
];

// Health status data
export const healthStatus = [
  { 
    id: 1, 
    name: 'Healthy Heart', 
    status: 'good', 
    position: { top: '26%', left: '50%' }, 
    icon: 'heart-pulse',
    color: 'bg-red-500'
  },
  { 
    id: 2, 
    name: 'Lungs', 
    status: 'warning', 
    date: '20 Oct 2021', 
    icon: 'lungs',
    details: 'Date: 20 Oct 2021',
    progress: 25,
    color: 'bg-red-500'
  },
  { 
    id: 3, 
    name: 'Teeth', 
    status: 'good', 
    date: '20 Oct 2021', 
    icon: 'tooth',
    details: 'Date: 20 Oct 2021',
    progress: 85,
    color: 'bg-green-500'
  },
  { 
    id: 4, 
    name: 'Bone', 
    status: 'warning', 
    date: '20 Oct 2021', 
    icon: 'bone',
    details: 'Date: 20 Oct 2021',
    progress: 40,
    color: 'bg-red-500'
  },
  { 
    id: 5, 
    name: 'Healthy Leg', 
    status: 'good', 
    position: { bottom: '30%', left: '50%' },
    icon: 'activity',
    color: 'bg-cyan-500'
  }
];

// Calendar data
export const calendarData = {
  month: 'October 2021',
  days: [
    { id: 1, day: 'Mon', date: 25, appointments: [{ time: '10:00' }, { time: '11:00' }, { time: '12:00' }] },
    { id: 2, day: 'Tues', date: 26, appointments: [{ time: '08:00' }, { time: '09:00' }, { time: '10:00' }] },
    { id: 3, day: 'Wed', date: 27, appointments: [{ time: '12:00' }, { time: '13:00' }] },
    { id: 4, day: 'Thurs', date: 28, appointments: [{ time: '10:00' }, { time: '11:00' }] },
    { id: 5, day: 'Fri', date: 29, appointments: [{ time: '14:00' }, { time: '16:00' }] },
    { id: 6, day: 'Sat', date: 30, appointments: [{ time: '12:00' }, { time: '14:00' }, { time: '15:00' }] },
    { id: 7, day: 'Sun', date: 31, appointments: [{ time: '09:00' }, { time: '10:00' }, { time: '11:00' }] }
  ]
};

// Detailed appointments
export const detailedAppointments = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: 'tooth',
    color: 'bg-indigo-600'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Dorwart',
    icon: 'activity',
    color: 'bg-blue-500'
  }
];

// Upcoming schedule
export const upcomingSchedule = {
  thursday: [
    {
      id: 1,
      title: 'Health checkup complete',
      time: '11:00 AM',
      icon: 'check-circle',
      color: 'bg-blue-100'
    },
    {
      id: 2,
      title: 'Ophthalmologist',
      time: '14:00 PM',
      icon: 'eye',
      color: 'bg-blue-100'
    }
  ],
  saturday: [
    {
      id: 1,
      title: 'Cardiologist',
      time: '12:00 AM',
      icon: 'heart',
      color: 'bg-blue-100'
    },
    {
      id: 2,
      title: 'Neurologist',
      time: '16:00 PM',
      icon: 'brain',
      color: 'bg-blue-100'
    }
  ]
};

// Activity data
export const activityData = {
  title: 'Activity',
  subtitle: '3 appointment on this week',
  data: [
    { day: 'Mon', value: 30 },
    { day: 'Tues', value: 50 },
    { day: 'Wed', value: 25 },
    { day: 'Thurs', value: 60 },
    { day: 'Fri', value: 20 },
    { day: 'Sat', value: 45 },
    { day: 'Sun', value: 15 }
  ]
};