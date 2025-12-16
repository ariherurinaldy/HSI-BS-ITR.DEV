export interface Metric {
  label: string;
  value: number;
  max: number;
  percentage: number;
  icon: 'attitude' | 'effort' | 'academics' | 'skills';
}

export interface Task {
  id: string;
  type: 'ISSUE' | 'TASK' | 'BUG';
  description: string;
  status: 'Resolved' | 'Completed' | 'Open';
}

export interface Assessment {
  title: string;
  tag: string;
  exams: {
    label: string;
    score: number;
    max: number;
  }[];
  color: 'blue' | 'yellow';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: 'FINAL PROJECT' | 'PORTFOLIO';
  score?: number;
  imageIcon: 'terminal' | 'person' | 'mobile' | 'data';
}