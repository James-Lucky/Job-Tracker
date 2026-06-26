import { create } from 'zustand';

export interface Note {
  id: string;
  title: string;
  content: string;
  company?: string;
  date: string;
}

interface NotesStore {
  notes: Note[];
  activeNoteId: string | null;
  setActiveNoteId: (id: string | null) => void;
  addNote: (note: Omit<Note, 'id' | 'date'>) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
}

const mockNotes: Note[] = [
  { id: '1', title: 'Google Frontend Interview Prep', content: 'Need to review React hooks, specifically useMemo and useCallback. Also study system design for rendering large lists.', company: 'Google', date: '2024-03-12' },
  { id: '2', title: 'Questions for hiring manager', content: '1. What does a typical day look like?\n2. How is the team structured?\n3. What are the biggest challenges right now?', company: 'Meta', date: '2024-03-10' },
  { id: '3', title: 'Stripe API notes', content: 'Review Idempotency keys and webhooks. The technical screen focuses heavily on API design.', company: 'Stripe', date: '2024-03-08' },
];

export const useNotesStore = create<NotesStore>((set) => ({
  notes: mockNotes,
  activeNoteId: mockNotes[0].id,
  setActiveNoteId: (id) => set({ activeNoteId: id }),
  addNote: (noteData) => set((state) => {
    const newNote: Note = {
      ...noteData,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
    };
    return { 
      notes: [newNote, ...state.notes],
      activeNoteId: newNote.id 
    };
  }),
  updateNote: (id, updates) => set((state) => ({
    notes: state.notes.map((note) =>
      note.id === id ? { ...note, ...updates } : note
    ),
  })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter((note) => note.id !== id),
    activeNoteId: state.activeNoteId === id ? null : state.activeNoteId
  })),
}));
