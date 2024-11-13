namespace ARTICLES {
  export interface ArticlesResponse {
    id: number;
    name: string;
    author: string;
    image: string;
    created_date: string;
    updated_date: string;
  }
  [];

  export interface ArticlesRequest {
    name: string;
    author: string;
    created_date: string;
    updated_date: string;
  }
  [];
}
