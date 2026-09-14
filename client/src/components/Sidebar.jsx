import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
import api from '../utils/api';

const Sidebar = ({ isOpen, toggleSidebar, menus = [] }) => {
  const location = useLocation();

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.Folder;
    return <IconComponent size={20} />;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar Content */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-surface-container-lowest border-r border-[#E7E7E7] z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg:static lg:w-64`}>
        
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-lg border-b border-[#E7E7E7]">
          <span className="font-headline-sm text-headline-sm font-bold text-primary">Sharnam Clinic</span>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden text-on-surface-variant hover:text-primary p-1"
            aria-label="Close sidebar"
          >
            <Icons.X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-md py-lg overflow-y-auto space-y-2">
          {menus.filter(m => !m.parentId).map((item) => {
            const path = item.listPageRoute || '#';
            const isActive = location.pathname === path || (location.pathname.startsWith(path) && path !== '/admin');
            
            return (
              <Link 
                key={item.id} 
                to={path}
                onClick={() => {
                  if (isOpen) toggleSidebar();
                }}
                className={`flex items-center gap-sm px-md py-sm rounded-lg font-label-md text-label-md transition-colors ${isActive ? 'bg-primary-container text-on-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'}`}
              >
                {renderIcon(item.icon)}
                <span>{item.menuName}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer info in sidebar */}
        <div className="p-lg border-t border-[#E7E7E7]">
          <p className="text-caption text-outline-variant font-medium">Sharnam Admin Panel</p>
          <p className="text-caption text-outline-variant">v1.0.0</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

// Force Vite reload
