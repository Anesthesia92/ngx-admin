import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Card, Column, Comment} from "../models/board.model";

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  private initBoard = [
    {
      id: 1,
      title: 'To Do',
      color: 'Color',
      list: [
        {
          id: 1,
          text: 'Example card item',
          color: 'Example card color',
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        },
      ]
    },
  ];

  private board: Column[] = this.initBoard;
  private board$ = new BehaviorSubject<Column[]>(this.initBoard);

  getBoard$() {
    return this.board$.asObservable();
  }

  addColumn(title: string) {
    const newColumn: Column = {
      id: Date.now(),
      title: title,
      list: [],
      color: '#009886',
    };

    this.board = [...this.board, newColumn];
    this.board$.next([...this.board]);
  }

  addCard(text: string, columnId: number) {
    const newCard: Card = {
      id: Date.now(),
      text,
      comments: [],
    };

    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [newCard, ...column.list];
      }
      return column;
    });

    this.board$.next([...this.board]);
  }


  changeColumnColor(color: string, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.color = color;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }


  deleteColumn(columnId: number) {
    this.board = this.board.filter((column: Column) => column.id !== columnId);
    this.board$.next([...this.board]);
  }

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            const newComment = {
              id: Date.now(),
              text,
            };
            card.comments = [newComment, ...card.comments];
          }
          return card;
        });
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  deleteComment(columnId: number, itemId: number, commentId: number) {
    this.board = this.board.map((column: Column) => {
      if(column.id === columnId) {
        column.list = column.list.map((item) => {
          if (item.id === itemId) {
            item.comments = item.comments.filter((comment: Comment) => {
              return comment.id !== commentId;
            })
          }
          return item
        })
      }
      return column
    })
    this.board$.next([...this.board])
  }

}
