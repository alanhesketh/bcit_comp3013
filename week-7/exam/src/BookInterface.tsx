export default interface BookInterface {
    id: number;
    name: string;
    author: string;
    coAuthor?: string;
    sequels?: [string];
    rating: number;
    coverImg: string;
}
