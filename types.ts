
export type Page = 'home' | 'services' | 'cases' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { name: string; value: number }[];
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
