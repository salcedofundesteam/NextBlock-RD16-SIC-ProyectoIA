import React, { type ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8">
      {children}
    </div>
  );
};

export default DashboardLayout;
