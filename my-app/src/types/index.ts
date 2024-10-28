// src/types/index.ts
export interface Pin {
    x: number;
    y: number;
  }
  
  export interface Submission {
    id: string;
    pins: Pin[];
    timestamp: Date;
  }
  