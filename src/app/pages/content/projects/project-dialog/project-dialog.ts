import { Component, ElementRef, viewChild, output } from '@angular/core';

@Component({
  selector: 'app-project-dialog',
  imports: [],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})
export class ProjectDialog {
  // Referenz auf das native HTML <dialog> Element
  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  // Event für die Elternkomponente beim Schließen
  readonly closed = output<boolean>();

  // Methode zum Öffnen (wird vom Parent aufgerufen)
  open(): void {
    this.dialogRef().nativeElement.showModal(); // showModal macht den Dialog echt modal mit Backdrop
  }

  // Methode zum Schließen
  close(confirmed: boolean): void {
    this.dialogRef().nativeElement.close();
    this.closed.emit(confirmed);
  }

  // Wird gefeuert, wenn der User die ESC-Taste drückt
  onCancel(): void {
    this.closed.emit(false);
  }

}
