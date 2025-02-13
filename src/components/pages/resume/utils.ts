export interface User {
  name: string;
  login: string;
  avatar_url?: string;
  public_repos: number;
  created_at: string;
  html_url: string;
  blog?: string;
}

export interface Repo {
  name: string;
  html_url: string;
  language: string | null;
  updated_at: string;
}

export interface ResumeProps {
  user: User;
  repos: Repo[];
  navigate: (path: string) => void;
}

export const getTime = (date: Date | string) => new Date(date).getTime();

export const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000'];
