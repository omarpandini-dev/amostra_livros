export type ContentKind = 'book' | 'comic';

export interface ContentPage {
  number: number;
  image: string;
  audio: string | null;
}

export interface ContentItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  age: string | null;
  featured: boolean;
  type: ContentKind;
  cover: string | null;
  pageCount: number;
  pages?: ContentPage[];
}

export type ProgressMap = Record<string, number>;
