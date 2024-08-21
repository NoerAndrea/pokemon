export interface Pagination {
  limit: number;
  count: number;
  totalPages: number;
}

export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  pagination?: Pagination;
  pokemon?: T;
}
