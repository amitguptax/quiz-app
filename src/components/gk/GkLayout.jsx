import React from 'react';
import { Outlet } from 'react-router-dom';

const GkLayout = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Add any shared layout (e.g., GK header, sidebar) here */}
      <Outlet />
    </div>
  );
};

export default GkLayout;
