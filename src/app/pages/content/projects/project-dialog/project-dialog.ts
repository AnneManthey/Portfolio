import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Input, OnDestroy, inject, output, viewChild } from '@angular/core';
import { ProjectInterface } from '../../../../shared/interfaces/project-interface';

@Component({
  selector: 'app-project-dialog',
  imports: [],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})
export class ProjectDialog {

  @Input() projectList: ProjectInterface | null = null;


  // Referenz auf das native HTML <dialog> Element
  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  // Event für die Elternkomponente beim Schließen
  readonly closed = output<boolean>();
  readonly nextProjectRequested = output<void>();
  private readonly document = inject(DOCUMENT);
  private previousBodyOverflow = '';
  private previousHtmlOverflow = '';

  // Methode zum Öffnen (wird vom Parent aufgerufen)
  open(): void {
    this.lockBackgroundScroll();
    this.dialogRef().nativeElement.showModal(); // showModal macht den Dialog echt modal mit Backdrop
  }

  // Methode zum Schließen
  close(confirmed: boolean): void {
    this.dialogRef().nativeElement.close();
    this.unlockBackgroundScroll();
    this.closed.emit(confirmed);
  }

  // Wird gefeuert, wenn der User die ESC-Taste drückt
  onCancel(): void {
    this.unlockBackgroundScroll();
    this.closed.emit(false);
  }

  showNextProject(): void {
    this.nextProjectRequested.emit();
  }

  ngOnDestroy(): void {
    this.unlockBackgroundScroll();
  }

  private lockBackgroundScroll(): void {
    const html = this.document.documentElement;
    const body = this.document.body;

    this.previousHtmlOverflow = html.style.overflow;
    this.previousBodyOverflow = body.style.overflow;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
  }

  private unlockBackgroundScroll(): void {
    const html = this.document.documentElement;
    const body = this.document.body;

    html.style.overflow = this.previousHtmlOverflow;
    body.style.overflow = this.previousBodyOverflow;
  }

}
