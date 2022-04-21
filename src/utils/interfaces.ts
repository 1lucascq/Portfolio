export interface IProject {
  title: string;
  description: string;
  type: string;
  tech: string[];
  deploy?: string;
  cover: string;
  gitHub: string;
}

export interface IProjectList {
  toDisplay: IProject[];
  toStore: IProject[];
}

export interface IProjectCard {
  project: IProject;
}

export interface ISectionProps {
  isInScreen?: boolean
}
