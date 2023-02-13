export interface Admin {
    nama: string;
    username: string;
    password: string;
  }
  
  export interface User {
    nama: string;
    username: string;
    password: string;
  }
  
  export interface Data {
    admin: Admin[];
    user: User[];
  }