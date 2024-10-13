import { IMessage } from './message.interface';

export interface IChat {
  id: string;
  messages: IMessage[];
}
