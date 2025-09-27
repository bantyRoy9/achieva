import React from 'react';
import './style.css';

interface PaginationDotProps {
  isActive: boolean;
}

const PaginationDot: React.FC<PaginationDotProps> = ({ isActive }) => {
  return (
    <div className={`pagination-dot ${isActive ? 'active' : ''}`}></div>
  );
};

export default PaginationDot;