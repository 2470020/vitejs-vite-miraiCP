export interface DoorLog {
    id: string;
    status: 'open' | 'closed';
    time: string;
  }
  
  export const createLogEntry = (status: 'open' | 'closed'): DoorLog => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      status: status,
      time: new Date().toLocaleTimeString(),
    };
  };