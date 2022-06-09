export interface Board {
  title: string;
  color: any;
  attachments: any;
  id: string;
}

export interface Column {
  id: string;
  board: Board[];
  title: string;
  color: string;
  attachments: any;
}
