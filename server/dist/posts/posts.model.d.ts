import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
interface PostCreationAttributes {
    title: string;
    content: string;
    image: string;
    userId: number;
}
export declare class Post extends Model<Post, PostCreationAttributes> {
    id: number;
    title: string;
    content: string;
    image: string;
    userId: number;
    author: User;
}
export {};
