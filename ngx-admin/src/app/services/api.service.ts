import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, pluck } from 'rxjs';
import {
  BoardColumn,
  BoardModel,
  BoardData,
  BoardTask,
  CreateTask,
} from '../models/board.model'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  public token$ = new BehaviorSubject<string>('');

  public isInfoAddModeOn$ = new BehaviorSubject<boolean>(false);

  getBoards(): Observable<BoardModel[]> {
    return this.http.get<BoardModel[]>('boards');
  }

  createBoard(data: BoardData): Observable<any> {
    return this.http.post('boards', data);
  }

  editBoard(data: BoardData, boardId: string): Observable<BoardModel> {
    return this.http.put(`boards/${boardId}`, data) as Observable<BoardModel>;
  }

  deleteBoard(boardId: string): Observable<string> {
    return this.http.delete(`boards/${boardId}`) as Observable<string>;
  }

  getColumns(boardId: string): Observable<BoardColumn[]> {
    return this.http.get(`boards/${boardId}/columns`) as Observable<BoardColumn[]>;
  }

  getColumn(boardId: string, columnId: string) {
    return this.http.get(`boards/${boardId}/columns/${columnId}`);
  }

  createColumn(boardId: string, column: { title: string; order: number }) {
    return this.http.post(`boards/${boardId}/columns`, column) as Observable<BoardColumn>;
  }

  editColumn(boardId: string, column: { id: string; title: string; order: number }) {
    return this.http.put(`boards/${boardId}/columns/${column.id}`, {
      title: column.title,
      order: column.order,
    }) as Observable<BoardColumn>;
  }

  deleteColumn(boardId: string, columnId: string) {
    return this.http.delete(`boards/${boardId}/columns/${columnId}`);
  }

  getTasks(boardId: string, columnId: string): Observable<BoardTask[]> {
    return this.http.get(`boards/${boardId}/columns/${columnId}/tasks`) as Observable<BoardTask[]>;
  }

  // getTask(boardId: string, columnId: string, taskId: string) {
  //   return this.http.get(`boards/${boardId}/columns/${columnId}/tasks/${taskId}`);
  // }

  editTask(task: BoardTask): Observable<BoardTask> {
    const { title, description, order, done, userId, columnId, boardId } = task;
    return this.http.put(`boards/${task.boardId}/columns/${task.columnId}/tasks/${task.id}`, {
      title,
      description,
      order,
      done,
      userId,
      columnId,
      boardId,
    }) as Observable<BoardTask>;
  }

  createTask(boardId: string, columnId: string, task: CreateTask): Observable<BoardTask> {
    return this.http.post(
      `boards/${boardId}/columns/${columnId}/tasks`,
      task,
    ) as Observable<BoardTask>;
  }

  deleteTask(task: BoardTask) {
    return this.http.delete(`boards/${task.boardId}/columns/${task.columnId}/tasks/${task.id}`);
  }
}
