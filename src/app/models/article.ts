export interface Article {
  title: string;
  authors: string[];
  year: string;
  journal: string;
  doi: string;
}

export interface YearGroup {
  year: string;
  articles: Article[];
}
