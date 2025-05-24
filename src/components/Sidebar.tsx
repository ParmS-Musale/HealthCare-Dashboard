import React from 'react';
import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  CalendarCheck, 
  BarChart, 
  ClipboardList,
  MessageSquare,
  HelpCircle,
  Settings
} from 'lucide-react';
import { navigationLinks, toolsLinks } from '../data/mockData';

const Sidebar: React.FC = () => {
  // Map icon names to actual Lucide React components
  const getIcon = (iconName: string, isActive: boolean) => {
    const className = `${isActive ? 'text-cyan-500' : 'text-gray-400'} mr-3`;
    const size = 20;
    
    switch (iconName) {
      case 'layout-dashboard':
        return <LayoutDashboard className={className} size={size} />;
      case 'clock-rewind':
        return <Clock className={className} size={size} />;
      case 'calendar':
        return <Calendar className={className} size={size} />;
      case 'calendar-check':
        return <CalendarCheck className={className} size={size} />;
      case 'bar-chart':
        return <BarChart className={className} size={size} />;
      case 'clipboard-list':
        return <ClipboardList className={className} size={size} />;
      case 'message-square':
        return <MessageSquare className={className} size={size} />;
      case 'help-circle':
        return <HelpCircle className={className} size={size} />;
      case 'settings':
        return <Settings className={className} size={size} />;
      default:
        return <LayoutDashboard className={className} size={size} />;
    }
  };

  return (
    <aside className="bg-white w-56 min-h-screen p-6 flex flex-col">
      <h2 className="text-sm text-gray-400 font-medium mb-6">General</h2>
      
      <nav className="space-y-2 mb-8">
        {navigationLinks.map((link) => (
          <a 
            key={link.id}
            href="#" 
            className={`flex items-center py-2 px-3 rounded-lg ${
              link.active ? 'bg-cyan-50 text-cyan-500' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {getIcon(link.icon, link.active)}
            <span className={link.active ? 'font-medium' : ''}>{link.name}</span>
          </a>
        ))}
      </nav>
      
      <h2 className="text-sm text-gray-400 font-medium mb-6">Tools</h2>
      
      <nav className="space-y-2">
        {toolsLinks.map((link) => (
          <a 
            key={link.id}
            href="#" 
            className={`flex items-center py-2 px-3 rounded-lg ${
              link.active ? 'bg-cyan-50 text-cyan-500' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {getIcon(link.icon, link.active)}
            <span>{link.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;