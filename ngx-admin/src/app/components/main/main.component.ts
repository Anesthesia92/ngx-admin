import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatTable} from "@angular/material/table";
import {BoardService} from "../../services/board-service.";
import {Card, Column} from "../../models/board.model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  constructor(
    public boardService: BoardService
  ) { }

  ngOnInit(): void {
    console.log('BOARD - INIT')
  }

  // tslint:disable-next-line:typedef
  onColorChange(color: string, columnId: number) {
    this.boardService.changeColumnColor(color, columnId);
  }

  onAddCard(text: string, columnId: number) {
    if(text) {
      this.boardService.addCard(text, columnId);
    }
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId);
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId);
  }

  // onChangeLike(event: {card: any, increase: boolean}, columnId: number ) {
  //   const { card: { id }, increase } = event
  //   this.boardService.changeLike(id, columnId, increase)
  // }
  //
  // onAddComment(event: {id: number, text: string}, columnId: number) {
  //   this.boardService.addComment(columnId, event.id, event.text)
  // }
  //
  // onDeleteComment(comment, columnId, item) {
  //   this.boardService.deleteComment(columnId, item.id, comment.id)
  // }

  drop(event: CdkDragDrop<Card[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
