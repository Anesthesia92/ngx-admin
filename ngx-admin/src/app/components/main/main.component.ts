import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BoardService} from "../../services/board-service.";
import {Card} from "../../models/board.model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ColorEvent} from "ngx-color";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  public open: boolean | undefined;

  @Output() color: any = new EventEmitter<any>();

  constructor(public boardService: BoardService) { }

  public handleChange($event: ColorEvent) {
    this.color = $event.color.hex;
    console.log($event.color.hex)
  }

  public onOpenColorPicker() {
    this.open = true;
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId);
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId);
  }

  onAddCard(text: string, columnId: number) {
    if (text) {
      this.boardService.addCard(text, columnId);
    }
    this.onOpenColorPicker();
  }

  onAddComment(event: {id: number, text: string}, columnId: number) {
    this.boardService.addComment(columnId, event.id, event.text);
  }

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
  onCloseColorPicker() {
    this.open = false;
  }

}
