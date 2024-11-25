import React from 'react';
import { X } from 'lucide-react';
import { IconType } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: IconType;
}

interface SidebarProps {
  menuItems: MenuItem[];
  currentView: string;
  setCurrentView: (view: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  menuItems, 
  currentView, 
  setCurrentView, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  return (
    <aside className={`
      fixed lg:static inset-y-0 left-0 z-40
      w-72 bg-white/70 backdrop-blur-xl shadow-2xl
      transform lg:transform-none transition-transform duration-300
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Close button for mobile */}
      <button
        className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <X className="w-6 h-6 text-gray-700" />
      </button>

      {/* Hospital Logo */}
      <div className="p-6 border-b border-gray-200/50">
        <h1 className="text-2xl font-bold text-blue-600">MediCare Plus</h1>
        <p className="text-sm text-gray-600">Hospital Management System</p>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setCurrentView(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full px-4 py-3 rounded-lg flex items-center gap-3
                    transition-all duration-200
                    ${currentView === item.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-gray-700 hover:bg-white/80'}
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;