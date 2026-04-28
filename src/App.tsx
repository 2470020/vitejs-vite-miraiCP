import React, { useState } from 'react';
import { Timer } from './components/Timer';
import { LogTable } from './components/LogTable';
import { createLogEntry } from './services/DataManager';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<DoorLog[]>([]);

  const handleStatusChange = (newStatus: boolean) => {
    setIsOpen(newStatus);
    const newEntry = createLogEntry(newStatus ? 'open' : 'closed');
    setLogs(prev => [newEntry, ...prev]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ 
        padding: '20px', borderRadius: '10px', color: 'white',
        backgroundColor: isOpen ? '#e74c3c' : '#2ecc71', fontSize: '2rem' 
      }}>
        {isOpen ? "使用中 (OPEN)" : "空室 (CLOSED)"}
      </div>

      <Timer isOpen={isOpen} />
      
      <button 
        onClick={() => handleStatusChange(!isOpen)}
        style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', margin: '10px' }}
      >
        テスト：ドアを開閉する
      </button>

      <LogTable logs={logs} />
    </div>
  );
}