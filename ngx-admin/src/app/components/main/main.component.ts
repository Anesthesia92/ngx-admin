import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, TemplateRef, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatTable} from "@angular/material/table";
import {BoardService} from "../../services/board-service.";
import {Card, Column} from "../../models/board.model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ColorEvent} from "ngx-color";
import {TemplatePortal} from "@angular/cdk/portal";
import {Overlay, OverlayRef} from "@angular/cdk/overlay";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  @Output() primaryColor: any = new EventEmitter<any>();

  public open: boolean | undefined;

  constructor(
    public boardService: BoardService
  ) { }

  public handleChange($event: ColorEvent) {
    this.primaryColor = $event.color.hex;
    console.log($event.color.hex)
  }
  //
  // onColorChange(color: string, columnId: number) {
  //   this.boardService.changeColumnColor(color, columnId)
  // }

  onAcceptBtnClick() {
    this.primaryColor.emit(this.primaryColor);
  }

  public onOpenColorPicker() {
    this.open = true
  }

  public onCloseColorPicker() {
    this.open = false
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId)
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId)
  }

  onAddCard(text: string, columnId: number) {
    if(text) {
      this.boardService.addCard(text, columnId)
    }
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
}
