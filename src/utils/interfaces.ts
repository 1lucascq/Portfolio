export interface IProject {
  title: string;
  description: string;
  type: string;
  tech: string[];
  deploy?: string;
  gitHub: string;
}

export interface IProjectList {
  toDisplay: IProject[];
  toStore: IProject[];
}

export interface ISectionProps {
  isInScreen?: boolean
}
