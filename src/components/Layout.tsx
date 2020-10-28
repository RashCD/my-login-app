import React from 'react';
import merge from 'clsx';

const Layout: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={merge(
        'h-screen w-screen bg-gradient-to-bl from-teal-300 via-white to-gray-500',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
