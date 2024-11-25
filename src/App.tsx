import React from 'react';
import { Activity, Users, FileText, Pill, Clock, Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'patients', label: 'Patient Management', icon: Users },
    { id: 'pharmacy', label: 'Pharmacy Billing', icon: Pill },
    { id: 'queue', label: 'Queue Management', icon: Clock },
    { id: 'staff', label: 'Staff Management', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Background shapes for glassmorphism effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-200 blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 rounded-full bg-pink-200 blur-3xl opacity-30"></div>
      </div>

      <div className="flex">
        {/* Mobile menu button */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Sidebar */}
        <Sidebar
          menuItems={menuItems}
          currentView={currentView}
          setCurrentView={setCurrentView}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 lg:ml-72">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;