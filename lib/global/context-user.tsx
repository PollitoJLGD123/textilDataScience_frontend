'use client';
import { create } from 'zustand';
import { UserProfile } from '../types/user.type';
import { userInformation } from '../logic/auth';
import { postRequest } from '../api/api';

interface UserContextProfile {
  user: UserProfile | null;
  loading: boolean;
  setUser: (user: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  fetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useUserContext = create<UserContextProfile>((set) => ({
  user: null,
  loading: true,

  setUser: (user: UserProfile | null) => set({ user }),
  setLoading: (loading: boolean) => set({ loading }),

  fetchUser: async () => {
    set({ loading: true });
    try {
      const user = await userInformation();
      set({ user });
    } catch (error) {
      console.warn('Fallo al obtener el usuario', error);
      set({ user: null });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await postRequest('/api/auth/logout');
    } catch (error) {
      console.warn('Fallo al cerrar sesión', error);
    } finally {
      set({ user: null });
    }
  }
}));
