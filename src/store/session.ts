import { persist, devtools } from 'zustand/middleware'
import { create } from 'zustand'

export interface ISession {
  user: unknown
  addSession: (user: unknown) => void
}

export const useSessionStore = create<ISession>()(
  devtools(
    set => ({
      user: {},
      addSession: (user: unknown) => set(() => ({ user }))
    }),
    {
      name: 'session-storage'
    }
  )
)
