export interface Book {
    isbn: string;
    title: string;
    description?: string;
    author: string;
    nbPage?: number;
}