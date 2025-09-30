// src/layout/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      {/* --- Header Section (Always Visible) --- */}
      <header style={{ 
        backgroundColor: '#333', 
        color: 'white', 
        padding: '10px 20px', 
        textAlign: 'center' 
      }}>
        <nav>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>🏠 Home Link</a>
        </nav>
      </header>

      {/* --- Main Content Area (Where the Home page will be rendered) --- */}
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> 
      </main>

      {/* --- Footer Section (Always Visible) --- */}
      <footer style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '10px 20px', 
        textAlign: 'center', 
        borderTop: '1px solid #ccc' 
      }}>
        <p>&copy; {new Date().getFullYear()} Simple App</p>
      </footer>
    </div>
  );
};

export default Layout;