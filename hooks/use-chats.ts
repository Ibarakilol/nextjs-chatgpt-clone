import { create } from 'zustand';

import { IChat, IMessage } from '@/interfaces';

type ChatsStore = {
  chats: IChat[];
  isLoading: boolean;
  createChat: (chatId: string) => void;
  removeChat: (chatId: string) => void;
  createMessage: (chatId: string, message: IMessage) => void;
  getChat: (chatId: string) => IChat | undefined;
};

export const useChats = create<ChatsStore>((set, get) => ({
  chats: [],
  isLoading: false,
  createChat: (chatId: string) =>
    set((prevState) => ({
      ...prevState,
      chats: [...prevState.chats, { id: chatId, messages: [] }],
    })),
  removeChat: (chatId: string) =>
    set((prevState) => ({
      ...prevState,
      chats: prevState.chats.filter((chat) => chat.id !== chatId),
    })),
  createMessage: (chatId: string, message: IMessage) =>
    set((prevState) => ({
      ...prevState,
      chats: prevState.chats.map((chat) =>
        chat.id === chatId ? { ...chat, messages: [...chat.messages, message] } : chat
      ),
    })),
  getChat: (chatId: string) => get().chats.find((chat) => chat.id === chatId),
}));
