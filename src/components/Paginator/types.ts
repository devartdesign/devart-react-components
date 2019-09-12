export enum LinkType {
  BUTTON,
  LINK
}

export interface IPaginatorQuery {
  page: number;
  limit: number;
  sort?: { by: string, direction: 'asc' | 'desc' };
}
