export interface AddProjectFormFields {
  title: string;
  description: string;
  finished: boolean;
  street: string;
}

export type CreateProjectResponse = {
  message: string;
  projectId: number;
};
