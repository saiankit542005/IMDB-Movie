import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, { ...task, id: Date.now() }] })),
      deleteTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        })),
    }),
    { name: "task-storage" }
  )
);
