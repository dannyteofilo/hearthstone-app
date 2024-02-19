import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-60 h-20 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default Skeleton;