import { create } from 'zustand';

export interface Interview {
  id: string;
  company: string;
  role: string;
  round: string;
  date: string; // ISO date or 'YYYY-MM-DD'
  time: string;
  status: 'UPCOMING' | 'COMPLETED' | 'CANCELLED';
  link?: string;
}

interface InterviewStore {
  interviews: Interview[];
  addInterview: (interview: Omit<Interview, 'id'>) => void;
  updateInterviewStatus: (id: string, status: Interview['status']) => void;
  deleteInterview: (id: string) => void;
}

const mockInterviews: Interview[] = [
  { id: '1', company: 'Google', role: 'Frontend Engineer', round: 'Technical Screen', date: '2024-04-15', time: '10:00 AM', status: 'UPCOMING', link: 'https://meet.google.com/abc-defg-hij' },
  { id: '2', company: 'Meta', role: 'React Developer', round: 'Behavioral', date: '2024-04-18', time: '2:30 PM', status: 'UPCOMING' },
  { id: '3', company: 'Stripe', role: 'Full Stack Intern', round: 'Final Loop', date: '2024-04-05', time: '9:00 AM', status: 'COMPLETED' },
];

export const useInterviewStore = create<InterviewStore>((set) => ({
  interviews: mockInterviews,
  addInterview: (data) => set((state) => ({
    interviews: [...state.interviews, { ...data, id: Math.random().toString(36).substr(2, 9) }],
  })),
  updateInterviewStatus: (id, status) => set((state) => ({
    interviews: state.interviews.map((i) => (i.id === id ? { ...i, status } : i)),
  })),
  deleteInterview: (id) => set((state) => ({
    interviews: state.interviews.filter((i) => i.id !== id),
  })),
}));
