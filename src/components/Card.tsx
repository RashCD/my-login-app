import React from 'react';
import merge from 'clsx';

const Card: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={merge(
        'w-auto h-auto rounded-lg shadow-md bg-white border-gray-500',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
