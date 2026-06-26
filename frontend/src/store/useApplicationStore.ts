import { create } from 'zustand';

export type ApplicationStatus = 'WISHLIST' | 'APPLIED' | 'OA' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

export interface Application {
  id: string;
  company: string;
  role: string;
  status: ApplicationStatus;
  location?: string;
  package?: string;
}

interface ApplicationStore {
  applications: Application[];
  setApplications: (apps: Application[]) => void;
  updateApplicationStatus: (id: string, newStatus: ApplicationStatus) => void;
  addApplication: (app: Application) => void;
}

const mockData: Application[] = [
  { id: '1', company: 'Google', role: 'Frontend Engineer', status: 'INTERVIEW', location: 'Remote', package: '150k' },
  { id: '2', company: 'Meta', role: 'React Developer', status: 'APPLIED', location: 'London' },
  { id: '3', company: 'Stripe', role: 'Full Stack Intern', status: 'WISHLIST' },
  { id: '4', company: 'Vercel', role: 'Software Engineer', status: 'OA' },
];

export const useApplicationStore = create<ApplicationStore>((set) => ({
  applications: mockData,
  setApplications: (apps) => set({ applications: apps }),
  updateApplicationStatus: (id, newStatus) => set((state) => ({
    applications: state.applications.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    ),
  })),
  addApplication: (app) => set((state) => ({
    applications: [...state.applications, app],
  })),
}));
