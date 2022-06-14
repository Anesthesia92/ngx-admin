export interface Card {
  comments: Comment[];
  id: number;
  text: string;
}

export interface Column {
  id: number;
  title: string;
  list: Card[];
  color: string;
}

export interface Comment {
  id: number;
  text: string;
}
