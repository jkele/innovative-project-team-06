export type LoginFormInput = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  userId: number;
};
