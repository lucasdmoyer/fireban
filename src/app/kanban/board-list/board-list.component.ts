import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';
import { BoardService } from '../board.service';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogComponent } from '../dialogs/board-dialog.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  boards: Board[];
  sub: Subscription;

  constructor(public BoardService: BoardService, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.sub = this.BoardService
      .getUserBoards()
      .subscribe(boards => (this.boards = boards));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.BoardService.sortBoards(this.boards);
  }


  openBoardDialog(): void {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '400px',
      // leave data empty since it's a new board
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // result is from our binding ngModel
      if (result) {
        this.BoardService.createBoard({
          title: result,
          priority: this.boards.length
        });
      }
    });
  }
}
