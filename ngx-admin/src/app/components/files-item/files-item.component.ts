import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-files-item',
  templateUrl: './files-item.component.html',
  styleUrls: ['./files-item.component.scss']
})
export class FilesItemComponent {

  @Input() commentInput: any;
  @Input() comment: any;
  @Output() emitComment: EventEmitter<any> = new EventEmitter();

  onCommentEmit(commentInput: Comment) {
    this.emitComment.emit(commentInput);
    console.log(commentInput)
  }

}
