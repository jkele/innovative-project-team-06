import { Puncture } from "./puncture";

export type Project = {
  id: string;
  title: string;
  description: string;
  finished: boolean;
  street: string;
  punctures: Puncture[];
};
