import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BoardService} from "../../../services/board-service.";

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.scss']
})
export class MainItemComponent {

  @Input() color: string | undefined;
  @Input() item: any;
  @Input() column: any;
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();

  commentInput = '';
  panelOpenState = false;

  constructor(public boardService: BoardService) {
  }

  onCardDelete(id: number) {
    this.emitDeleteCard.emit(id)
  }

  onCommentTextEmit(id: number) {
    this.emitText.emit({id, text: this.commentInput});
    this.commentInput = '';
    console.log(this.commentInput)
  }

  onAddComment(event: {id: number, text: string}, columnId: number) {
    this.boardService.addComment(columnId, event.id, event.text)
  }

  onDeleteComment(columnId: number, item: { id: number }, comment: { id: number }) {
    this.boardService.deleteComment(columnId, item.id, comment.id)
  }
}
