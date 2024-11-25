import React from 'react';
import { Users, Activity, Clock, Pill, AlertCircle, TrendingUp, IconType } from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: IconType;
  color: string;
}

interface Activity {
  time: string;
  text: string;
  type: 'emergency' | 'success' | 'info' | 'normal';
}

const Dashboard: React.FC = () => {
  const stats: StatCard[] = [
    { 
      title: 'Current Patients',
      value: '127',
      change: '+5',
      icon: Users,
      color: 'blue'
    },
    { 
      title: 'Emergency Cases',
      value: '8',
      change: '+2',
      icon: AlertCircle,
      color: 'red'
    },
    { 
      title: 'Average Wait Time',
      value: '14 min',
      change: '-2',
      icon: Clock,
      color: 'green'
    },
    { 
      title: 'Today\'s Appointments',
      value: '48',
      change: '+12',
      icon: Activity,
      color: 'purple'
    },
    { 
      title: 'Pharmacy Orders',
      value: '94',
      change: '+7',
      icon: Pill,
      color: 'orange'
    },
    { 
      title: 'Revenue Today',
      value: '$24,589',
      change: '+8.2%',
      icon: TrendingUp,
      color: 'emerald'
    }
  ];

  const activities: Activity[] = [
    {
      time: '2 minutes ago',
      text: 'New patient admitted to Emergency Ward',
      type: 'emergency'
    },
    {
      time: '15 minutes ago',
      text: 'Dr. Sarah completed surgery in OR-2',
      type: 'success'
    },
    {
      time: '45 minutes ago',
      text: 'Pharmacy fulfilled prescription #2847',
      type: 'info'
    },
    {
      time: '1 hour ago',
      text: 'New appointment scheduled for tomorrow',
      type: 'normal'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Hospital Dashboard</h1>
          <p className="text-gray-600">Real-time overview of hospital operations</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            System Status: Operational
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative p-6 rounded-2xl overflow-hidden
                bg-white/60 backdrop-blur-lg shadow-lg
                border border-white/20 hover:shadow-xl
                transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from yesterday
                  </span>
                </div>
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg
                bg-white/40 backdrop-blur-sm
                hover:bg-white/60 transition-colors duration-200"
            >
              <div className={`
                w-2 h-2 rounded-full
                ${activity.type === 'emergency' ? 'bg-red-500' :
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'info' ? 'bg-blue-500' :
                  'bg-gray-500'}
              `}></div>
              <div className="flex-1">
                <p className="text-gray-800">{activity.text}</p>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;