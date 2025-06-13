export interface ILibros {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
}

export type LibrosParams = {
  index?: number;
  max?: number;
  page?: number;
  search?: string;
};
