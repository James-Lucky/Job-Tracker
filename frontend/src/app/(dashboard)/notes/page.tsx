"use client";

import { useNotesStore } from "@/store/useNotesStore";
import { Plus, Trash2, Building2, Calendar as CalendarIcon, Save } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function NotesPage() {
  const { notes, activeNoteId, setActiveNoteId, addNote, updateNote, deleteNote } = useNotesStore();
  
  const activeNote = notes.find(n => n.id === activeNoteId);
  const [title, setTitle] = useState(activeNote?.title || "");
  const [content, setContent] = useState(activeNote?.content || "");
  const [company, setCompany] = useState(activeNote?.company || "");

  // Sync state when active note changes
  useEffect(() => {
    if (activeNote) {
      setTitle(activeNote.title);
      setContent(activeNote.content);
      setCompany(activeNote.company || "");
    }
  }, [activeNoteId, activeNote]);

  const handleSave = () => {
    if (activeNoteId) {
      updateNote(activeNoteId, { title, content, company });
    }
  };

  const handleCreateNew = () => {
    addNote({ title: "New Note", content: "", company: "" });
  };

  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto h-[calc(100vh-80px)] flex flex-col gap-6">
      
      <header className="flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">Interview Notes</h1>
          <p className="text-lg font-medium text-black/70">Prepare for your upcoming rounds</p>
        </div>
      </header>

      <div className="flex-1 flex gap-8 overflow-hidden min-h-0">
        
        {/* Left Sidebar: Notes List */}
        <div className="w-1/3 max-w-[400px] bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl flex flex-col overflow-hidden shrink-0">
          <div className="p-4 border-b-2 border-black bg-[#96C8FB] flex justify-between items-center">
            <h2 className="font-extrabold text-xl">All Notes</h2>
            <button 
              onClick={handleCreateNew}
              className="size-10 bg-white border-2 border-black rounded-md flex items-center justify-center hover:bg-black/5 shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all"
            >
              <Plus className="size-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {notes.map((note) => (
              <div 
                key={note.id}
                onClick={() => setActiveNoteId(note.id)}
                className={`p-4 border-2 border-black rounded-md cursor-pointer transition-all ${
                  activeNoteId === note.id 
                    ? "bg-[#F4EFE6] shadow-[4px_4px_0_0_rgba(0,0,0,1)] translate-x-1" 
                    : "bg-white hover:bg-black/5"
                }`}
              >
                <h3 className="font-bold text-lg truncate mb-2">{note.title}</h3>
                <div className="flex items-center justify-between text-xs font-bold text-black/60">
                  {note.company && (
                    <span className="flex items-center gap-1 bg-black/5 px-2 py-1 rounded-sm border border-black/10">
                      <Building2 className="size-3" /> {note.company}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="size-3" /> {note.date}
                  </span>
                </div>
              </div>
            ))}
            
            {notes.length === 0 && (
              <div className="text-center text-black/50 font-medium py-10">
                No notes found. Create one!
              </div>
            )}
          </div>
        </div>

        {/* Right Area: Editor */}
        <div className="flex-1 bg-white border-2 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rounded-xl flex flex-col overflow-hidden">
          {activeNote ? (
            <>
              <div className="p-6 border-b-2 border-black bg-[#FFD1DC] flex justify-between items-center gap-4">
                <div className="flex-1 flex gap-4">
                  <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note Title"
                    className="flex-1 bg-white border-2 border-black px-4 py-2 font-extrabold text-xl rounded-sm outline-none focus:ring-2 focus:ring-black"
                  />
                  <input 
                    type="text" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company (optional)"
                    className="w-1/3 bg-white border-2 border-black px-4 py-2 font-bold rounded-sm outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-2 bg-[#65DFCD] border-2 border-black rounded-md font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all"
                  >
                    <Save className="size-4" /> Save
                  </button>
                  <button 
                    onClick={() => deleteNote(activeNote.id)}
                    className="size-11 bg-[#F05542] text-white border-2 border-black rounded-md flex items-center justify-center font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all"
                    title="Delete Note"
                  >
                    <Trash2 className="size-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 p-6 bg-[#F4EFE6]/30">
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Start typing your notes here... (Markdown supported visually soon)"
                  className="w-full h-full bg-white border-2 border-black p-6 font-medium text-lg rounded-md resize-none outline-none focus:ring-2 focus:ring-black shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.1)]"
                ></textarea>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-black/40 font-bold text-lg">
              Select a note or create a new one to start editing
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
