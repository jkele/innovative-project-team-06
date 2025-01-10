import { Puncture } from "./puncture";

export type TestProject = {
  id: string;
  title: string;
  description: string;
  finished: boolean;
  street: string;
  punctures: Puncture[];
};

export type Project = {
  projectId: number;
  title: string;
  description: string;
  userId: number;
  finished: boolean;
  street: string;
};
