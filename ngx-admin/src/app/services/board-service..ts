import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Board, Column} from "../models/board.model";

@Injectable({
  providedIn: 'root',
})
export class BoardService {

  private initColumn = [
    {
      id: '',
      title: 'To Do',
      color: '',
      attachments: ''
    },

  ]
  private column: Board[] = this.initColumn;
  private column$ = new BehaviorSubject<Board[]>(this.initColumn);

  getBoard$() {
    return this.column$.asObservable();
  }

  changeColumnColor(color: string, boardId: any) {
    this.column = this.column.map((board: Board) => {
      if (board.id == boardId) {
        board.color = color;
      }
      return board;
    });
    this.column$.next([...this.column]);
  }

  addBoard(title: string, color: string, attachments: any) {
    const newBoard: Board = {
      id: Date.now().toString(),
      title: title,
      color: '#009886',
      attachments: [],
    };
    this.column = [...this.column, newBoard];
    this.column$.next([...this.column]);
  }

}
