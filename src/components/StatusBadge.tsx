import React from 'react';
import { FaDoorOpen, FaDoorClosed } from 'react-icons/fa'; // アイコンも使いましょう！

export const StatusBadge = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div style={{
      padding: '30px',
      borderRadius: '20px',
      color: 'white',
      backgroundColor: isOpen ? '#e74c3c' : '#2ecc71', // 開いていたら赤、閉じていたら緑
      fontSize: '2.5rem',
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '4rem' }}>
        {isOpen ? <FaDoorOpen /> : <FaDoorClosed />}
      </div>
      {isOpen ? "使用中 (OPEN)" : "空室 (CLOSED)"}
    </div>
  );
};