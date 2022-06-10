export interface Column {
  id: number,
  title: string,
  color: string,
  attachments: string,
  list: Card[],
}

export interface Card {
  id: number,
  text: string,
}
