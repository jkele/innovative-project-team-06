import { Project } from "@/types/project";

export type ProjectInfoProperties = {
  project: Project;
};

export type User = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
};
