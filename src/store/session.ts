import { persist, devtools } from 'zustand/middleware'
import { create } from 'zustand'

interface ISession {
  user: unknown
  addSession: (user: unknown) => void
}

export const useSessionStore = create<ISession>()(
  devtools(
    persist(
      set => ({
        user: {},
        addSession: (user: unknown) => set(() => ({ user }))
      }),
      {
        name: 'session-storage'
      }
    )
  )
)
