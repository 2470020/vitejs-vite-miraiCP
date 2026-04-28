import React from 'react';
import { DoorLog } from '../services/DataManager';

export const LogTable = ({ logs }: { logs: DoorLog[] }) => {
  return (
    <div style={{ width: '100%', maxWidth: '400px', marginTop: '20px', color: '#333' }}>
      <h3>入退室ログ</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
        <thead style={{ backgroundColor: '#eee' }}>
          <tr><th>時刻</th><th>状態</th></tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px', textAlign: 'center' }}>{log.time}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{log.status === 'open' ? '🔴入室' : '🟢退室'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};