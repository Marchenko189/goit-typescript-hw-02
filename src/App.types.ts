export interface Article {
  id: number | string;
  urls: {
    regular: string;
    small: string;
  };
  altDescription: string;
}

export interface FetchArticlesResponse {
  results: Article[];
  total_pages: number;
}
