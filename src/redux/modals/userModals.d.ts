export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  __v: number;
  height?: string;
  weight?: string;
  file?: null | any;
  address?: string;
  family?: string;
}

export interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null | undefined;
}
