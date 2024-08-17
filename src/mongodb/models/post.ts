import { IUser } from '@/types/user';
import { IComment } from './comment';

export interface IPostBase {
  user: IUser;
  text: string;
  imageUrl?: string;
  comments?: IComment[];
  likes?: string[];
}

export interface IPost extends IPostBase, Document {
  createdAt: string;
  updatedAt: string;
}
