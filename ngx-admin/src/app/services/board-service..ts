import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Card, Column} from "../models/board.model";

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  private initBoard = [
    {
      id: 1,
      title: 'To Do',
      color: '#009886',
      attachments: 'lol',
      list: [
        {
          id: 1,
          text: 'Example card item',
        },
      ]
    },
  ]

  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  getBoard$() {
    return this.board$.asObservable()
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

  addColumn(title: string) {
    const newColumn: Column = {
      id: Date.now(),
      title: title,
      color: '#009886',
      list: [],
      attachments: ''
    };

    this.board = [...this.board, newColumn];
    this.board$.next([...this.board]);
  }

  addCard(text: string, columnId: number) {
    const newCard: Card = {
      id: Date.now(),
      text,
    };

    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [newCard, ...column.list];
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



}
