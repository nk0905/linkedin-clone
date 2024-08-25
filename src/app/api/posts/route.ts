import { IUser } from '@/types/user';

export interface AddPostRequestBody {
  user: IUser;
  text: string;
  imageUrl?: string | null;
}
